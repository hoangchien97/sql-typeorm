import { IsString, IsBoolean } from 'class-validator';

export class IUserDTO { // interface => class
    @IsString()
    username: string;

    @IsString()
    email: string;
}

// tslint:disable-next-line: max-classes-per-file
export class IUserRO {
    id: number;
    username: string;
    password: string;
    email: string;
    gender: string;
    isActive?: boolean;
}
