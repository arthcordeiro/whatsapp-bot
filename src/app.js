// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
  .create({
    session: 'session-name' //name of session
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    console.log("MSG", message);
    if (message.isGroupMsg === true &&
      message.groupInfo.name === 'Marista do AMOR' &&
      (message.body.toUpperCase().includes("CÊ TA BÃO") || message.body.toUpperCase().includes("CE TA BAO".toUpperCase()) )) {
        client
        .sendText(message.from, '[AUTOMATIC MESSAGE] vou ver seu to bão mais tarde!')
        .then((result) => {
          console.log('Result: ', result);
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro);
        });
      }
    // else if (message.body === 'Hi' && message.isGroupMsg === false) {
    //   client
    //     .sendText(message.from, 'Welcome Venom 🕷')
    //     .then((result) => {
    //       console.log('Result: ', result);
    //     })
    //     .catch((erro) => {
    //       console.error('Error when sending: ', erro);
    //     });
    // }
  });
}