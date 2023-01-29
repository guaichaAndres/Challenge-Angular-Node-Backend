const Cards = require("./tr.controller");

module.exports = (router) => {
  router.get("/cards", Cards.getCard);
  router.post("/createCards", Cards.createCard);

};