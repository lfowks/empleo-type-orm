/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { Candidate } from 'src/entities/candidate';


@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidateService: CandidateService) {}

  @Get()
  getAll(): Promise<Candidate[]> {
    return this.candidateService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id): Promise<Candidate> {
    return this.candidateService.getById(id);
  }

  @Post()
  create(@Body() candidateRequest:Candidate):Promise<Candidate>{
    console.log(candidateRequest);
    return this.candidateService.create(candidateRequest);
  }

  @Put(':id')
  update(@Param('id') id, @Body() candidateUpdate:Candidate):Promise<Candidate>{  
    return this.candidateService.update(id,candidateUpdate);
  }

  @Delete(':id')
  delete(@Param('id') id){
    this.candidateService.delete(id);
  }
}
