import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserDefinition } from 'src/common/models/user.schema';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthorizationService } from 'src/core/modules/authorization';

@Module({
  imports: [
    MongooseModule.forFeature([UserDefinition]),
  ],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule { }
