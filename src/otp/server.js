// server.js
const express = require('express');
const { sendOTP, verifyOTP } = require('./otpService');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post('/api/send-otp', async (req, res) => {
    const { email } = req.body;
    try {
        await sendOTP(email);
        res.status(200).send({ message: 'OTP sent successfully.' });
    } catch (error) {
        res.status(500).send({ message: 'Error sending OTP.' });
    }
});

app.post('/api/verify-otp', (req, res) => {
    const { email, otp } = req.body;
    const isVerified = verifyOTP(email, otp);
    if (isVerified) {
        res.status(200).send({ message: 'OTP verified successfully.' });
    } else {
        res.status(400).send({ message: 'Invalid OTP.' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
