import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TasksPage } from './tasks-page';
import { Tasks } from '../../../core/services/tasks';

describe('TasksPage Component - Rendu', () => {
  let component: TasksPage;
  let fixture: ComponentFixture<TasksPage>;
  let service: Tasks;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksPage],
      providers: [
        provideRouter([]),
        Tasks
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TasksPage);
    component = fixture.componentInstance;
    service = TestBed.inject(Tasks);
    
    // Partir d'un état propre
    service.deleteTask(1);
    fixture.detectChanges();
  });

  it('devrait afficher le bon nombre de tâches', async () => {
    // ARRANGE : Ajouter des tâches via le service
    service.addTasks('Tâche 1');
    service.addTasks('Tâche 2');
    
    // ACT : Mettre à jour le template
    fixture.detectChanges();
    
    // Attendre que l'Observable émette
    await fixture.whenStable();
    
    // ASSERT : Compter les éléments <li> dans le DOM
    const items = fixture.nativeElement.querySelectorAll('li');
    expect(items.length).toBe(4);
  });

  it('devrait afficher le titre des tâches', async () => {
    // ARRANGE
    service.addTasks('Apprendre Angular');
    service.addTasks('Maîtriser les tests');
    
    // ACT
    fixture.detectChanges();
    await fixture.whenStable();
    
    // ASSERT
    const element = fixture.nativeElement;
    const text = element.textContent;
    
    expect(text).toContain('Apprendre Angular');
    expect(text).toContain('Maîtriser les tests');
  });
});