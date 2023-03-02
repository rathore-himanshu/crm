import express from "express"
import routes from "./src/routes/crmRoutes"

const app = express()
const PORT = 3000

routes(app)

app.get("/", (req, res) => {
    res.send(`Node and Express server is running on port ${PORT}`)
});

app.listen(PORT, () => {
    console.log(`our server is running on port ${PORT}`)
});
