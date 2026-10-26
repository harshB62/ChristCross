import type { CollectionConfig } from 'payload'
export const Responses: CollectionConfig = {
  slug: 'responses', admin: { useAsTitle: 'participantName', defaultColumns: ['participantName', 'event', 'questionIndex', 'createdAt'] },
  access: { read: () => true, create: () => true, update: () => false, delete: () => true },
  fields: [
    { name: 'event', type: 'relationship', relationTo: 'events', required: true, index: true },
    { name: 'participantName', type: 'text', required: true },
    { name: 'questionIndex', type: 'number', required: true },
    { name: 'answer', type: 'text', required: true },
    { name: 'isCorrect', type: 'checkbox', defaultValue: false },
  ],
}
