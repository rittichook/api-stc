import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Content } from './entities/content.entity';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private readonly contentRepository: Repository<Content>,
  ) {
    cloudinary.config({
      cloud_name: 'hozweaniz',
      api_key: '626587748265659',
      api_secret: 'UJqdoYNKdZKOXqJURkv2ElXJV3Y',
    });
  }

  async addContent(content: Content): Promise<Content> {
    const insertedContent = await this.contentRepository.insert(content);

    // Call the file upload function
    const uploadedFile = await this.uploadFile(content.thumbnail_image);
    console.log(uploadedFile.url);
    
    // Update the content object with the uploaded file URL
    content.thumbnail_image = uploadedFile.url;
    
    return insertedContent.raw[0];
  }

  async uploadFile(filePath: string): Promise<any> {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(filePath, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  getUsers(): Promise<Content[]> {
    return this.contentRepository.find();
  }

  // Rest of the service methods...
}
