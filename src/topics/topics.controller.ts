import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { Topic } from './topic.entity/topic.entity';

@Controller('topics')
export class TopicsController {
  constructor(private service: TopicsService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getTopic(params.id);
  }

  @Get('')
  getAll() {
    return this.service.getAllTopics();
  }

  @Get('/search/:search')
  search(@Param() params) {
    return this.service.searchTopics(params.search);
  }

  @Post()
  create(@Body() topic: Topic) {
    return this.service.createTopic(topic);
  }

  @Put()
  update(@Body() topic: Topic) {
    return this.service.updateTopic(topic);
  }

  @Delete(':id')
  deleteTopic(@Param() params) {
    return this.service.deleteTopic(params.id);
  }
}
