import { AboutPreview } from '../components/sections/AboutPreview'
import { Achievements } from '../components/sections/Achievements'
import { CaseStudies } from '../components/sections/CaseStudies'
import { ContactCta } from '../components/sections/ContactCta'
import { Experience } from '../components/sections/Experience'
import { FeaturedWork } from '../components/sections/FeaturedWork'
import { GithubSection } from '../components/sections/GithubSection'
import { Hero } from '../components/sections/Hero'
import { Lab } from '../components/sections/Lab'
import { Principles } from '../components/sections/Principles'
import { WhatIBuild } from '../components/sections/WhatIBuild'
import { Writing } from '../components/sections/Writing'

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <WhatIBuild />
      <FeaturedWork />
      <CaseStudies />
      <Lab />
      <Writing />
      <GithubSection />
      <Experience />
      <Achievements />
      <Principles />
      <ContactCta />
    </>
  )
}
