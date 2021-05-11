import { EntityRepository, Repository } from "typeorm";
import { Grade } from "../models/Grades";

@EntityRepository(Grade)
class GradesRepositories extends Repository<Grade>{

}

export { GradesRepositories };