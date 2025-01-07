import { Controller, Get, Param } from '@nestjs/common';
import { ReadStudentService } from './read-student.service';

@Controller('students')
export class ReadStudentController {
  constructor(private readonly readStudentService: ReadStudentService) {}

  @Get()
  async findAll() {
    return this.readStudentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.readStudentService.findOne(id);
  }
}
