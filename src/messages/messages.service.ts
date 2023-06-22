import { MessageRepository } from "./messages.repository";

export class MessageService{
  messageRepo: MessageRepository;

  constructor()
  {
    //service is creating a depedency
    this.messageRepo =new MessageRepository();
    
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