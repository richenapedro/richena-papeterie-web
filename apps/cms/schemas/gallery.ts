import {defineField, defineType} from 'sanity'

export const gallery = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({name: 'title_pt', title: 'Title (PT)', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'title_de', title: 'Title (DE)', type: 'string', validation: (r) => r.required()}),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title_pt', maxLength: 96},
      validation: (r) => r.required(),
    }),

    defineField({name: 'theme', title: 'Theme (tag)', type: 'string'}),

    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: {hotspot: true},
      validation: (r) => r.required(),
    }),

    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      validation: (r) => r.min(1),
    }),

    defineField({name: 'description_pt', title: 'Description (PT)', type: 'text'}),
    defineField({name: 'description_de', title: 'Description (DE)', type: 'text'}),

    defineField({name: 'order', title: 'Order', type: 'number', initialValue: 0}),
  ],
})