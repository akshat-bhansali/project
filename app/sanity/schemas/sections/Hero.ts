import { defineField, defineType } from 'sanity'

export const Hero = defineType({
    name: 'hero_section',
    description: 'Hero Section',
    title: 'Hero Section',
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
            type: 'locale_string',
        }),
        defineField({
            name: 'cta',
            title: 'Button',
            type: 'cta',
        }),
        defineField({
            name: 'photo',
            title: 'Photo',
            type: 'photo',
        }),
    ],
    preview:{
        select:{
            title:'title.en',
            subtitle:'subtitle.en',
            photo:'photo',
        },
        prepare({title,subtitle,photo}){
            return {title,subtitle,media:photo}
        }
    }
})
