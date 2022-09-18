import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoDefinition } from 'src/common/models/todo.model';

@Module({
  imports: [MongooseModule.forFeature([TodoDefinition])],
  providers: [TodoService],
  controllers: [TodoController]
})
export class TodoModule { }
