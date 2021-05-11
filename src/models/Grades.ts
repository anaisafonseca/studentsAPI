import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Class } from './Classes';
import { Student } from './Students';

@Entity("grades")
class Grade {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({default:null, nullable:true})
    t1: number;

    @Column({default:null, nullable:true})
    t2: number;
    
    @Column({default:null, nullable:true})
    t3: number;
    
    @Column({default:null, nullable:true})
    t4: number;

    @ManyToOne(()=>Class, {onUpdate:'CASCADE', onDelete:'CASCADE'})
    @JoinColumn()
    class: Class;

    @ManyToOne(()=>Student, student=>student.grade, {onUpdate:'CASCADE', onDelete:'CASCADE'})
    student: Student;
}

export { Grade };