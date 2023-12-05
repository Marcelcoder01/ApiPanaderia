const {Router} = require ("express")
const router = Router();
const prodController = require("../controllers/prod.controller")

router.get("/produccion", prodController.getProduction);
router.get("/all", prodController.getAllProduction);
router.post("/produccion", prodController.addProduction);

module.exports = router