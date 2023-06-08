import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Content } from './entities/content.entity';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private readonly contentRepository: Repository<Content>,
  ) {}

  async addcontent(content: Content): Promise<Content> {
    const insertedContent = await this.contentRepository.insert(content);
    return insertedContent.raw[0];
  }

  getUsers(): Promise<Content[]> {
    return this.contentRepository.find();
  }

  // Rest of the service methods...

}
