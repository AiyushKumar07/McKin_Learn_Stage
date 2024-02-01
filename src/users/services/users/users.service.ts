import { Injectable } from '@nestjs/common';
import { CreateuserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class UsersService {
    private fakeUsers = [
        { username: "Aiyush", email: "aiyush@gmail.com" },
        { username: "Sush", email: "sush@yahoo.com" },
        { username: "Bolk", email: "Bolk@yahoo.com" }
    ];
    fetchUsers() {
        return this.fakeUsers;
    }

    createUser(userDetails: CreateuserDto) {
        this.fakeUsers.push(userDetails)
    }

    fetchUserById(id: number) {
        return { id, username: "FakeUser", email: "FakeUser@gmail.com" }
    }


}
