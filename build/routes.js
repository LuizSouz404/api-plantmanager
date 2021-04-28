"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var PlantController_1 = require("./controller/PlantController");
var router = express_1.Router();
exports.router = router;
var plantController = new PlantController_1.PlantController();
router.get('/', function (request, response) {
    return response.send('OK true');
});
router.post('/plant', plantController.create);
router.get('/plants', plantController.show);
