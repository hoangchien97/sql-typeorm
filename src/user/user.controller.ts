import { Controller, Get, Param, Post, Body, Put, Delete, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { IUserDTO } from './user.dto';
import { ValidationPipe } from './../shared/validation.pipe';

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
    @UsePipes(new ValidationPipe())
    createUser(@Body() user: IUserDTO) {
        return this.userService.createUser(user);
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    updateUser(@Param('id') id, @Body() data: Partial<IUserDTO>) {
        return this.userService.updateUser(id, data);
    }

    @Delete(':id')
    deleteUser(@Param('id') id) {
        return this.userService.deleteUser(id);
    }
}
