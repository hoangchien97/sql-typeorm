import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get()
    getAll() {
        return this.userService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id) {
        return this.userService.getOne(id);
    }

    @Post()
    createUser(@Body() user: User) {
        return this.userService.createUser(user);
    }

    @Put(':id')
    updateUser(@Param('id') id, @Body() data: User) {
        return this.userService.updateUser(id, data);
    }

    @Delete(':id')
    deleteUser(@Param('id') id) {
        return this.userService.deleteUser(id);
    }
}
