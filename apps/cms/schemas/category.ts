import {defineField, defineType} from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category',
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
    defineField({name: 'order', title: 'Order', type: 'number', initialValue: 0}),
  ],
})