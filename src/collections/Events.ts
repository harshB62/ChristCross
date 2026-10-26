import type { CollectionConfig } from 'payload'
export const Events: CollectionConfig = {
  slug: 'events', admin: { useAsTitle: 'title', defaultColumns: ['title', 'joinCode', 'status', 'updatedAt'] },
  access: { read: () => true, create: () => true, update: () => true, delete: () => true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea' },
    { name: 'joinCode', type: 'text', required: true, unique: true, index: true },
    { name: 'status', type: 'select', defaultValue: 'draft', options: [{ label: 'Draft', value: 'draft' }, { label: 'Live', value: 'live' }, { label: 'Ended', value: 'ended' }] },
    { name: 'hostName', type: 'text', defaultValue: 'Event host' },
    { name: 'questions', type: 'array', fields: [
      { name: 'prompt', type: 'textarea', required: true },
      { name: 'type', type: 'select', required: true, defaultValue: 'multiple-choice', options: [{ label: 'Multiple choice', value: 'multiple-choice' }, { label: 'Poll', value: 'poll' }, { label: 'Word cloud', value: 'word-cloud' }, { label: 'Open response', value: 'open-response' }] },
      { name: 'options', type: 'array', fields: [{ name: 'label', type: 'text', required: true }] },
      { name: 'correctAnswer', type: 'text' },
      { name: 'scriptureReference', type: 'text' },
      { name: 'durationSeconds', type: 'number', defaultValue: 30, min: 5, max: 600 },
    ] },
  ],
}
