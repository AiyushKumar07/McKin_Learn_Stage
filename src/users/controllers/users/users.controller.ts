import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateuserDto } from 'src/users/dtos/CreateUser.dto';
import { ValidateCreateUsersPipe } from 'src/users/pipes/validate-create-users/validate-create-users.pipe';
import { UsersService } from 'src/users/services/users/users.service';
@Controller('users')
export class UsersController {


    constructor(private userService: UsersService) { }


    // Get using Service Layer 
    @Get()
    getUsers() {
        return this.userService.fetchUsers();
    }

    //Normal Get  
    // @Get()
    // getUsers() {
    //     return [{ username: "Aiyush", email: "aiyush@gmail.com" }]
    // }

    //Get User Using Queries {Filters}
    // @Get()
    // getUsers(@Query("sortBy") sortBy: string) {
    //     console.log(sortBy);
    //     return [{ username: "Aiyush", email: "aiyush@gmail.com" }]
    // }

    //Post 
    // @Post("create")
    // @UsePipes(new ValidationPipe) //Validating the Dto Using Pipes
    // createUser(@Body() userData: CreateuserDto) {
    //     console.log(userData);
    //     return {}
    // }

    //Post Using Service Layer
    @Post("create")
    @UsePipes(new ValidationPipe) //Validating the Dto Using Pipes
    createUser(@Body(ValidateCreateUsersPipe) userData: CreateuserDto) {
        // console.log(userData.age);
        this.userService.createUser(userData)
        return "Created User"
    }

    //Route Params
    // @Get(':id')
    // getUserById(@Param('id', ParseIntPipe) id: number) {  // ParseIntPipe Validate that the Param is Integer Only
    //     console.log(id);
    //     return { id };
    // }

    // Route Param With Service layer
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {  // ParseIntPipe Validate that the Param is Integer Only
        console.log(id);
        return this.userService.fetchUserById(id)
    }


    //Query Validator such as  Boolean Checker
    // @Get()
    // getUsers(@Query("isActive", ParseBoolPipe) isActive: boolean) {
    //     console.log(isActive);
    //     return [{}]
    // }


}
