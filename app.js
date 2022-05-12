const express = require('express');
const cors = require('cors');
const app = express();

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const PORT = 4000  || process.env.PORT;

const errorRouter = require('./routes/error.js')
const flowerror = require('./docs/errors/getFlowError');
const integrationerror = require('./docs/errors/getIntegrationError');
const FlowSchema = require('./docs/components/schemas/Flow')
const IntegrationSchema = require('./docs/components/schemas/Integration')


app.use(cors())
app.use(express.json())

app.use('/errors',errorRouter)

const options = {
    apis : ["./routes/error.js" ],
    definition : {
        openapi:"3.0.0",
        info : {
            title : "Error API",
            version : "1.0.0",
            description: "A simple error api in express js",
        },
        servers : [
            {
                url : "http://localhost:4000"
            }
        ],
        components: {
            schemas : {
               Flow : FlowSchema,
               Integration : IntegrationSchema, 
            }
        },
        paths : {
            "/errors/flowerror" : flowerror,
            "/errors/integrationerror" : integrationerror,
        }
    
    },
}





const specs = swaggerJsDoc(options)

app.use('/errorapis' , swaggerUI.serve , swaggerUI.setup(specs) )

app.listen(PORT, ()=>{
    console.log('server is running')
})


