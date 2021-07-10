import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
type Data = {
  title: string,
  email: string,
  message: string
}

dotenv.config();

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse<any>) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'ricardo.perez.9611@gmail.com',
      pass: process.env.password,
    },
    secure: true,
  })
  const mailData = {
    from: req.body.email,
    to: 'ricardompp11@gmail.com',
    subject: `${req.body.title}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      res.status(500).json(err);
      console.log(err)
    }
    else {
      console.log(info)
      res.status(200).json({message:'email sended'});
    }
  })
  res.end();
}
