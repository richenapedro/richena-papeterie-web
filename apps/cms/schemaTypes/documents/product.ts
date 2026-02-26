import {defineField, defineType} from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Name', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (r) => r.required(),
    }),
    defineField({name: 'description', title: 'Description', type: 'text'}),
    defineField({
      name: 'images',
      title: 'Photos',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'startingAtEur',
      title: 'Starting at (EUR)',
      type: 'number',
      description: 'Displayed as “from €X”',
      validation: (r) => r.min(0),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
      description: 'e.g. Pooh, Safari, Wedding, Baby',
    }),
    defineField({
      name: 'variations',
      title: 'Variations',
      type: 'array',
      of: [{type: 'productVariation'}],
    }),
    defineField({name: 'active', title: 'Active', type: 'boolean', initialValue: true}),
  ],
  preview: {
    select: {title: 'title', media: 'images.0', categoryTitle: 'category.title'},
    prepare({title, media, categoryTitle}) {
      return {title, media, subtitle: categoryTitle ? `Category: ${categoryTitle}` : undefined}
    },
  },
})