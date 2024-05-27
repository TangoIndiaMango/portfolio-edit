import nodemailer from 'nodemailer';

export const sendMail = async (email: string, subject: string, message: string) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        host: 'smtp.gmail.com',
        auth: {
            user: import.meta.env.EMAIL!,
            pass: import.meta.env.PASSWORD!
        }
    });

    const mailOptions = {
        from: email,
        to: import.meta.env.EMAIL!,
        subject: subject,
        text: message
    };

    await transporter.sendMail(mailOptions);
}