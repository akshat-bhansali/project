import { defineField, defineType } from 'sanity'
import { locales } from '../../../../config'

export default defineType({
  name: 'locale_string',
  title: 'Localized String',
  type: 'object',

  fields: locales.map(locale=> defineField({
    name: locale,
    title: locale,
    type: 'string'
  })),
})
