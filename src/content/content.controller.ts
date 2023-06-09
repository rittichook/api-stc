import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContentService } from './content.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { Content } from './entities/content.entity';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}


  @Get()
  getUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.contentService.getUsers());
      }, 3000); // Delay of 1 second
    });
  }
  

  @Post()
  addContent(@Body() content: Content) {
    return this.contentService.addContent(content);
  }

  // Rest of the controller methods...
}
