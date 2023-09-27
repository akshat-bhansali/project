import {defineArrayMember, defineField, defineType} from 'sanity'

export const Steps = defineType({
    name: 'steps_section',
    description: 'Steps Section',
    title: 'Steps Section',
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
                defineArrayMember({
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
            items:'items',
        },
        prepare({title,items}){
            return {title:title,subtitle:`(${items.length} steps)`, media:items[0]?.photo}
        }
    }
})
