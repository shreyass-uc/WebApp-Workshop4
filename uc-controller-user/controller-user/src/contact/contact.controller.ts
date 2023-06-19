import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ContactService } from './contact.service';
import { createContactDto } from 'src/dto/contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}
  @Get('/getUser')
  getUser(userData:any) {
    return this.contactService.getUser(userData);
  }

  @Put('/createUser')
  async createUser(@Body() userData: createContactDto) {
    return await this.contactService.createUser(userData);
  }


  @Delete('/deleteUser')
  async deleteUser(@Body() userData:any){
    return await this.contactService.deleteUser(userData);
  }

  @Get('/getUserById/:id')
  getUserById(@Param('id') id) {
    return this.contactService.getUserById(id);
  }
  
}
