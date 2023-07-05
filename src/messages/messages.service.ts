import { MessageRepository } from "./messages.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessageService{
  //messageRepo: MessageRepository;

  constructor(public messageRepo: MessageRepository)
  {
    //service is creating a depedency
    //this.messageRepo =repo;
    
  }

  findOne(id:string){
    return this.messageRepo.findOne(id);
  }

  findAll(){
    return this.messageRepo.findAll();
  }

  create(content:string){
    return this.messageRepo.create(content);
  }
}