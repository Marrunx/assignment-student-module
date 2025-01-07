import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteStudentService } from './delete-student.service';

@Controller('students')
export class DeleteStudentController {
  constructor(private readonly deleteStudentService: DeleteStudentService) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {
    // Convert the id to a number
    const studentId = parseInt(id, 10);

    // Call the delete service with the number id
    const result = await this.deleteStudentService.delete(studentId);

    if (result) {
      return { message: 'Student deleted successfully' };
    } else {
      return { message: 'Student not found' };
    }
  }
}
