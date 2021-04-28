"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plant = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var Plant = /** @class */ (function () {
    function Plant() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Plant.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Plant.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Plant.prototype, "about", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Plant.prototype, "water_tips", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Plant.prototype, "photo", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Plant.prototype, "environment", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Plant.prototype, "frequency", void 0);
    Plant = __decorate([
        typeorm_1.Entity('plants'),
        __metadata("design:paramtypes", [])
    ], Plant);
    return Plant;
}());
exports.Plant = Plant;
