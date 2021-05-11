import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from './Students';

@Entity("classes")
class Class {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @ManyToMany(()=>Student, student=>student.class, {onUpdate:'CASCADE', onDelete:'CASCADE'})
    student: Student[];
}

export { Class };