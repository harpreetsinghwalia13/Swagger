module.exports = {
                type: "object",
                
                properties:{
                    id:{
                        type:"string",
                        description: "This is a flow error",
                        example:"Flow error 1"
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

                } 
                
              }