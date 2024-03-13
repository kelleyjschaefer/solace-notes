import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { Note } from './note.entity/note.entity';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private service: NotesService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getNote(params.id);
  }

  @Post()
  create(@Body() note: Note) {
    return this.service.createNote(note);
  }

  @Put()
  update(@Body() note: Note) {
    return this.service.updateNote(note);
  }

  @Delete(':id')
  deleteNote(@Param() params) {
    return this.service.deleteNote(params.id);
  }
}
