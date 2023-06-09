import { Module } from '@nestjs/common';
import { ContentCategolyController } from './content_categoly.controller';
import { ContentCategolyService } from './content_categoly.service';

@Module({
  controllers: [ContentCategolyController],
  providers: [ContentCategolyService]
})
export class ContentCategolyModule {}
