const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const https = require("https");
const path = require("path");
require("dotenv").config();
let port = process.env.PORT || 3000;


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: true}));

if(app.get("env")==="production"){
    const enforce = require("express-sslify");
    app.use(enforce.HTTPS({trustProtoHeader: true}));
}



app.get("/", (req, res)=>{
    res.render("home");
});

app.get("/about", (req, res)=>{
    res.render("about");
});

app.get('/cateringServices', (req, res)=>{
    res.render("cateringServices");
});

app.get('/catFish', (req, res)=>{
    res.render("catFish");
});

app.get('/avocadoSalad', (req, res)=>{
    res.render("avocadoSalad");
});

app.get("/contact", (req, res)=>{
    res.render("contact");
});

app.post("/contact", (req, res)=>{
    async function main() {
        // create reusable transporter object using the default SMTP transport
        const smtpHost = process.env.SMTP_HOST;
        const smtpPort = process.env.SMTP_PORT;
        let transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: false, // true for 465, false for other ports
          auth: {
            user: process.env.USER_NAME, // SMTP user Name
            pass:process.env.USER_PWD // SMTP password
          },
        });
      
        const emailReceivers = process.env.EMAIL_RECEIVERS;

        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: req.body.email, // sender address
          to: emailReceivers, // list of receivers
          subject: req.body.subject, // Subject line
          text: req.body.message, // plain text body
        //   html: "<b>Hello world?</b>", // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      
        // Preview only available when sending through an Ethereal account
        // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      }
      
    main().catch(console.error);
    res.redirect("/contactsuccess");
});

app.get("/contactsuccess", (req, res)=>{
    res.render("contactsuccess");
});


app.post("/signup", (req, res)=>{
    const email = req.body.email;

    

    const data = {
        members: [
            {
                "email_address": email,
                "status": "subscribed",
            }
    ]
     };

    const jsonData = JSON.stringify(data);
    const dc = us10;
    const listId = process.env.LIST_ID;
    const userAuth=process.env.USERAUTH;
    const apiKey = process.env.MAILCHIMP_API_KEY;

    const url = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}`;

    const options = {
        method: "POST",
        auth: `${userAuth}:${apiKey}`
    };

    const request = https.request(url, options, (response)=>{
        response.on("data", (data)=>{
           const statusCode = response.statusCode;

           if(!statusCode === 200){
            res.redirect("/signupfailed");
           }else{
            res.redirect("/signupsuccess");
           }
        });
    });

    request.write(jsonData);
    request.end();
});


app.get("/signupsuccess", (req, res)=>{
    res.render("signupsuccess");
});

app.get("/signupfailed", (req, res)=>{
    res.render("signupfailed");
});


app.listen(port, ()=>{
    console.log(`This is application is lilstening on port ${port}`);
});