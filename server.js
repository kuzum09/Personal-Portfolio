const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Email sending route
app.post("/send-email", (req, res) => {
	const { name, email, message } = req.body;

	// Create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		service: "Gmail",
		auth: {
			user: "your-gmail@gmail.com", // your Gmail account
			pass: "your-gmail-password", // your Gmail password
		},
	});

	// Email message options
	let mailOptions = {
		from: email,
		to: "recipient-email@example.com", // recipient email address
		subject: `Message from ${name}`,
		text: message,
	};

	// Send email
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
			res.status(500).send("Error sending email");
		} else {
			console.log("Email sent: " + info.response);
			res.status(200).send("Email sent successfully");
		}
	});
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
