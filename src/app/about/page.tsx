import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { aboutMeHeadline, aboutParagraphs } from '@/config/infoConfig'
import { Container } from '@/components/layout/Container'

import portraitImage from '@/images/portrait.jpg'
import SocialLinks from '@/components/about/SocialLinks'

export const metadata: Metadata = {
  title: 'About Jiefei Li',
  description:
    'Jiefei Li - Data Scientist & Engineer with expertise in machine learning, data engineering, and AI.',
}

export default function About() {
  return (
    <Container className="mt-12 sm:mt-24">
      <div className="max-w-4xl mx-auto">
        {/* Header with image and social links */}
        <div className="flex flex-col items-center text-center gap-8 mb-10 pb-8 border-b border-zinc-200 dark:border-zinc-700/40">
          <div className="w-48 h-48 flex-shrink-0">
            <Image
              src={portraitImage}
              alt=""
              width={192}
              height={192}
              className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 shadow-md"
            />
          </div>
          <div className="flex flex-col items-center gap-4 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {aboutMeHeadline}
            </h1>
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              {aboutParagraphs[0]}
            </p>
            <SocialLinks />
          </div>
        </div>
        
        {/* Content */}
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          {aboutParagraphs.slice(1).map((paragraph, index) => (
            <p key={index} className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Container>
  )
}
