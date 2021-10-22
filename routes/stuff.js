const express = require("express");

const stuffCtrl = require("../controllers/stuff");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", auth, stuffCtrl.createThing);
router.get("/:id", auth, stuffCtrl.getOneThing);
router.put("/:id", auth, stuffCtrl.modifyThing);
router.delete("/:id", auth, stuffCtrl.deleteThing);
router.get("/", auth, stuffCtrl.getAllStuff);

module.exports = router;