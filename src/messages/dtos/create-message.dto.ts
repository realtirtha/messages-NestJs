import { IsInt, IsString } from "class-validator"

export class CreateMessageDto{
    @IsString() //validator
    content:string;

    
}