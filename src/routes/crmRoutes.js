import { addNewContact } from "../controllers/crmController"

const routes = (app) => {
        app.route('/contact')
        .get((req, res, next) => {
                //middleware
                console.log(`Request from: ${req.originalUrl}`)
                console.log(`Request type: ${req.method}`)
                next()
        }, (req, res, next) => {
                res.send('GET request is successful')
        })

        .post(addNewContact)

        app.route('/contact/:contactId')
        .put((req, res) => {
                res.send('PUT request is successful')
        })

        .delete((req, res) => {
                res.send('DELETE request is successful')
        })
}

export default routes