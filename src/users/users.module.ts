import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ItemsModule } from 'src/items/items.module';
import { ListsModule } from 'src/lists/lists.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ItemsModule, ListsModule],
  exports: [UsersService, TypeOrmModule],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
