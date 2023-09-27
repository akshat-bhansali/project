import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'cta',
  title: 'CTA Button',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'locale_string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
  ],
})
