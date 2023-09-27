import LocaleRichText from './atoms/LocaleRichText'
import LocaleString from './atoms/LocaleString'
import LocaleText from './atoms/LocaleText'
import Photo from './atoms/Photo'
import CTA from './atoms/CTA'
import { Page } from './documents/Page'
import { CTASection } from './sections/CTA'
import { FAQs } from './sections/FAQs'
import { Features } from './sections/Features'
import { Hero } from './sections/Hero'
import { Navigator } from './sections/Navigator'
import { SecondaryFeatures } from './sections/SecondaryFeatures'
import { SecondaryHero } from './sections/SecondaryHero'
import { Steps } from './sections/Steps'
import { Tabs } from './sections/Tabs'
const schema = [
  Page,
  LocaleRichText,
  LocaleString,
  LocaleText,
  Photo,
  CTA,
  CTASection,
  FAQs,
  Features,
  Hero,
  Navigator,
  SecondaryFeatures,
  SecondaryHero,
  Steps,
  Tabs,
]

export default schema
