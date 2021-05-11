import express from 'express';
import { router } from './routes';
import createConnection from './database';

createConnection();

const app = express();
app.use(express.json());
app.use(router);

export { app }

// rodando um container no docker:
// docker run --name asa-tarefa1 -e POSTGRES_PASSWORD=****** -e POSTGRES_USER=postgres -e POSTGRES_DB=asa-tarefa1 -p 5432:5432 -d postgres