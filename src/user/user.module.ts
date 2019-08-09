import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])], // imports Entity(Model)
    providers: [UserService], // providers: [ arr Services using ]
    controllers: [UserController], // controllers : [array Controller using]
})
export class UserModule {}
