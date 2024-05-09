const express = require("express")
const app = express()
const router = require("./routes");
const cors = require("cors")
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express")
require('dotenv').config();

const PORT = process.env.PORT

app.use(cors())
app.use(express.json())
app.use("/api/v1", router)

const options = {
    definition: {
        openapi : "3.0.0",
        info : {
            title: "Crypto-Currency converter API",
            version: "1.0.0"
        },
        servers : [
            {
                url: 'https://currency-converter-puce-tau.vercel.app/'
            }
        ]
    },
    apis: ['./routes/index.js']
}
const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(swaggerSpec))

app.listen(PORT, ()=>{
    console.log(`app is listening on ${PORT}`)
})