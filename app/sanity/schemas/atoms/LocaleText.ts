import { defineField, defineType } from 'sanity'
import { locales } from '../../../../config'

export default defineType({
  name: 'locale_text',
  title: 'Localized Text',
  type: 'object',
  fields: locales.map(locale=> defineField({
    name: locale,
    title: locale,
    type: 'text'
  })),
})
