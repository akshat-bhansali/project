import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'photo',
  title: 'Photo',
  type: 'image',
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'locale_string',
    }),
  ],
})
