import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { ApiComment } from './api.model';

@Module({
  imports: [SequelizeModule.forFeature([ApiComment])],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
