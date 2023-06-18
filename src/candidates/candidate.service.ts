/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Candidate } from 'src/entities/candidate';
import { Repository } from 'typeorm';

@Injectable()
export class CandidateService {

constructor(
    @InjectRepository(Candidate)
    private candidateRepository: Repository<Candidate>,
  ) {}

  getAll(): Promise<Candidate[]> {
    return this.candidateRepository.find();
  }

  getById(id: number): Promise<Candidate> {
    return this.candidateRepository.findOne({ where: { id: id } });
  }

  async create(newCandidate: Candidate): Promise<Candidate>{
    const candidateAdded = this.candidateRepository.create(newCandidate);
    await this.candidateRepository.save(candidateAdded);
    return candidateAdded;
  }

  async update(id:number, updateCandidate: Candidate): Promise<Candidate>{    
    await this.candidateRepository.update(id, updateCandidate);
    return this.candidateRepository.findOne({ where: { id: id } });
  }

  async delete(id:number){
    this.candidateRepository.delete(id);
  }

  getTest(): string{
    return "Todos los candidatos";
  }
}
