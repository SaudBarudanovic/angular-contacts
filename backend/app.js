const express = require('express');
const cors = require('cors')
const app = express();
const pool = require('./database/postgres');

// MIDDLEWARE
app.use(cors());
app.use(express.json())

// ROUTES
// CREATE A CONTACT
app.post('/contacts', async(req, res) => {
    try {
        const contactBody = req.body;
        const newContact = await pool.query(
            "INSERT INTO contacts (first_name, last_name, email, phone) VALUES('" + contactBody.first_name + "', '" + contactBody.last_name + "', '" + contactBody.email + "', '" + contactBody.phone + "') RETURNING *",
        );
        res.json(newContact.rows[0])
    } catch (error) {
        console.log(error.message);
    }
})

// GET ALL CONTACTS
app.get('', async(req, res) => {
    try {
        const allContacts = await pool.query(
            "SELECT * FROM contacts"
        );
        res.json(allContacts.rows);
    } catch (error) {
        console.log(error.message);
    }
})

// GET A CONTACT
app.get('/contacts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const contact = await pool.query(
            "SELECT * FROM contacts WHERE id = $1", [id]
        );
        res.json(contact.rows);
    } catch (error) {
        console.log(error.message);
    }
})


// UPDATE A CONTACT
app.put('/contacts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const providedParams = Object.keys(req.body);
        const providedValues = Object.values(req.body);
        let queryString = "";
        for (let i = 0; i < providedParams.length; i++) {
            queryString += (i < providedParams.length - 1) ? providedParams[i] + " = $" + (i + 1) + ", " : providedParams[i] + " = $" + (i + 1);
        }
        const updateContact = await pool.query(
            "UPDATE contacts SET " + queryString + " WHERE id = " + id, providedValues
        );
    } catch (error) {
        console.log(error.message);
    }
})


// DELETE A CONTACT
app.delete('/contacts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const deleteContact = await pool.query("DELETE FROM contacts WHERE id = " + id);
        res.json("Contact deleted");
    } catch (error) {
        console.log(error.message);
    }
})


app.listen(3000, () => console.log('Server Connected on port 3000'));