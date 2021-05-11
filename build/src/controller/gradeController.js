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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeController = void 0;
const typeorm_1 = require("typeorm");
const Grades_1 = require("../models/Grades");
const ClassesRepositories_1 = require("../repositories/ClassesRepositories");
const GradesRepositories_1 = require("../repositories/GradesRepositories");
const StudentsRepositories_1 = require("../repositories/StudentsRepositories");
class GradeController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_student, id_class, t1, t2, t3, t4 } = request.body;
            const gradeRepository = typeorm_1.getCustomRepository(GradesRepositories_1.GradesRepositories);
            const studentRepository = typeorm_1.getCustomRepository(StudentsRepositories_1.StudentsRepositories);
            const classRepository = typeorm_1.getCustomRepository(ClassesRepositories_1.ClassesRepositories);
            const grade = new Grades_1.Grade();
            const student = yield studentRepository.findOne({ id: id_student });
            const _class = yield classRepository.findOne({ id: id_class });
            grade.class = _class;
            grade.student = student;
            grade.t1 = t1;
            grade.t2 = t2;
            grade.t3 = t3;
            grade.t4 = t4;
            yield gradeRepository.save(grade);
            return response.status(201).json(grade);
        });
    }
    list(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { student } = request.body;
            const gradeRepository = typeorm_1.getCustomRepository(GradesRepositories_1.GradesRepositories);
            const studentRepository = typeorm_1.getCustomRepository(StudentsRepositories_1.StudentsRepositories);
            const studentData = yield studentRepository.findOne({ id: student }, { relations: ["grade", "class"] });
            const allGrades = yield gradeRepository.find({ relations: ["class"] });
            const idGrades = studentData.grade.map((grade) => grade.id);
            let report = allGrades.filter((grade) => idGrades.includes(grade.id));
            report = report.map((grades) => {
                const finalGrade = (grades.t1 + grades.t2 + grades.t3 + grades.t4) / 4;
                if (finalGrade >= 60) {
                    grades["final grade"] = finalGrade;
                    grades["status"] = "aprovado";
                }
                else {
                    grades["final grade"] = finalGrade;
                    grades["status"] = "reprovado";
                }
                return grades;
            });
            return response.json(report);
        });
    }
}
exports.GradeController = GradeController;
//# sourceMappingURL=gradeController.js.map