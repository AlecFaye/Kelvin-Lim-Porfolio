const path = require("path");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

require('dotenv').config({ path: "../.env" });

const PORT = process.env.PORT || 3001;
const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

const app = express();
app.use(express.static(path.resolve(__dirname, "../build")));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_ADDRESS,
        pass: EMAIL_PASSWORD
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

app.post("/contact", bodyParser.urlencoded({ extended: false }), (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: EMAIL_ADDRESS,
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message Sent" });
        }
    });
});

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../build", "index.html"));
});
