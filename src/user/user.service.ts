import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }
    async getAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async getOne(id: number): Promise<User> {
        return await this.userRepository.findOne({where: {id}});
    }

    async createUser(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }
}
