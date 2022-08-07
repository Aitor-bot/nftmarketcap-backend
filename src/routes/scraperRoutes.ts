const express = require ('express')
const router = express.Router();
const userController = require('../controllers/scraperController');

//Routes
router.get('/', userController.getAllScrapers);
router.get('/:id', userController.getScraperByName);
router.get('/getData/:nftSymbol', userController.scrapNftAndSaveData);

module.exports = router;