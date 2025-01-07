import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../student.entity';

@Injectable()
export class DeleteStudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async delete(id: number): Promise<boolean> {
    const student = await this.studentRepository.findOne({
      where: { id: id },
    });

    if (student) {
      await this.studentRepository.remove(student);
      return true;
    }
    return false;
  }
}
