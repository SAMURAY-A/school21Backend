import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ApiComment } from './api.model';
import { CreateApiDto } from './dto/create-api.dto';
import allowedUsers from './username.json'; // tsconfig da resolveJsonModule bo'lsa ishlaydi

@Injectable()
export class ApiService {
  constructor(@InjectModel(ApiComment) private commentModel: typeof ApiComment) {}

  async getAll() {
    return this.commentModel.findAll();
  }

  async create(dto: CreateApiDto) {
    if (!allowedUsers[dto.username]) {
      throw new BadRequestException('Username ruxsat etilmagan');
    }

    const exists = await this.commentModel.findOne({ where: { username: dto.username } });
    if (exists) throw new BadRequestException('Bu user allaqachon comment qoldirgan');
return this.commentModel.create({
  username: dto.username,
  comment: dto.comment,
} as any);

  }

  async deleteByUsername(username: string, password: string) {
    const envPass = process.env.DELETE_PASSWORD;
    if (password !== envPass) throw new BadRequestException('Parol noto‘g‘ri');

    const comment = await this.commentModel.findOne({ where: { username } });
    if (!comment) throw new NotFoundException('Comment topilmadi');

    await comment.destroy();
    return { message: 'O‘chirildi' };
  }
}
