import {defineField, defineType} from 'sanity'

export const productVariation = defineType({
  name: 'productVariation',
  title: 'Variation',
  type: 'object',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'size', title: 'Size', type: 'string'}),
    defineField({name: 'paper', title: 'Paper', type: 'string'}),
    defineField({name: 'finish', title: 'Finish', type: 'string'}),
    defineField({name: 'personalization', title: 'Personalization notes', type: 'string'}),
    defineField({
      name: 'priceDeltaEur',
      title: 'Extra price (EUR)',
      type: 'number',
      description: 'Optional: add-on price for this variation',
    }),
    defineField({name: 'leadTimeDays', title: 'Lead time (days)', type: 'number'}),
  ],
})