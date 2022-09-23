export default {
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [

    {
      name: "name",
      title: "Name",
      type: "string",
    },

    {
      name: "heroImage",
      title: "Image",
      type: "image",
      options: {
        hostpost: true,
      },
    },

    {
      name: "backgroundInformation",
     title: "BackgroundInformation",
     type: "string",
    },

    {
      name: "profilePic",
      title: "ProfilePic",
      type: "image",
      options: {
        hostpost: true,
      },
    },

    {
      name: "phoneNumber",
      title: "PhoneNumber",
      type: "string",
    },

    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "social",
      title: "Social",
      type: "array",
      of: [{type: "reference", to: {type: "social"}}],
    }

  ],

}
