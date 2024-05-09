const express = require("express");
const router = express.Router();
const cryptoController = require("../controllers/cryptoController");


// Crypto Convertor Routes
/**
 * @swagger
 * /api/v1/getList:
 *  get:
 *      summary: This api is used to get list of crypto currencies
 *      description: This api is used to get list of crypto currencies
 *      responses: 
 *          200: 
 *              description: succesfull list is fetched
 *          500:
 *              description: Error in response 
 *  
 */
router.get("/getList", cryptoController.apiCryptoList);

/**
 * @swagger
 * /api/v1/getCurr:
 *  get:
 *      summary: This api is used to get list of currencies
 *      description: This api is used to get list of currencies
 *      responses: 
 *          200: 
 *              description: succesfull list is fetched
 *          500:
 *              description: Error in response 
 *  
 */
router.get("/getCurr", cryptoController.apiCurrencyList);

/**
 * @swagger
 * /api/v1/getExchangeRate:
 *  get:
 *     summary: Get exchange rate
 *     description: Retrieve the exchange rate for converting between two currencies.
 *     parameters:
 *       - in: query
 *         name: amount
 *         required: true
 *         description: The amount to convert.
 *         schema:
 *           type: number
 *       - in: query
 *         name: source
 *         required: true
 *         description: The source crypto-currency ID.
 *         schema:
 *           type: string
 *       - in: query
 *         name: target
 *         required: true
 *         description: The target currency symbol.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Exchange rate retrieved successfully.
 *       
 *       '500':
 *         description: Internal server error.
 */
router.get("/getExchangeRate", cryptoController.apiExchangeRate)


module.exports = router;