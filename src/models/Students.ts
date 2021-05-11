import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Class } from './Classes';
import { Grade } from './Grades';

@Entity("students")
class Student{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @ManyToMany(()=>Class, _class=>_class.student,{onUpdate:'CASCADE', onDelete:'CASCADE'})
    @JoinTable()
    class: Class[];

    @OneToMany(()=>Grade, grade=>grade.student,{onUpdate:'CASCADE', onDelete:'CASCADE'})
    grade: Grade[];
}

export { Student };