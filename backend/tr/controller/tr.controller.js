const Card = require("../tr.daos/tr.dao");
const res = require("express/lib/response");
const User = require("../../auth/auth.model");
const Trans = require("../tr.daos/tr.trans.dao")

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


  exports.createTrans = (req, res) => {
    
    const newTrans = {
        //Aqui se recuperan los datos desde el front
        receptor: req.body.receptor,
        monto: req.body.monto,
        fecha: req.body.fecha,
        estado: req.body.estado,
        emisor: req.body.emisor
      };
      Trans.create(newTrans, (err, trans) => {
        if (err) return res.status(500).send("Server Error");
        const dataTrans = {
            receptor: trans.receptor,
            monto: trans.monto,
            fecha: trans.fecha,
            estado: trans.estado,
            emisor: trans.emisor
            
          }
          //El response hacia el frontend
          res.send({ dataTrans});
    })
};

exports.getTrans = (req, res) => {
  Trans.find({
  },(err,docs)=>{
   res.send({
       docs: docs
   })
  })
 };
