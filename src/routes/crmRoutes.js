import { addNewContact, getContacts, getContactWithID } from "../controllers/crmController"

const routes = (app) => {
        app.route('/contact')
        .get((req, res, next) => {
                // example of middleware
                console.log(`Request from: ${req.originalUrl}`)
                console.log(`Request type: ${req.method}`)
                next()
        }, getContacts)

        .post(addNewContact)

        app.route('/contact/:contactId')
        .get(getContactWithID)

        .put((req, res) => {
                res.send('PUT request is successful')
        })

        .delete((req, res) => {
                res.send('DELETE request is successful')
        })
}

export default routes