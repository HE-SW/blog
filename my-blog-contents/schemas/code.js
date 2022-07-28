import CodeInput from '../components/CodeInput';

export default {
  name: 'code',
  title: 'Code',
  type: 'object',
  fields: [
    {
      name: 'title',
      subtitle: 'Title',
      type: 'string',
      validavalidation: (Rule) => Rule.required(),
    },
    {
      name: 'language',
      subtitle: 'Language',
      type: 'string',
      validavalidation: (Rule) => Rule.required(),
    },
    {
      name: 'code',
      subtitle: 'Code',
      type: 'string',
      validavalidation: (Rule) => Rule.required(),
      inputComponent: CodeInput,
    },
  ],
};
