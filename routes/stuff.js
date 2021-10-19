const express = require("express");

const stuffCtrl = require("../controllers/stuff");

const router = express.Router();

router.post("/", stuffCtrl.createThing);
router.get("/:id", stuffCtrl.getOneThing);
router.put("/:id", stuffCtrl.modifyThing);
router.delete("/:id", stuffCtrl.deleteThing);
router.get("/", stuffCtrl.getAllStuff);

module.exports = router;