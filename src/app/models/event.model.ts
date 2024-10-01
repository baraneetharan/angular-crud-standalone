import { Agenda } from "./agenda.model";

export class Event {
    constructor(
        public id: number,
        public edition: string, 
        public date: string,
        public location: string,
        public agenda: Agenda[]){}    
  }