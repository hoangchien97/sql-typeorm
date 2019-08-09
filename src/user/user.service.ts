import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IUserDTO } from './user.dto';

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

    async createUser(user: IUserDTO): Promise<User> {
        return await this.userRepository.save(user);
    }

    async updateUser(id: number, data: IUserDTO): Promise<User> { // Partial<IUserDTO>
        // let user = await this.userRepository.findOne({where: {id}});
        // if (!user) {
        //     throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        // }
        // return await this.userRepository.update({id}, data);
        
        let toUpdate = await this.userRepository.findOne(id);
        if (!toUpdate) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }
        let updated = Object.assign(toUpdate, data);
        return await this.userRepository.save(updated);
    }

    async deleteUser(id: number): Promise<DeleteResult> {
        return await this.userRepository.delete(id);
    }

}
