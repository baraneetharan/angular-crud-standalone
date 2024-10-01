import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup, FormArray, FormBuilder, FormControl, Validators, ReactiveFormsModule
} from '@angular/forms';
import { EventService } from '../services/event.service';
import { Event } from '../models/event.model';
import { Agenda } from '../models/agenda.model';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {

  constructor(public eventService: EventService) { }

  editid: number = 1;
  events: any[] = [];
  k: any;

  ngOnInit() { 
    this.getEvents();
   }

  eventForm = new FormGroup({
    edition: new FormControl(''),
    date: new FormControl(''),
    location: new FormControl('')
  });

  agendaForm = new FormGroup({
    time: new FormControl(''),
    description: new FormControl(''),
    instructor: new FormControl('')
  });

  

  getEvents() {
    this.eventService.getEvents().subscribe((data: any[]) => {
      this.events = data;
      console.log(this.events);
    });
    this.k = 1;
  }
  allAgendas!: Agenda[];
  deleteAgenda(_t93: number) {
    throw new Error('Method not implemented.');
  }

  addRow() {
    throw new Error('Method not implemented.');
  }
  updateEvent() {
    throw new Error('Method not implemented.');
  }
  deleteEvent(arg0: number) {
    throw new Error('Method not implemented.');
  }
  editEvent(arg0: number) {
    throw new Error('Method not implemented.');
  }
}
