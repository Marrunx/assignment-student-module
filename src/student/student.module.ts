import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { CreateStudentController } from './create-student/create-student.controller';
import { CreateStudentService } from './create-student/create-student.service';
import { ReadStudentController } from './read-student/read-student.controller';
import { ReadStudentService } from './read-student/read-student.service';
import { UpdateStudentController } from './update-student/update-student.controller';
import { UpdateStudentService } from './update-student/update-student.service';
import { DeleteStudentController } from './delete-student/delete-student.controller';  // Import the controller
import { DeleteStudentService } from './delete-student/delete-student.service';  // Import the service

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [
    CreateStudentController,
    ReadStudentController,
    UpdateStudentController,
    DeleteStudentController,  // Register the controller here
  ],
  providers: [
    CreateStudentService,
    ReadStudentService,
    UpdateStudentService,
    DeleteStudentService,  // Register the service here
  ],
})
export class StudentModule {}
