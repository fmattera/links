import Image from 'next/image'
import { MdEmail } from 'react-icons/md'
import { SiCalendly, SiGithub, SiLinkedin } from 'react-icons/si'

import Spotlight from '@/components/spotlight'

import PrimaryLinks from './primary-links'

const links = [
  {
    icon: <SiLinkedin className='text-zinc-300' />,
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/francesco-mattera-252086230/'
  },
  {
    icon: <SiCalendly className='text-zinc-300' />,
    title: 'Book a meeting',
    url: 'https://calendly.com/francesco-neolocus/let-s-explore-possibilities'
  },
  {
    icon: <MdEmail className='text-zinc-300' />,
    title: 'Shoot an email',
    url: 'mailto:f.mattera.it@gmail.com'
  },
  {
    icon: <SiGithub className='text-zinc-300' />,
    title: 'GitHub',
    url: 'https://github.com/fmattera'
  }
]

const HomePage = () => {
  return (
    <>
      <div className='relative mx-auto flex flex-col items-center justify-center gap-4 pb-10 pt-24'>
        <Spotlight className='-top-4 left-56' />
        <Image
          src='/images/francesco.jpeg'
          width={90}
          height={90}
          alt='Logo'
          className='rounded-full'
          priority
        />
        <h1 className='text-xl font-semibold'>Francesco Mattera</h1>
        <p className='text-[#a1a1a1]'>AI Product Manager</p>
      </div>
      <PrimaryLinks />
      <div className='flex flex-col gap-4 py-3'>
        {links.map((link) => {
          const { icon, title, url } = link

          return (
            <a
              key={url}
              href={url}
              className='relative flex h-14 w-full items-center justify-center rounded-xl border border-zinc-700 bg-[#151414] px-8 py-4 transition-colors duration-300 hover:border-zinc-500'
              target='_blank'
              rel='noopener, noreferrer'
            >
              <div className='absolute left-8'>{icon}</div>
              <div className='text-zinc-100'>{title}</div>
            </a>
          )
        })}
      </div>
    </>
  )
}

export default HomePage
