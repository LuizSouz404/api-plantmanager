"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantService = void 0;
var typeorm_1 = require("typeorm");
var PlantRepository_1 = require("../repositories/PlantRepository");
var PlantService = /** @class */ (function () {
    function PlantService() {
    }
    PlantService.prototype.create = function (_a) {
        var name = _a.name, about = _a.about, water_tips = _a.water_tips, photo = _a.photo, environments = _a.environments, frequency = _a.frequency;
        return __awaiter(this, void 0, void 0, function () {
            var plantRepository, frequencyConvert, plant;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        plantRepository = typeorm_1.getCustomRepository(PlantRepository_1.PlantRepository);
                        frequencyConvert = JSON.stringify(frequency);
                        plant = plantRepository.create({
                            about: about,
                            environment: environments,
                            frequency: frequencyConvert,
                            name: name,
                            photo: photo,
                            water_tips: water_tips,
                        });
                        return [4 /*yield*/, plantRepository.save(plant)];
                    case 1:
                        _b.sent();
                        plant.frequency = JSON.parse(plant.frequency);
                        return [2 /*return*/, plant];
                }
            });
        });
    };
    PlantService.prototype.show = function () {
        return __awaiter(this, void 0, void 0, function () {
            var plantRepository, plants;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        plantRepository = typeorm_1.getCustomRepository(PlantRepository_1.PlantRepository);
                        return [4 /*yield*/, plantRepository.find()];
                    case 1:
                        plants = _a.sent();
                        plants.forEach(function (plant) {
                            plant.frequency = JSON.parse(plant.frequency);
                            plant.environment = Object(plant.environment.split(','));
                        });
                        return [2 /*return*/, { plants: plants }];
                }
            });
        });
    };
    return PlantService;
}());
exports.PlantService = PlantService;
