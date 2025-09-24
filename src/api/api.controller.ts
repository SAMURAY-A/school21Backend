import { Controller, Get, Post, Body, Delete, Param, Query } from '@nestjs/common';
import { ApiService } from './api.service';
import { CreateApiDto } from './dto/create-api.dto';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get()
  getAll() {
    return this.apiService.getAll();
  }

  @Post()
  create(@Body() dto: CreateApiDto) {
    return this.apiService.create(dto);
  }
 
@Delete()
delete(@Body() body: { username: string; password: string }) {
  return this.apiService.deleteByUsername(body.username, body.password);
}

}
