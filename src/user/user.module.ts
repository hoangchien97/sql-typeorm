import { APP_FILTER } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';

import { HttpExceptionFilter } from './../shared/http-error.filter';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [
        UserService,
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter,
        }
    ],
    controllers: [UserController],
})
export class UserModule {}
