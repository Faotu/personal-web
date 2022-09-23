export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
  
      {
        name: "title",
        title: "Title",
        description: "Title of the project",
        type: "string",
      },
  
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hostpost: true,
        },
      },
  
      {
        name: "summary",
       title: "summary",
       type: "text",
      },
  
      {
        name: "technologies",
        title: "Technologies",
        type: "array",
        of: [{type: "reference", to: {type: "skill"}}],
      },
  
      {
        name: "linkToBuild",
        title: "LinkToBuild",
        type: "url",
      },
  
    ],
  
  }
  