/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidateModule } from './modules/candidate.module';
import { Candidate } from './entities/candidate';
import { SkillsModule } from './skills/skills.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'typeorm',
      entities:[Candidate],
      synchronize: true,
    }), 
    CandidateModule, SkillsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
