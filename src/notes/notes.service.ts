import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Note } from './note.entity/note.entity';
import { validate } from 'class-validator';

@Injectable()
export class NotesService {
  constructor(@InjectRepository(Note) private notesRepository: Repository<Note>) {}

  async getAllNotes(): Promise<Note[]> {
    return await this.notesRepository.createQueryBuilder("note").innerJoinAndSelect("note.owner", "users").getMany();
  }

  async getNote(_id: number): Promise<Note> {
    return await this.notesRepository.findOneBy({ id: _id });
  }

  async findNotes(_search: string): Promise<Note[]> {
    _search = '%' + _search.slice(0, _search.length) + '%';
    return await this.notesRepository.findBy({ content: Like(_search) });
  }

  async findNotesByUser(userId: number): Promise<[Note[], number]> {
    return await this.notesRepository.findAndCountBy({ uuid: userId });
  }

  async updateNote(note: Note) {
    this.notesRepository.save(note);
  }

  async createNote(note: Note) {
    try {
      validate(note).then((errors) => {
        if (errors.length > 0) {
          throw new BadRequestException(errors);
        }
      });
      return await this.notesRepository.insert(note);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async deleteNote(note: Note) {
    this.notesRepository.delete(note);
  }
}
