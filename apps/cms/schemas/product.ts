import {defineField, defineType} from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
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

    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (r) => r.required(),
    }),

    defineField({name: 'tags', title: 'Tags', type: 'array', of: [{type: 'string'}]}),

    defineField({name: 'description_pt', title: 'Description (PT)', type: 'text'}),
    defineField({name: 'description_de', title: 'Description (DE)', type: 'text'}),

    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      validation: (r) => r.min(1),
    }),

    defineField({
      name: 'price_from_eur',
      title: 'Price from (EUR)',
      type: 'number',
      description: 'Base price to display as "from €X".',
    }),

    defineField({
      name: 'addons',
      title: 'Add-ons (price rules)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', title: 'Label', type: 'string', validation: (r) => r.required()},
            {name: 'price_eur', title: 'Price (EUR)', type: 'number', validation: (r) => r.min(0)},
          ],
          preview: {select: {title: 'label', subtitle: 'price_eur'}},
        },
      ],
    }),

    defineField({name: 'active', title: 'Active', type: 'boolean', initialValue: true}),
    defineField({name: 'order', title: 'Order', type: 'number', initialValue: 0}),
  ],
})