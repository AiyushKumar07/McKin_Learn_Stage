import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateuserDto {
    @IsNotEmpty()
    username: string;

    @IsEmail() // Validator for Email Check
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    age: number;
}