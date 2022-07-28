export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validavalidation: (Rule) => Rule.required(),
    },
    {
      name: 'mainPost',
      title: 'Main Post',
      type: 'reference',
      to: { type: 'post' },
      validavalidation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'mainPost.title',
    },
  },
};
