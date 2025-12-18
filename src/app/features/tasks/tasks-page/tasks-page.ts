import { Component, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { Tasks, Task } from '../../../core/services/tasks';
import { AsyncPipe } from '@angular/common';
import { TaskHighlight } from '../task-highlight/task-highlight';

@Component({
  selector: 'app-tasks-page',
  imports: [AsyncPipe],
  templateUrl: './tasks-page.html',
  styleUrl: './tasks-page.css',
})
export class TasksPage {

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
    const trimmed = title.trim();
    if (!trimmed) return;
    this.tasks.addTasks(trimmed);
  }

  deleteTask(id: number) {
  this.tasks.deleteTask(id);
}


  //task-highlight
  @ViewChild('highlightContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;

  highlight(task: Task) {
    // Efface le contenu précédent
    this.container.clear();
    
    // Crée le composant TaskHighlight
    const ref = this.container.createComponent(TaskHighlight);
    
    // Passe les données au composant
    ref.instance.title = task.title;
  }
}
