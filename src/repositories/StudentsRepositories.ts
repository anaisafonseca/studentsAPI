import { EntityRepository, Repository } from 'typeorm';
import { Student } from '../models/Students';

@EntityRepository(Student)
class StudentsRepositories extends Repository<Student>{

}

export { StudentsRepositories };