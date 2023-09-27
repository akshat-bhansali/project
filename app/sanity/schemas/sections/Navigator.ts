import { defineField, defineType } from 'sanity'

export const Navigator = defineType({
    name: 'navigator_section',
    description: 'Navigator Section',
    title: 'Navigator Section',
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
                            name: 'url',
                            title: 'url',
                            type: 'url',
                            validation:Rule=>Rule.uri({allowRelative:true})
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
            return {title:'Navigator',subtitle:`${items.length} items`,media:items[0]?.photo}
        }
    }
})
