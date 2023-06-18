/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidateService } from 'src/candidates/candidate.service';
import { CandidatesController } from 'src/candidates/candidates.controller';
import { Candidate } from 'src/entities/candidate';

@Module({
  imports: [TypeOrmModule.forFeature([Candidate])],
  controllers: [CandidatesController],
  providers: [CandidateService],
})
export class CandidateModule {}
