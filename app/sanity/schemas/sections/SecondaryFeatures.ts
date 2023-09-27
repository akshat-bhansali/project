import { defineField, defineType } from 'sanity'

export const SecondaryFeatures = defineType({
    name: 'secondary_features_section',
    description: 'Secondary Features Section',
    title: 'Secondary Features Section',
    type: 'object',
    fields: [
        defineField({
            name:'title',
            title:'Heading',
            type:'locale_string',
        }),
        defineField({
            name:'subtitle',
            title:'Sub Heading',
            type:'locale_string',
        }),
        defineField({
            name:'light',
            title:'Light Heading',
            type:'locale_string',
        }),
        defineField({
            name:'cta',
            title:'CTA',
            type:'cta',
        }),
        defineField({
            name: 'items',
            title: 'items',
            type: 'array',
            of:[
                defineField({
                    name: 'feature',
                    title: 'Feature',
                    type: 'object',
                    fields:[
                        defineField({
                            name: 'photo',
                            title: 'Photo',
                            type: 'photo',
                        }),
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
                    ]
                }),
            ]
        }),
    ],
    preview:{
        select:{
            title:'title.en',
            subtitle:'subtitle.en',
            items:'items',
        },
        prepare({title,subtitle,items}){
            return {title:title,subtitle:`(${items.length} features) ${subtitle}`, media:items[0]?.photo}
        }
    }
})
