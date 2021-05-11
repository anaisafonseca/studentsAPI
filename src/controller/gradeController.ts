import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { Grade } from '../models/Grades';
import { ClassesRepositories } from '../repositories/ClassesRepositories';
import { GradesRepositories } from '../repositories/GradesRepositories';
import { StudentsRepositories } from '../repositories/StudentsRepositories';

class GradeController {
    async create(request:Request, response:Response){
        const { id_student, id_class, t1, t2, t3, t4 } = request.body;
        const gradeRepository = getCustomRepository(GradesRepositories);
        const studentRepository = getCustomRepository(StudentsRepositories);
        const classRepository = getCustomRepository(ClassesRepositories);
        const grade = new Grade();
        const student = await studentRepository.findOne({id:id_student});
        const _class = await classRepository.findOne({id:id_class});

        grade.class = _class;
        grade.student = student;
        grade.t1 = t1;
        grade.t2 = t2;
        grade.t3 = t3;
        grade.t4 = t4;

        await gradeRepository.save(grade);
        return response.status(201).json(grade);
    }

    async list(request:Request, response:Response){
        const { student } = request.body;
        const gradeRepository = getCustomRepository(GradesRepositories);
        const studentRepository = getCustomRepository(StudentsRepositories);
        const studentData = await studentRepository.findOne(
            {id:student},
            {relations:["grade","class"]}
        );
        const allGrades = await gradeRepository.find({relations:["class"]});
        const idGrades = studentData.grade.map((grade)=>grade.id);
        let report = allGrades.filter((grade)=>idGrades.includes(grade.id));

        report = report.map((grades)=>{
            const finalGrade = (grades.t1 + grades.t2 + grades.t3 + grades.t4)/4;
            if(finalGrade>=60){
                grades["final grade"] = finalGrade;
                grades["status"] = "aprovado";
            } else {
                grades["final grade"] = finalGrade;
                grades["status"] = "reprovado"
            }
            return grades;
        })

        return response.json(report);
    }
}

export { GradeController };

