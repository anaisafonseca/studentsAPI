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
exports.StudentController = void 0;
const typeorm_1 = require("typeorm");
const Students_1 = require("../models/Students");
const ClassesRepositories_1 = require("../repositories/ClassesRepositories");
const StudentsRepositories_1 = require("../repositories/StudentsRepositories");
class StudentController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, classes } = request.body;
            const studentRepository = typeorm_1.getCustomRepository(StudentsRepositories_1.StudentsRepositories);
            const classRepository = typeorm_1.getCustomRepository(ClassesRepositories_1.ClassesRepositories);
            const student = new Students_1.Student();
            student.name = name;
            if (classes) {
                const allClasses = classes;
                const _class = yield classRepository.find({
                    id: typeorm_1.In(allClasses)
                });
                if (classes && _class) {
                    student.class = _class;
                }
            }
            yield studentRepository.save(student);
            return response.status(201).json(student);
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, classes } = request.body;
            const studentRepository = typeorm_1.getCustomRepository(StudentsRepositories_1.StudentsRepositories);
            const classRepository = typeorm_1.getCustomRepository(ClassesRepositories_1.ClassesRepositories);
            let student = new Students_1.Student();
            student = yield studentRepository.findOne(id);
            const allClasses = classes;
            const _class = yield classRepository.find({
                id: typeorm_1.In(allClasses)
            });
            if (name) {
                yield studentRepository.update(id, { name: name });
            }
            if (classes) {
                student.class = _class;
                yield studentRepository.save(student);
            }
            return response.json({
                message: "Modificado com sucesso!"
            });
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.query;
            const studentRepository = typeorm_1.getCustomRepository(StudentsRepositories_1.StudentsRepositories);
            yield studentRepository.delete(String(id));
            return response.json({
                message: "Removido com sucesso!"
            });
        });
    }
    list(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const studentRepository = typeorm_1.getCustomRepository(StudentsRepositories_1.StudentsRepositories);
            const Students = yield studentRepository.find({ relations: ["class", "grade"] });
            return response.json(Students);
        });
    }
}
exports.StudentController = StudentController;
//# sourceMappingURL=studentController.js.map