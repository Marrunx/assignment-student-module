import { Controller, Post, Body } from '@nestjs/common';
import { CreateStudentService } from './create-student.service';
import { CreateStudentDto } from './create-student.dto';

@Controller('students')
export class CreateStudentController {
  constructor(private readonly createStudentService: CreateStudentService) {}

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto) {
    return this.createStudentService.create(createStudentDto);
  }
}
