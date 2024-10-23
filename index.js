const nodeMailer =require('nodemailer')

const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user:"leonardoespinozarey@gmail.com",
        pass: "gszehiiegvahmtrr"
    }
})

let mail = {
    from: "leonardoespinozarey@gmail.com",
    to: "leonardoespinozarey@gmail.com",
    subject: "Prueba de correo electronico",
    text: "Hola, esto es una prueba de correo electronico",
    html: "<b>Hola, esto es una prueba de correo electronico</b>"
}
transporter.sendMail(mail, (error, info) => {
    if (error) {
        console.error("error al enviar email", error);
        } else {
            console.log("email enviado con exito");
        }
            });

