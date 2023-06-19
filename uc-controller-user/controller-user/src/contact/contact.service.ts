import { HttpException, Injectable } from '@nestjs/common';
import { createContactDto } from 'src/dto/contact.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  async getUser(userData: any) {
    const data = await this.prisma.contact.findMany().catch((err) => {
      console.log(err);
      throw new HttpException(err, 400);
    });
    return data;
  }

  getUserById(id: any) {
    id = +id;
    return this.prisma.contact.findFirst({ where: { id } });
  }

  async createUser(userData: createContactDto) {
    userData.zipcode = Number(userData.zipcode);
    const data = await this.prisma.contact
      .create({ data: userData })
      .catch((err) => {
        throw new HttpException(err, 400);
      });
    return data;
  }

  async deleteUser(userData: any) {
    console.log(userData);
    const data = await this.prisma.contact
      .delete({
        where: { id: userData.id },
      })
      .catch((err) => {
        console.log(err);
        throw new HttpException(err, 400);
      });
    return data;
  }
}
