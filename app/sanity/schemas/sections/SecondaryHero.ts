import { defineField, defineType } from 'sanity'

export const SecondaryHero = defineType({
    name: 'secondary_hero_section',
    description: 'Secondary Hero Section',
    title: 'Secondary Hero Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'locale_string',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'locale_rich_text',
        }),
        defineField({
            name: 'cta',
            title: 'Button',
            type: 'cta',
        }),
        defineField({
            name: 'logos',
            title: 'Logos',
            type: 'array',
            of:[
                defineField({
                    name: 'photo',
                    title: 'Photo',
                    type: 'photo',
                }),
            ]
        }),
    ],
    preview:{
        select:{
            title:'title.en',
            items:'logos',
        },
        prepare({title,items}){
            return {title:title,subtitle:`(${items.length} logos)`, media:items[0]}
        }
    }
})
