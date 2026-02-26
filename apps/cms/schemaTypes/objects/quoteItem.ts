import {defineField, defineType} from 'sanity'

export const quoteItem = defineType({
  name: 'quoteItem',
  title: 'Requested item',
  type: 'object',
  fields: [
    defineField({name: 'item', title: 'Item', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'quantity', title: 'Quantity', type: 'number', validation: (r) => r.min(1)}),
    defineField({name: 'details', title: 'Details', type: 'string'}),
  ],
})