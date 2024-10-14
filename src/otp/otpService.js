// otpService.js
const nodemailer = require('nodemailer');
const crypto = require('crypto');

let otpStorage = {}; // In-memory storage for demo purposes

const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
};

const sendOTP = async (email) => {
    const otp = generateOTP();
    otpStorage[email] = otp;

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);
    return otp;
};

const verifyOTP = (email, otp) => {
    return otpStorage[email] === otp;
};

module.exports = { sendOTP, verifyOTP };
