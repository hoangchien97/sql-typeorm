import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')

export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    gender: string;

    @Column()
    isActive: boolean;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}
