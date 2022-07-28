export default {
  name: 'imageGallery',
  title: 'Image Gallery',
  type: 'object',
  fields: [
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      validavalidation: (Rule) => Rule.required(),
    },
    {
      name: 'images',
      title: 'images',
      type: 'array',
      options: {
        layout: 'grid',
      },
      of: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          hotspot: true,
          fields: [
            {
              name: 'alt',
              title: 'alt',
              type: 'string',
              options: {
                inHighlighted: true,
              },
              validavalidation: (Rule) => Rule.required(),
            },
          ],
          validavalidation: (Rule) => Rule.required(),
        },
      ],
      validavalidation: (Rule) => Rule.required().max(4),
    },
  ],
};
