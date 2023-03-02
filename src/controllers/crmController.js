import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model('Contact', ContactSchema)

export const addNewContact = (req, res) => {
        let newContact = new Contact(req.body)
        
        newContact.save()
        .then(contact => {
                res.json(contact)
        })
        .catch(err => {
                res.send(err)
        })
}

export const getContacts = (req, res) => {
        Contact.find()
        .then(contacts => {
                res.json(contacts)
        })
        .catch(err => {
                res.send(err)
        })
}

export const getContactWithID = (req, res) => {
        Contact.findById(req.params.contactId)
        .then(contact => {
                res.json(contact)
        })
        .catch(err => {
                res.send(err)
        })
}