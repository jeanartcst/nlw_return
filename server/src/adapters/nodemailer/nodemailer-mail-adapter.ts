import { MailAdapter, SendMailData } from "./../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c0d9d3ec93fbcf",
    pass: "373f46cd293cb3",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Jean Castro <batata@batata.com>",
      subject,
      html: body,
    });
  }
}
