export const headerNavItems = [
  { id: 'work', label: 'Work', href: '/work' },
  { id: 'services', label: 'Services', href: '/services' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'contact', label: 'Contact', href: '/contact' },
] as const

export const siteNavItems = headerNavItems

export const heroBackground =
  'https://images.unsplash.com/photo-1492691527719-9d1e07eab495?auto=format&fit=crop&w=2200&q=80'

export const aboutCopy =
  'A creative kind of agency specializing in grounding strategy, brand sentience, cult-creating creative, unreal video, and breath-catching visuals.'

export const portfolioItems = [
  {
    id: 'dime',
    client: 'Dime',
    title: 'Beautiful Skin For Every You',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80',
    className: 'md:col-span-4 md:row-span-3',
  },
  {
    id: 'jazz',
    client: 'Jazz',
    title: '50 Year Anthem',
    image:
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1400&q=80',
    className: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 'jordan',
    client: 'Jordan',
    title: 'VIP23 Boston',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=80',
    className: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 'on',
    client: 'ON',
    title: 'Find Your Pace',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
    className: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 'kizik',
    client: 'Kizik',
    title: 'Athens 2',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
    className: 'md:col-span-4 md:row-span-3',
  },
  {
    id: 'spylt',
    client: 'SPYLT',
    title: 'Sleepy Szn',
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80',
    className: 'md:col-span-4 md:row-span-2',
  },
]

export const selectedClients = [
  'Jordan Brand',
  'DJI',
  'Utah Jazz',
  'ON',
  'Sephora',
  'Spylt',
  'Kizik',
  'Dime',
  'Crumbl',
  'Lonely Ghost',
  'APL',
  'Vulcan',
  'Mr. Beast',
  'National Geographic',
]

export const clientLogos = [
  { label: 'APL', className: 'tracking-[-0.08em]' },
  { label: 'clearweather', className: 'text-[2rem] font-medium lowercase tracking-[-0.05em]' },
  { label: 'WANDRD', className: 'text-[1.7rem] tracking-[0.14em]' },
  { label: 'Jazz', className: 'text-[2.15rem] tracking-[-0.06em]' },
  { label: 'crumbl', className: 'text-[2.3rem] font-semibold lowercase tracking-[-0.05em]' },
  { label: 'ON', className: 'text-[2.25rem] tracking-[-0.08em]' },
  { label: 'Spylt', className: 'text-[2.15rem] italic tracking-[-0.06em]' },
  { label: 'JESSAKAE', className: 'text-[1.85rem] tracking-[0.2em]' },
  { label: 'VULCAN', className: 'text-[2.1rem] tracking-[0.1em]' },
  { label: 'kiln', className: 'text-[2.2rem] lowercase tracking-[-0.07em]' },
]

export const capabilities = [
  {
    name: 'Creative',
    eyebrow: 'Ideas that know where they are headed',
    description:
      'We sharpen the angle, the story, and the visual tension before the first frame is captured.',
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=2200&q=80',
  },
  {
    name: 'Production',
    eyebrow: 'Sets, crews, and cinematic execution',
    description:
      'From compact agile shoots to large-format productions, we build the process around the idea instead of forcing the idea into a template.',
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07eab495?auto=format&fit=crop&w=2200&q=80',
  },
  {
    name: 'Post',
    eyebrow: 'Editing, sound, pacing, and finish',
    description:
      'We shape footage into emotion, rhythm, and clarity with an editorial eye that protects the brand while making the work feel alive.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2200&q=80',
  },
  {
    name: 'Podcasts',
    eyebrow: 'Voice-led worlds people want to return to',
    description:
      'Podcast builds that feel cinematic, intimate, and designed for repeat listening across social, audio, and brand ecosystems.',
    image:
      'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=2200&q=80',
  },
  {
    name: 'Motion',
    eyebrow: 'Movement systems that sell the feeling',
    description:
      'Motion design, titles, typography, and product moments that carry the energy of the brand beyond a single campaign.',
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=2200&q=80',
  },
]

