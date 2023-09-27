import { createClient } from 'next-sanity'

import { locales } from './config'
import { LocaleRichText, LocaleString, LocaleText } from './schema'
import { SanityImageSource } from '@sanity/asset-utils'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!// "production"

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2023-05-03', // https://www.sanity.io/docs/api-versioning
  useCdn: false, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
})

const builder = imageUrlBuilder(sanityClient)
export function urlFor(image: SanityImageSource) {
  return builder.image(image)
}
export function localeText<T extends LocaleText | LocaleString>(
  text: T | undefined,
  locale: string
): string {
  if(!text) return ''
  if(!text[locale]) return text[locales[0]]||''
  return text[locale as (typeof locales)[number]] || ''
}

export function localeRichText<T extends LocaleRichText>(
  text: T | undefined,
  locale: string
): any[] | undefined {
  return text?.[locale as (typeof locales)[number]] || []
}
