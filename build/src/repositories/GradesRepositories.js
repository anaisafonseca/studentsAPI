"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradesRepositories = void 0;
const typeorm_1 = require("typeorm");
const Grades_1 = require("../models/Grades");
let GradesRepositories = class GradesRepositories extends typeorm_1.Repository {
};
GradesRepositories = __decorate([
    typeorm_1.EntityRepository(Grades_1.Grade)
], GradesRepositories);
exports.GradesRepositories = GradesRepositories;
//# sourceMappingURL=GradesRepositories.js.map