import { defineArrayMember, defineField, defineType } from 'sanity'
import { locales } from '../../../../config'

export default defineType({
  name: 'locale_rich_text',
  title: 'Localized Rich Text',
  type: 'object',
  fields: locales.map(locale=> defineField({
      name: locale,
      title: locale,
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
        defineArrayMember({
          type: 'photo',
        }),
      ],
    })),
})
