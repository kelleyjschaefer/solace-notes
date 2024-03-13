import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Note } from "./note.entity/note.entity";

@Injectable()
export class NotesService {
  constructor(@InjectRepository(Note) private notesRepository: Repository<Note>) {}

  async getAllNotes(): Promise<Note[]> {
    return await this.notesRepository.find();
  }

  async getNote(_id: number): Promise<Note> {
    return await this.notesRepository.findOneBy({ id: _id });
  }

  async updateNote(note: Note) {
    this.notesRepository.save(note);
  }

  async createNote(note: Note) {
    try {
      return await this.notesRepository.insert(note);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async deleteNote(note: Note) {
    this.notesRepository.delete(note);
  }
}
