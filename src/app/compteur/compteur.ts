import { Component, inject } from '@angular/core';
import { Tasks } from '../core/services/tasks';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-compteur',
  imports: [AsyncPipe],
  templateUrl: './compteur.html',
  styleUrl: './compteur.css',
})
export class Compteur {
  // Observable retourné par le service
  task$!: ReturnType<Tasks['getTasks']>;

  constructor(private tasks: Tasks) {
    // on appelle bien le service, pas l’observable
    this.task$ = this.tasks.getTasks();
  }

  /*
  // Compteur simple
  count = 0
  intervalId: any

  ngOnInit() {
    console.log('ngOnInit exécuté');
    this.intervalId = setInterval(()=>{
      this.count++;
      console.log(this.count)
    },500)
  }

  ngOnDestroy(){
    console.log('Home détruit')
    clearInterval(this.intervalId);
  }
  */

  taskService = inject(Tasks);
  tasks$ = this.taskService.task$;

  addTask(title: string) {
    this.taskService.addTasks(title);
  }
}
