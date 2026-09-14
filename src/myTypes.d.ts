import {Friend, Colleague } from './myTypes'

export interface Friend {
    name: string;
    phone: string;
    age: number
}

export interface Colleague {
    name: string;
    department: string;
    contact: {
      email: string;
      extension: number
    } 
  }

export interface ColleagueHistory {
  current: Colleague[],
  former: Colleague[]
}
