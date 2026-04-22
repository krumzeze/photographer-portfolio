# Ubuntu Server Deploy

This project is ready to run behind host-level Nginx with HTTPS from Let's Encrypt.

## 1. DNS

Create an `A` record for `creativehamd.krumzzz.com` that points to your server IPv4 address.

If you use IPv6, also create an `AAAA` record that points to the server IPv6 address.

Wait until DNS resolves correctly:

```bash
dig +short creativehamd.krumzzz.com
```

## 2. Install Docker, Nginx and Certbot

```bash
sudo apt update
sudo apt install -y ca-certificates curl gnupg nginx certbot python3-certbot-nginx
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo systemctl enable --now docker
sudo systemctl enable --now nginx
sudo usermod -aG docker $USER
```

Log out and back in after `usermod`, or reconnect over SSH.

## 3. Open firewall

If you use UFW:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

## 4. Upload project to the server

Option A, with git:

```bash
cd /opt
sudo mkdir -p creative-agency-landing
sudo chown $USER:$USER creative-agency-landing
git clone <YOUR_REPOSITORY_URL> /opt/creative-agency-landing
cd /opt/creative-agency-landing
```

Option B, from local machine with rsync:

```bash
rsync -avz --delete ./ user@YOUR_SERVER_IP:/opt/creative-agency-landing/
```

## 5. Start the app in Docker

The app is published only to `127.0.0.1:3000`, so it is reachable through Nginx but not directly from the internet.

```bash
cd /opt/creative-agency-landing
docker compose up --build -d
docker compose ps
curl http://127.0.0.1:3000
```

## 6. Configure Nginx

Copy the prepared config:

```bash
sudo cp deploy/nginx/creativehamd.krumzzz.com.conf /etc/nginx/sites-available/creativehamd.krumzzz.com
sudo ln -s /etc/nginx/sites-available/creativehamd.krumzzz.com /etc/nginx/sites-enabled/creativehamd.krumzzz.com
sudo nginx -t
sudo systemctl reload nginx
```

If the default site is still enabled and conflicts with your config:

```bash
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

## 7. Issue the HTTPS certificate

```bash
sudo certbot --nginx -d creativehamd.krumzzz.com
```

Choose the redirect to HTTPS when Certbot asks.

## 8. Verify certificate renewal

```bash
systemctl status certbot.timer
sudo certbot renew --dry-run
```

## 9. Verify the site

Check:

- `https://creativehamd.krumzzz.com`
- `curl -I https://creativehamd.krumzzz.com`
- `docker compose logs -f`
- `sudo tail -f /var/log/nginx/error.log`

## 10. Autostart after reboot

This repo already uses `restart: unless-stopped` in `compose.yaml`, so containers will restart after a server reboot if the Docker service is enabled.

Verify:

```bash
sudo systemctl is-enabled docker
docker inspect -f '{{.HostConfig.RestartPolicy.Name}}' $(docker compose ps -q app)
```

Optional: manage the stack through `systemd`:

```bash
sudo cp deploy/creative-agency.service /etc/systemd/system/creative-agency.service
sudo systemctl daemon-reload
sudo systemctl enable --now creative-agency.service
```

Edit `/etc/systemd/system/creative-agency.service` first if your project lives outside `/opt/creative-agency-landing`.

## Updating the site later

```bash
cd /opt/creative-agency-landing
git pull
docker compose up --build -d
```
