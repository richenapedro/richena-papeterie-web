import {defineField, defineType} from 'sanity'

export const gallery = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Theme / Event', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (r) => r.required(),
    }),
    defineField({name: 'eventDate', title: 'Event date', type: 'date'}),
    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      validation: (r) => r.min(1),
    }),
    defineField({name: 'notes', title: 'Notes', type: 'text'}),
  ],
  preview: {
    select: {title: 'title', media: 'photos.0', date: 'eventDate'},
    prepare({title, media, date}) {
      return {title, media, subtitle: date ? `Date: ${date}` : undefined}
    },
  },
})