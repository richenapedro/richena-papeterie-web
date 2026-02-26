import {defineField, defineType} from 'sanity'

export const quoteRequest = defineType({
  name: 'quoteRequest',
  title: 'Quote Request',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'email', title: 'Email', type: 'string'}),
    defineField({name: 'phone', title: 'Phone / WhatsApp', type: 'string'}),
    defineField({name: 'eventType', title: 'Event type', type: 'string'}),
    defineField({name: 'eventDate', title: 'Event date', type: 'date'}),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'quoteItem'}],
    }),
    defineField({name: 'notes', title: 'Notes', type: 'text'}),
    defineField({
      name: 'attachments',
      title: 'Attachments',
      type: 'array',
      of: [{type: 'file'}],
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {list: ['new', 'in_progress', 'answered', 'archived']},
      initialValue: 'new',
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'status'},
  },
})