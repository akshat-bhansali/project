import { defineField, defineType } from 'sanity'

export const Tabs = defineType({
    name: 'tabs_section',
    description: 'Tabs Section',
    title: 'Tabs Section',
    type: 'object',
    fields: [
        defineField({
            name:'title',
            title:'Heading',
            type:'locale_string',
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
                            name: 'color',
                            title: 'Color',
                            type: 'string',
                        }),
                        defineField({
                            name: 'points',
                            title: 'Points',
                            type: 'array',
                            of:[
                                defineField({
                                    name:'point',
                                    type:'locale_string',
                                    title:"Point"
                                })
                            ]
                        }),
                    ]
                }),
            ]
        }),
    ],
    preview:{
        select:{
            title:'title.en',
            items:'items',
        },
        prepare({title,items}){
            return {title:title,subtitle:`(${items.length} tabs)`}
        }
    }
})
