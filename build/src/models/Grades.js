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
exports.Grade = void 0;
const typeorm_1 = require("typeorm");
const Classes_1 = require("./Classes");
const Students_1 = require("./Students");
let Grade = class Grade {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Grade.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ default: null, nullable: true }),
    __metadata("design:type", Number)
], Grade.prototype, "t1", void 0);
__decorate([
    typeorm_1.Column({ default: null, nullable: true }),
    __metadata("design:type", Number)
], Grade.prototype, "t2", void 0);
__decorate([
    typeorm_1.Column({ default: null, nullable: true }),
    __metadata("design:type", Number)
], Grade.prototype, "t3", void 0);
__decorate([
    typeorm_1.Column({ default: null, nullable: true }),
    __metadata("design:type", Number)
], Grade.prototype, "t4", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Classes_1.Class, { onUpdate: 'CASCADE', onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Classes_1.Class)
], Grade.prototype, "class", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Students_1.Student, student => student.grade, { onUpdate: 'CASCADE', onDelete: 'CASCADE' }),
    __metadata("design:type", Students_1.Student)
], Grade.prototype, "student", void 0);
Grade = __decorate([
    typeorm_1.Entity("grades")
], Grade);
exports.Grade = Grade;
//# sourceMappingURL=Grades.js.map