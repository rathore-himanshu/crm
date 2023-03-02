import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import routes from "./src/routes/crmRoutes"

const app = express()
const PORT = 3000

// mongoose connection
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser : true
})

// bodyparser setup
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

// serving static files
app.use(express.static('public'))

routes(app)

app.get("/", (req, res) => {
    res.send(`Node and Express server is running on port ${PORT}`)
});

app.listen(PORT, () => {
    console.log(`our server is running on port ${PORT}`)
});
