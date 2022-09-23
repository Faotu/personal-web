export default {
    name: 'experience',
    title: 'Experinece',
    type: 'document',
    fields: [
  
      {
        name: "jobTitle",
        title: "JobTitle",
        type: "string",
      },
  
      {
        name: "companyImage",
        title: "Company Image",
        type: "image",
        options: {
          hostpost: true,
        },
      },
  
      {
        name: "company",
       title: "Company",
       type: "text",
      },
  
      {
        name: "dateStarted",
        title: "DateStarted",
        type: "date",
        options: {
          hostpost: true,
        },
      },
  
      {
        name: "dateEnd",
        title: "DateEnd",
        type: "date",
      },
  
      {
        name: "isCurrentlyWorkingHere",
        title: "IsCurrentlyWOrkingHere",
        type: "boolean",
      },
      {
        name: "technologies",
        title: "Technologies",
        type: "array",
        of: [{type: "reference", to: {type: "social"}}],

      },
      {
        name: "points",
        title: "Points",
        type: "array",
        of: [{type: "string" }],
      }
  
    ],
  
  }
  