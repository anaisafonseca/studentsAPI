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
exports.Student = void 0;
const typeorm_1 = require("typeorm");
const Classes_1 = require("./Classes");
const Grades_1 = require("./Grades");
let Student = class Student {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Student.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Student.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToMany(() => Classes_1.Class, _class => _class.student, { onUpdate: 'CASCADE', onDelete: 'CASCADE' }),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Student.prototype, "class", void 0);
__decorate([
    typeorm_1.OneToMany(() => Grades_1.Grade, grade => grade.student, { onUpdate: 'CASCADE', onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Student.prototype, "grade", void 0);
Student = __decorate([
    typeorm_1.Entity("students")
], Student);
exports.Student = Student;
//# sourceMappingURL=Students.js.map