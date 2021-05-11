"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const database_1 = __importDefault(require("./database"));
database_1.default();
const app = express_1.default();
exports.app = app;
app.use(express_1.default.json());
app.use(routes_1.router);
// rodando um container no docker:
// docker run --name asa-tarefa1 -e POSTGRES_PASSWORD=****** -e POSTGRES_USER=postgres -e POSTGRES_DB=asa-tarefa1 -p 5432:5432 -d postgres
//# sourceMappingURL=app.js.map