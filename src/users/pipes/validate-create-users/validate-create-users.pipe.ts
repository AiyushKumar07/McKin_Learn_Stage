import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CreateuserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUsersPipe implements PipeTransform {
  transform(value: CreateuserDto, metadata: ArgumentMetadata) {
    console.log("Inside ValidateCreateUsersPipe!! ")
    console.log(value);
    console.log(metadata);
    const parseAgeToInt = parseInt(value.age.toString());
    if (isNaN(parseAgeToInt)) {
      console.log(`${value.age} is not a Number`);
      throw new HttpException("Invalid Data Type for Property Age. Expected Number", HttpStatus.BAD_REQUEST);
    } else {
      console.log(`${value.age} is a Number... Returning.....`);
      return { ...value, age: parseAgeToInt };
    }
  }
}
