import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessageService } from './messages.service';
import { NotFoundException } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  //messageService: MessageService;

  constructor(public messageService: MessageService){
    //this.messageService= service;
  }

  @Get()
  listMessages() {
    return this.messageService.findAll();
  }

  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.content);
  }

  @Get('/:id')
  async getMessages(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);
    if(!message){
      throw new NotFoundException('message not found');
    }
    return message;
  }
}