import { Controller, Put, Param, Body } from '@nestjs/common';
import { UpdateStudentService } from './update-student.service';
import { UpdateStudentDto } from './update-student.dto';

@Controller('students')
export class UpdateStudentController {
  constructor(private readonly updateStudentService: UpdateStudentService) {}

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateStudentDto: UpdateStudentDto) {
    return this.updateStudentService.update(id, updateStudentDto);
  }
}
