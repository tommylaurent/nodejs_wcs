const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

/*****************************************************/
// ROUTING SUR EXPRESS
/*****************************************************/

/* Route Put */
//router.put("/:name(\\w+)", (req, res, next) => {
//  res.send(`Hey my name is ${req.params.name}`);
//});

/* Route Delete */
//router.delete("/:id(\\d+)", (req, res, next) => {
//  res.send(`Hey it's a DELETE ID ${req.params.id}`);
//});

/*****************************************************/
// CAN I PUT SOME DELETE
/*****************************************************/

/* Route GET Affiche le formulaire Update */
router.get("/:name(\\D+)", (req, res, next) => {
  //res.send(`Hey my name is ${req.params.name}`);
  res.render("update-user");
});

/* Prend dans l'URL une chaine de caracteres */
router.put("/:name(\\D+)", (req, res, next) => {
  res.send(`The new name is ${req.body.name}`);
});

// /* Route GET Affiche le formulaire Delete */
// router.get("/users/", function(req, res, next) {
//   res.send("respond with a resource");
// });

// /* Route DELETE Affiche le formulaire Delete */
// router.delete("/users/", function(req, res, next) {
//   res.send("respond with a resource");
// });

module.exports = router;
