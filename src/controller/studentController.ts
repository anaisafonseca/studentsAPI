import { Request, Response } from 'express';
import { getCustomRepository, In } from 'typeorm';
import { Student } from '../models/Students';
import { ClassesRepositories } from '../repositories/ClassesRepositories';
import { StudentsRepositories } from '../repositories/StudentsRepositories';

class StudentController {
    async create(request:Request, response:Response){
        const { name, classes } = request.body;
        const studentRepository = getCustomRepository(StudentsRepositories);
        const classRepository = getCustomRepository(ClassesRepositories);
        const student = new Student();
        student.name = name;

        if(classes){
            const allClasses:string[] = classes;
            const _class = await classRepository.find({
                id:In(allClasses)
            })
            if(classes && _class){
                student.class = _class;
            }
        }
        await studentRepository.save(student);
        return response.status(201).json(student);
    }

    async update(request:Request, response:Response){
        const { id, name, classes } = request.body;
        const studentRepository = getCustomRepository(StudentsRepositories);
        const classRepository = getCustomRepository(ClassesRepositories);

        let student = new Student();
        student = await studentRepository.findOne(id)
        const allClasses:string[] = classes;
        const _class = await classRepository.find({
            id:In(allClasses)
        });

        if(name){
            await studentRepository.update(id,{name:name});
        }
        if(classes){
            student.class = _class;
            await studentRepository.save(student);
        }
        return response.json({
            message:"Modificado com sucesso!"
        });
    }

    async delete(request:Request, response:Response){
        const { id } = request.query;
        const studentRepository = getCustomRepository(StudentsRepositories);
        await studentRepository.delete(String(id));
        return response.json({
            message:"Removido com sucesso!"
        });
    }

    async list(request:Request, response:Response){
        const studentRepository = getCustomRepository(StudentsRepositories);
        const Students = await studentRepository.find({relations:["class","grade"]});
        return response.json(Students);
    }
}

export { StudentController };
