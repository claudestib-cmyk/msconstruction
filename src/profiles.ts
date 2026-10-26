
/**
 * TAPIQ PERSONAL NFC LANDING PAGE
 *
 * Personal information displayed on the public website.
 * Only include contact details and links you want others to see.
 */

export type SocialKey =
  | 'facebook'
  | 'instagram'
  | 'tiktok'
  | 'linkedin'
  | 'youtube'
  | 'whatsapp'
  | 'googleBusiness'

export type CardProfile = {
  slug: string
  name: string
  role: string
  company: string
  bio?: string
  location?: string
  initials: string
  avatarUrl?: string
  coverUrl?: string
  accent: string
  email?: string
  phone?: string
  website?: string
  socials: Partial<Record<SocialKey, string>>
  socialAccounts: {
    name: string
    platforms: { key: SocialKey; url: string }[]
  }[]
}

export const profiles: CardProfile[] = [
  {
    slug: 'my-profile',

    name: 'Mafel D. Solon',
    role: 'Proprietor',
    company: 'Tapiq',
    bio: 'Computer Engineering graduate, web developer, and founder of Tapiq. Passionate about building digital experiences and smart solutions that make everyday connections simpler.',
    location: 'The Crescent Autospa & Café, H. Zamora St., Lanao, Dao, Tagbilaran City',
    initials: 'MS',
    avatarUrl: '/profile.png',
    coverUrl: '/bgmsconstruct.png',
    accent: '#2563eb',
    phone: '09755134987',
    socials: {},
    socialAccounts: [
      {
        name: 'Ms Construction',
        platforms: [{ key: 'facebook', url: 'https://www.facebook.com/msconservices/' }],
      },
      {
        name: 'Ms design & build',
        platforms: [{ key: 'instagram', url: 'https://www.instagram.com/msdesign.build/' }],
      },
      {
        name: 'The Crescent - Bilar',
        platforms: [{ key: 'facebook', url: 'https://www.facebook.com/dcrescentcafe' }],
      },
      {
        name: 'The Crescent Café & Autospa',
        platforms: [
          { key: 'facebook', url: 'https://www.facebook.com/crescentautospacafe' },
          { key: 'instagram', url: 'https://www.instagram.com/crescentautospa.cafe/' },
          { key: 'tiktok', url: 'https://www.tiktok.com/@the_crescentcafe' },
        ],
      },
    ],
  },
]

export const getProfile = (slug: string) =>
  profiles.find((p) => p.slug === slug)
