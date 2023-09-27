import { defineField, defineType } from 'sanity'

export const FAQs = defineType({
    name: 'faq_section',
    description: 'FAQs Section',
    title: 'FAQs Section',
    type: 'object',
    fields: [
        defineField({
            name:'title',
            type:'locale_string',
            title:'Title'
        }),
        defineField({
            name: 'items',
            title: 'items',
            type: 'array',
            of:[
                defineField({
                    name: 'faq',
                    title: 'FAQ',
                    type: 'object',
                    fields:[
                        defineField({
                            name: 'photo',
                            title: 'Photo',
                            type: 'photo',
                        }),
                        defineField({
                            name: 'question',
                            title: 'Question',
                            type: 'locale_string',
                        }),
                        defineField({
                            name: 'answer',
                            title: 'Answer',
                            type: 'locale_rich_text',
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
            return {title,subtitle:`${items.length} faqs`,media:items[0]?.photo}
        }
    }
})
