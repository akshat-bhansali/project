import { defineField, defineType } from 'sanity'

export const CTASection = defineType({
    name: 'cta_section',
    description: 'CTA Section',
    title: 'CTA Section',
    type: 'object',
    fields: [
        defineField({
            name:'title',
            title:'Heading',
            type:'locale_rich_text',
        }),
        defineField({
            name:'cta',
            title:'CTA',
            type:'cta',
        }),
    ],
    preview:{
        select:{
            title:'title.en',
            subtitle:'cta.title.en',
        },
    }
})
