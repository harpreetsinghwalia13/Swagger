module.exports= {
    type: "object", 
    properties:{
        id:{
            type:"string",
            description: "This is a integration error",
            example:"Integration error 1"
        },
        title: {
            type: "string", 
            description: "Error Title", 
            example: "Error Title 1", 
          },
          resolved: {
            type: "boolean", 
            description: "The status of the error", 
            example: false, 
          },
          hint : {
              msg : "string",
              example :" please remove this line for resolving error"
          }

    } 
  }