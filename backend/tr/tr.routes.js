const Controller = require("./controller/tr.controller");
module.exports = (router) => {
  router.get("/getCards", Controller.getCard);
  router.post("/createCards", Controller.createCard);
  router.post("/createTrans", Controller.createTrans);
  router.get("/getTrans", Controller.getTrans);


};