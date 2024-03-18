import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Topic } from './topic.entity/topic.entity';

@Injectable()
export class TopicsService {
  constructor(@InjectRepository(Topic) private topicsRepository: Repository<Topic>) {}

  async getAllTopics(): Promise<Topic[]> {
    return await this.topicsRepository.find();
  }

  async getTopic(_topicId: number): Promise<Topic> {
    return await this.topicsRepository.findOneBy({ topicId: _topicId });
  }

  async updateTopic(topic: Topic) {
    this.topicsRepository.save(topic);
  }

  async createTopic(topic: Topic) {
    try {
      return await this.topicsRepository.insert(topic);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async deleteTopic(topic: Topic) {
    this.topicsRepository.delete(topic);
  }
}
