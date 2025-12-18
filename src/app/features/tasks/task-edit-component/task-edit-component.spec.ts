import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskEditComponent } from './task-edit-component';

describe('TaskEditComponent', () => {
  let component: TaskEditComponent;
  let fixture: ComponentFixture<TaskEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskEditComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskEditComponent);
    component = fixture.componentInstance;
    component.title = 'Tâche initiale';
    component.taskId = 1;
    fixture.detectChanges();
  });

  it('devrait émettre onSave avec les bonnes données', () => {
    // ARRANGE : Espionner l'événement @Output
    let savedData: any;
    component.onSave.subscribe((data) => {
      savedData = data;
    });

    // ACT : Appeler la méthode save
    component.save('Nouvelle tâche');

    // ASSERT : Vérifier les données émises
    expect(savedData.id).toBe(1);
    expect(savedData.title).toBe('Nouvelle tâche');
  });

  it('devrait émettre onCancel quand on annule', () => {
    // ARRANGE : Espionner l'événement @Output
    let cancelled = false;
    component.onCancel.subscribe(() => {
      cancelled = true;
    });

    // ACT : Appeler la méthode cancel
    component.cancel();

    // ASSERT : Vérifier que l'événement a été émis
    expect(cancelled).toBe(true);
  });

  it('ne devrait pas émettre onSave si le titre est vide', () => {
    let emitted = false;
    component.onSave.subscribe(() => {
      emitted = true;
    });

    component.save('   ');  // Titre vide (espaces)

    expect(emitted).toBe(false);
  });
});