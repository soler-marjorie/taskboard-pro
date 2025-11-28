import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Tasks {
  private task = [
    {id : 1, title: 'Préparer un cour Angular'},
    {id : 2, title: 'Rédiger module RxJS'},
    {id: 3, title: 'Corriger les Tp'}
  ]
  

  getTasks(){
    return of (this.task).pipe(delay(1000))
  }

  private lastId = 3;

  private taskSubject = new BehaviorSubject(this.task);
  task$ = this.taskSubject.asObservable()

  addTasks(title: string){
    const newTask = { id: ++this.lastId, title }
    this.task = [...this.task, newTask];
    this.taskSubject.next(this.task)
  }
}
