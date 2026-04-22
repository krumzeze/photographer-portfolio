const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const nextDir = path.join(projectRoot, 'node_modules', '@next');
const nextPackageJsonPath = path.join(projectRoot, 'node_modules', 'next', 'package.json');
const isWsl = Boolean(process.env.WSL_DISTRO_NAME);

if (isWsl && projectRoot.startsWith('/mnt/')) {
  console.warn(
    [
      '',
      'Warning: this project is running from a Windows-mounted path inside WSL.',
      `Current path: ${projectRoot}`,
      'If Next.js crashes with "Bus error (core dumped)", move the project into the WSL Linux filesystem',
      'and reinstall dependencies there before running npm run build/start.',
      '',
    ].join('\n')
  );
}

if (!fs.existsSync(nextPackageJsonPath)) {
  const installCommands =
    process.platform === 'win32'
      ? ['Remove-Item -Recurse -Force node_modules', 'npm install', 'npm run build']
      : ['rm -rf node_modules', 'npm install', 'npm run build'];

  const installMessage = [
    '',
    'Next.js is not installed in node_modules yet.',
    'The last npm install probably did not finish successfully, so the next CLI is unavailable.',
    '',
    'Reinstall dependencies in the same environment where you plan to run the app:',
    ...installCommands.map((command) => `  ${command}`),
    '',
  ].join('\n');

  console.error(installMessage);
  process.exit(1);
}

if (!fs.existsSync(nextDir)) {
  process.exit(0);
}

const runtimeKey = `${process.platform}-${process.arch}`;
const expectedPackagesByRuntime = {
  'darwin-arm64': ['swc-darwin-arm64'],
  'darwin-x64': ['swc-darwin-x64'],
  'linux-arm64': ['swc-linux-arm64-gnu', 'swc-linux-arm64-musl'],
  'linux-x64': ['swc-linux-x64-gnu', 'swc-linux-x64-musl'],
  'win32-arm64': ['swc-win32-arm64-msvc'],
  'win32-ia32': ['swc-win32-ia32-msvc'],
  'win32-x64': ['swc-win32-x64-msvc'],
};

const expectedPackages = expectedPackagesByRuntime[runtimeKey];

if (!expectedPackages) {
  process.exit(0);
}

const installedPackages = fs
  .readdirSync(nextDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && entry.name.startsWith('swc-'))
  .map((entry) => entry.name)
  .sort();

if (installedPackages.length === 0) {
  process.exit(0);
}

const hasExpectedPackage = expectedPackages.some((pkg) =>
  fs.existsSync(path.join(nextDir, pkg))
);

if (hasExpectedPackage) {
  process.exit(0);
}

const nextVersion = JSON.parse(fs.readFileSync(nextPackageJsonPath, 'utf8')).version;

const fixCommands =
  process.platform === 'win32'
    ? ['Remove-Item -Recurse -Force node_modules', 'npm install', 'npm run build']
    : ['rm -rf node_modules', 'npm install', 'npm run build'];

const message = [
  '',
  'Next.js is missing the SWC binary for this runtime.',
  `Detected runtime: ${runtimeKey}`,
  `Expected one of: ${expectedPackages.join(', ')}`,
  `Found in node_modules/@next: ${installedPackages.join(', ')}`,
  '',
  isWsl
    ? 'This usually means dependencies were installed in Windows and are now being used from WSL/Linux.'
    : 'This usually means dependencies were installed in a different OS than the one running this command.',
  '',
  'Reinstall dependencies in the same environment where you build/run the app:',
  ...fixCommands.map((command) => `  ${command}`),
  '',
  `Current Next.js version: ${nextVersion}`,
  'Important: keep npm install and npm run build/start in the same OS environment.',
  '',
].join('\n');

console.error(message);
process.exit(1);
