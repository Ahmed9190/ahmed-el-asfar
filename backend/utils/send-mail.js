import nodemailer from "nodemailer";

export default async function sendMail(receiverEmail, code, id, text, subject) {
  try {
    const acc = {
      e: "info@ahmedalasfar.com",
      p: "ahmed55523511",
      // e: "Ahmed.waleed919@h-eng.helwan.edu.eg",
      // p: "Bur87701 #",
    };
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing

    // let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      secure: true,
      secureConnection: false, // TLS requires secureConnection to be false
      tls: {
        ciphers: "SSLv3",
      },
      requireTLS: true,
      port: 465,
      debug: true,
      auth: {
        user: acc.e,
        pass: acc.p,
      },
    });
    // let transporter = nodemailer.createTransport({
    //   service: "hotmail",
    //   port: 587,
    //   secure: false, // true for 465, false for other ports
    //   auth: {
    //     user: acc.e, // generated ethereal user
    //     pass: acc.p, // generated ethereal password
    //   },
    // });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: acc.e, // sender address
      to: receiverEmail, // list of receivers
      subject: subject || "تأكيد الحساب على موقع أحمد الأصفر", // Subject line
      text:
        text ??
        `مرحبا بك كعضو جديد في موقع أحمد الأصفر\nلتأكيد حسابك الرجاء الدخول على الرابط التالي\nhttp://ahmedalasfar.com/account/confirm/user/${id}/${code}`, // plain text body
      // html: "<b>Hello world?</b>", // html body
    });

    // console.log("Message sent: %s", info.messageId);
    // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    return true;
  } catch (err) {
    console.log("err ", err);
    return false;
  }
}
