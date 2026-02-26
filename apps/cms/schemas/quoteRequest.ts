import {defineField, defineType} from 'sanity'

export const quoteRequest = defineType({
  name: 'quoteRequest',
  title: 'Quote Request',
  type: 'document',
  fields: [
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'new',
      options: {list: ['new', 'contacted', 'closed']},
    }),

    defineField({name: 'name', title: 'Name', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'email', title: 'Email', type: 'string'}),
    defineField({name: 'phone', title: 'Phone/WhatsApp', type: 'string'}),

    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {list: ['pt', 'de']},
      initialValue: 'pt',
    }),

    defineField({name: 'eventType', title: 'Event type', type: 'string'}),
    defineField({name: 'eventDate', title: 'Event date', type: 'date'}),

    defineField({
      name: 'items',
      title: 'Requested items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'item', title: 'Item', type: 'string', validation: (r) => r.required()},
            {name: 'quantity', title: 'Quantity', type: 'number', validation: (r) => r.min(1)},
          ],
        },
      ],
    }),

    defineField({name: 'notes', title: 'Notes', type: 'text'}),
    defineField({name: 'referenceLinks', title: 'Reference links', type: 'array', of: [{type: 'url'}]}),

    defineField({
      name: 'referenceImages',
      title: 'Reference images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
  ],
})