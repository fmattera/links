import { type IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types'
import { FiBook } from 'react-icons/fi'
import {
  SiDevdotto,
  SiDiscord,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiStackoverflow,
  SiSteam,
  SiTwitter,
  SiYoutube
} from 'react-icons/si'

type Site = {
  url: string
  logo: string
  title: string
  name: string
  keywords: string[]
  titleTemplate: string
  description: string
  favicons: IconDescriptor[]
  links: Array<{
    icon: React.ReactNode
    title: string
    url: string
  }>
}

export const site: Site = {
  url:
    process.env.NODE_ENV === 'production'
      ? 'https://links.honghong.me'
      : 'http://localhost:3000',
  logo: 'https://honghong.me/images/avatar.png',
  title: 'Links',
  name: 'Hong',
  keywords: [
    'tszhong0411',
    'tszhong0411 social media',
    'tszhong0411 links',
    'links'
  ],
  titleTemplate: '- Links',
  description:
    'Connect with me on all my social media profiles through Links. Discover new content and stay updated with my latest posts!',
  favicons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png'
    }
  ],
  links: [
    {
      icon: <FiBook className='text-zinc-300' />,
      title: 'Blog',
      url: 'https://honghong.me/blog'
    },
    {
      icon: <SiYoutube className='text-zinc-300' />,
      title: 'YouTube',
      url: 'https://www.youtube.com/@tszhong0411'
    },
    {
      icon: <SiFacebook className='text-zinc-300' />,
      title: 'Facebook',
      url: 'https://www.facebook.com/tszhong0411/'
    },
    {
      icon: <SiSteam className='text-zinc-300' />,
      title: 'Steam',
      url: 'https://steamcommunity.com/profiles/76561199157324617/'
    },
    {
      icon: <SiInstagram className='text-zinc-300' />,
      title: 'Instagram',
      url: 'https://instagram.com/tszhong0411/'
    },
    {
      icon: <SiGithub className='text-zinc-300' />,
      title: 'Github',
      url: 'https://github.com/tszhong0411'
    },
    {
      icon: <SiDiscord className='text-zinc-300' />,
      title: 'Discord',
      url: 'https://discordapp.com/users/886269624608522240'
    },
    {
      icon: <SiTwitter className='text-zinc-300' />,
      title: 'Twitter',
      url: 'https://twitter.com/tszhong0411'
    },
    {
      icon: <SiStackoverflow className='text-zinc-300' />,
      title: 'Stack overflow',
      url: 'https://stackoverflow.com/users/15166428'
    },
    {
      icon: <SiDevdotto className='text-zinc-300' />,
      title: 'Dev.to',
      url: 'https://dev.to/tszhong0411'
    }
  ]
}
