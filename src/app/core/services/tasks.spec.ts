import { TestBed } from '@angular/core/testing';
import { Tasks } from './tasks';
import { firstValueFrom } from 'rxjs';

  describe('Task Service', () => {
  let service: Tasks;

  beforeEach(() => {
      // Configurer TestBed
      TestBed.configureTestingModule({
      providers: [Tasks]
      });
      
      // Récupérer le service
      service = TestBed.inject(Tasks);
      service.deleteTask(1);  // État propre
  });

  it('devrait être créé', () => {
      expect(service).toBeTruthy();
  });

  it('devrait ajouter une tâche', async () => {
    service.addTasks('Apprendre les tests');
    
    const tasks = await firstValueFrom(service.task$);
    expect(tasks.some(t => t.title === 'Apprendre les tests')).toBe(true);
  });

  it('devrait supprimer une tâche', async() => {
      service.addTasks('Tâche temporaire');
       const tasks1 = await firstValueFrom(service.task$);
    const added = tasks1.find(t => t.title === 'Tâche temporaire');
    expect(added).toBeTruthy();

    service.deleteTask(added!.id);

    const tasks2 = await firstValueFrom(service.task$);
    expect(tasks2.find(t => t.id === added!.id)).toBeUndefined();
  });
});