// // import { MailtrapClient } from "mailtrap";
// // import dotenv from "dotenv";

// // dotenv.config();

// // export const mailtrapClient = new MailtrapClient({
// //   token: process.env.MAILTRAP_TOKEN,
// // });

// // export const sender = {
// //   email: "hello@demomailtrap.com",
// //   name: "Mailtrap ",
// // };

// import { MailtrapClient } from "mailtrap";

// const TOKEN = "739b9a76c112fed7276722272632d1af";

// export const client = new MailtrapClient({
//   token: TOKEN,
// });

// const sender = {
//   email: "hello@demomailtrap.com",
//   name: "Mailtrap Test",
// };
// const recipients = [
//   {
//     email: "se.aleemkhalid786@gmail.com",
//   },
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);
