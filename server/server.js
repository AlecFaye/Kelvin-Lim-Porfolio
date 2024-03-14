const path = require("path");
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 3001;
const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

console.log(EMAIL_ADDRESS);
console.log(EMAIL_PASSWORD);

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

app.get("/api", (req, res) => {
    res.json({ message: "Hello from the server!" });
});

app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "fayefoundations@gmail.com",
        pass: "ewkp ohfy zfcb yuly"
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: "fayefoundations@gmail.com",
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
