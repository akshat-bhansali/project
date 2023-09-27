import {defineArrayMember, defineField, defineType} from 'sanity'

export const Page = defineType({
  name: 'page',
  description: 'Page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Various titles for the use-cases',
      type: 'object',
      fields: [
        defineField({
          name: 'main',
          title: 'Main Title',
          type: 'locale_string',
        }),
        defineField({
          name: 'meta',
          title: 'Meta Title',
          type: 'locale_string',
        }),
      ],
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      description:'index for homepage.',
      options: {
        source: 'title.main.en',
      },
    }),
    defineField({
      type: 'array',
      name: 'sections',
      title: 'Sections',
      of:[
        defineArrayMember({
          type: 'cta_section'
        }),
        defineArrayMember({
          type: 'faq_section'
        }),
        defineArrayMember({
          type: 'feature_section'
        }),
        defineArrayMember({
          type: 'hero_section'
        }),
        defineArrayMember({
          type: 'navigator_section'
        }),
        defineArrayMember({
          type: 'secondary_hero_section'
        }),
        defineArrayMember({
          type: 'secondary_features_section'
        }),
        defineArrayMember({
          type: 'steps_section'
        }),
        defineArrayMember({
          type: 'tabs_section'
        }),
      ]
    }),
  ],
  preview:{
    select:{
      title:'title.main.en',
      slug:'slug.current',
      items:'sections',
    },
    prepare({title,items}){
      return {title,subtitle:`/${title==='index'?'':title} (${items.length} sections)`,}
    }
  }
})
