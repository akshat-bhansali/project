import { defineField, defineType } from 'sanity'

export const Features = defineType({
    name: 'feature_section',
    description: 'Feature Section',
    title: 'Feature Section',
    type: 'object',
    fields: [
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
            items:'items',
        },
        prepare({items}){
            return {title:'Features',subtitle:`${items.length} features`}
        }
    }
})
