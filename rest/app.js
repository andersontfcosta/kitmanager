const express = require('express');
const app = express();


app.use((req, res, next) => {
   res.status(200).send({
      mensagem: 'Ok, works good'
   });
});


module.exports = app; 