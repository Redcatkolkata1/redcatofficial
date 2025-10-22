const express = require("express");
const router = new express.Router();
const users = require("../models/userSchema");
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// ================== MULTER CONFIG ==================
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname.replace(/\s+/g, "_"));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "video/mp4",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only images, videos, PDFs, and office docs allowed!"), false);
  }
};

const upload = multer({ storage, fileFilter });

// ================== EMAIL CONFIG ==================
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

// ================== REGISTER ROUTE ==================
router.post("/register", upload.array("files", 20), async (req, res) => {
  try {
    const { fname, lname, email, phone, message } = req.body;

    if (!fname || !lname || !email || !phone || !message) {
      return res.status(401).json({ status: 401, error: "All Input required" });
    }

    const uploadedFiles = req.files.map((file) => ({
      filename: file.filename,
      path: file.path,
      mimetype: file.mimetype,
    }));

    let user = await users.findOne({ email });

    if (user) {
      user.messages.push({ message, attachments: uploadedFiles });
      await user.save();
    } else {
      user = new users({
        fname,
        lname,
        email,
        phone,
        messages: [{ message, attachments: uploadedFiles }],
      });
      await user.save();
    }

    // ========== 1️⃣ Send Confirmation Email to User ==========
    const userMail = {
      from: process.env.EMAIL,
      to: email,
      subject: "Thank You for Contacting Redcat Hospitality Pvt. Ltd.",
      text: `
Hello ${fname} ${lname},

Thank you for reaching out to Redcat Hospitality Pvt. Ltd.

We’ve received your message and our team will get back to you shortly.

Best regards,
Redcat Hospitality Pvt. Ltd.
care.redcathospitality@gmail.com
      `,
    };

    // ========== 2️⃣ Send Form Data to Company Email ==========
    const adminMail = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `New Contact Form Submission from ${fname} ${lname}`,
      text: `
A new message has been submitted from the contact form:

--------------------------------------------
🧾 Name: ${fname} ${lname}
📧 Email: ${email}
📱 Phone: ${phone}
💬 Message: ${message}
--------------------------------------------

Submitted on: ${new Date().toLocaleString()}
      `,
      attachments: uploadedFiles.map((file) => ({
        filename: file.filename,
        path: file.path,
      })),
    };

    // Send both emails
    await transporter.sendMail(userMail);
    await transporter.sendMail(adminMail);

    console.log("✅ Confirmation mail sent to user and admin.");

    return res.status(201).json({
      status: 201,
      message: "Form submitted successfully and emails sent.",
      files: uploadedFiles,
    });

  } catch (error) {
    console.log("catch error", error);
    return res.status(500).json({ status: 500, error: "Server Error" });
  }
});

module.exports = router;