export const instagramCards = [
  {
    id: 'follow-1',
    className: 'min-h-[22rem] md:min-h-[26rem]',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
        alt: 'Silhouette outdoors',
      },
    ],
  },
  {
    id: 'follow-2',
    className: 'min-h-[22rem] md:min-h-[26rem]',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
        alt: 'Creative team',
      },
      {
        src: 'https://images.unsplash.com/photo-1516321310766-79ce1889bafc?auto=format&fit=crop&w=900&q=80',
        alt: 'Crowd energy',
      },
      {
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
        alt: 'Hands on gear',
      },
    ],
  },
  {
    id: 'follow-3',
    className: 'min-h-[22rem] md:min-h-[26rem]',
    label: 'We made a Super Bowl commercial',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=900&q=80',
        alt: 'Studio microphone',
      },
    ],
  },
  {
    id: 'follow-4',
    className: 'min-h-[22rem] md:min-h-[26rem]',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
        alt: 'Singer in studio',
      },
      {
        src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
        alt: 'Portrait with mic',
      },
      {
        src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
        alt: 'Reading script',
      },
    ],
  },
  {
    id: 'follow-5',
    className: 'min-h-[22rem] md:min-h-[26rem]',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80',
        alt: 'Store moment',
      },
      {
        src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
        alt: 'Sneaker closeup',
      },
      {
        src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
        alt: 'Face closeup',
      },
    ],
  },
  {
    id: 'follow-6',
    className: 'min-h-[22rem] md:min-h-[26rem]',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1492691527719-9d1e07eab495?auto=format&fit=crop&w=900&q=80',
        alt: 'Portrait crop',
      },
      {
        src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
        alt: 'Landscape silhouette',
      },
      {
        src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=900&q=80',
        alt: 'Music gear',
      },
    ],
  },
]

export const workProjects = [
  {
    id: 'humantra',
    client: 'Humantra',
    category: 'Hydration',
    title: 'Launch films, stills, and short-form edits built for daily performance rituals.',
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07eab495?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'virtue',
    client: 'Virtue',
    category: 'Training',
    title: 'Performance-led creative made to feel sharp, premium, and physically immediate.',
    image:
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'gymnation',
    client: 'Gymnation',
    category: 'Sport',
    title: 'Editorial campaign frames with enough tension to hold both web and paid social.',
    image:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'salte',
    client: 'Salte',
    category: 'Lifestyle',
    title: 'A cleaner outdoor visual system anchored in movement, sunlight, and pace.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'trailberg',
    client: 'Trailberg',
    category: 'Outdoor',
    title: 'Performance outerwear captured with crisp contrast, atmosphere, and terrain.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'ls',
    client: 'LS',
    category: 'Performance',
    title: 'Brand frames designed to work equally well as hero assets and product support.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'hydraid',
    client: 'Hydraid',
    category: 'Cycling',
    title: 'Fast-paced hydration storytelling that keeps the product close to the action.',
    image:
      'https://images.unsplash.com/photo-1516321310766-79ce1889bafc?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'ag1',
    client: 'AG1',
    category: 'Wellness',
    title: 'Ingredient-first product visuals with a tactile finish and a softer luxury tone.',
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'hystride',
    client: 'Hystride',
    category: 'Gear',
    title: 'Hard-light product portraits with bold reflections, texture, and edge detail.',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'gaam',
    client: 'GAAM',
    category: 'Nutrition',
    title: 'Tabletop supplement content that stays cinematic without losing product clarity.',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'hatstore',
    client: 'Hatstore',
    category: 'Retail',
    title: 'Clean summer product moments shaped for repeatable drops and quick refreshes.',
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'gymking',
    client: 'Gymking',
    category: 'Apparel',
    title: 'Minimalist brand storytelling with enough attitude to feel premium and modern.',
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1600&q=80',
  },
]

export const workedWithWordmarks = [
  { label: 'XXL NUTRITION', className: 'text-[1.15rem] tracking-[0.08em] md:text-[1.5rem]' },
  { label: 'GYMNATION', className: 'text-[1.4rem] tracking-[0.12em] md:text-[2rem]' },
  { label: 'HUMANTRA', className: 'text-[1.3rem] tracking-[0.18em] md:text-[2rem]' },
  { label: 'GAAM', className: 'text-[1.8rem] tracking-[-0.07em] md:text-[3rem]' },
  { label: 'virtue', className: 'text-[1.75rem] tracking-[-0.07em] md:text-[3rem]' },
  { label: 'GYMKING', className: 'text-[1.2rem] tracking-[0.3em] md:text-[1.75rem]' },
  { label: 'GHOST', className: 'text-[1.6rem] italic tracking-[-0.06em] md:text-[2.7rem]' },
  { label: 'PANDY', className: 'text-[1.55rem] tracking-[0.08em] md:text-[2.5rem]' },
  { label: 'HYPE', className: 'text-[1.8rem] italic tracking-[-0.08em] md:text-[2.7rem]' },
  { label: 'HYDRAID', className: 'text-[1.2rem] tracking-[0.14em] md:text-[1.8rem]' },
]

export const workAboutCopy =
  'Creative Hamd is a nimble production partner for brands that need strategy, tactile visuals, and a release-ready edit system in the same room. We build launch films, product stories, and social cutdowns that feel premium without drifting into polish for its own sake.'

export const workFeatureImage =
  'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=2200&q=80'

export const ctaBackground =
  'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=2200&q=80'

export const contactEmail = 'hello@creativehamd.com'

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Vimeo', href: 'https://vimeo.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]
