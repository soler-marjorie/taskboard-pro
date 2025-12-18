import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-edit-component',
  imports: [],
  templateUrl: './task-edit-component.html',
  styleUrl: './task-edit-component.css',
})
export class TaskEditComponent {
  @Input() title = '';
  @Input() taskId = 0;
  @Output() onSave = new EventEmitter<{id: number, title: string}>();
  @Output() onCancel = new EventEmitter<void>();

  save(newTitle: string) {
    if (newTitle.trim()) {
      this.onSave.emit({ id: this.taskId, title: newTitle });
    }
  }

  cancel() {
    this.onCancel.emit();
  }
}
