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
exports.ClassController = void 0;
const typeorm_1 = require("typeorm");
const Classes_1 = require("../models/Classes");
const ClassesRepositories_1 = require("../repositories/ClassesRepositories");
class ClassController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = request.body;
            const classRepository = typeorm_1.getCustomRepository(ClassesRepositories_1.ClassesRepositories);
            const _class = new Classes_1.Class();
            _class.name = name;
            yield classRepository.save(_class);
            return response.status(201).json(_class);
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name } = request.body;
            const classRepository = typeorm_1.getCustomRepository(ClassesRepositories_1.ClassesRepositories);
            yield classRepository.update(id, { name: name });
            return response.json({
                message: "Modificado com sucesso!"
            });
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.query;
            const classRepository = typeorm_1.getCustomRepository(ClassesRepositories_1.ClassesRepositories);
            yield classRepository.delete(String(id));
            return response.json({
                message: "Removido com sucesso!"
            });
        });
    }
    list(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const classRepository = typeorm_1.getCustomRepository(ClassesRepositories_1.ClassesRepositories);
            const Classes = yield classRepository.find();
            return response.json(Classes);
        });
    }
}
exports.ClassController = ClassController;
//# sourceMappingURL=classController.js.map