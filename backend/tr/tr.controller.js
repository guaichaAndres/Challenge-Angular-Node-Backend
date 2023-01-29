const Card = require("./tr.dao");
const res = require("express/lib/response");
const User = require("../auth/auth.model");

exports.createCard = (req, res) => {
    
    const newCard = {
        //Aqui se recuperan los datos desde el front
        saldo: req.body.saldo,
        vencimiento: req.body.vencimiento,
        numero: req.body.numero,
        codigoSeguridad: req.body.codigoSeguridad,
        titular: req.body.titular
      };
      Card.create(newCard, (err, card) => {
        if (err) return res.status(500).send("Server Error");
        const dataCard = {
            saldo: card.saldo,
            vencimiento: card.vencimiento,
            numero: card.numero,
            codigoSeguridad: card.codigoSeguridad,
            titular: card.titular
            
          }
          //El response hacia el frontend
          res.send({ dataCard });
    })
};
exports.getCard = (req, res) => {
   Card.find({
   },(err,docs)=>{
    res.send({
        docs: docs
    })
   })
  };

