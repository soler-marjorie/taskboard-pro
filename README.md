# TaskboardPro

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.





# Cours




## Séquence 3 — Lazy Loading & Composants dynamiques

### Lazy Loading
Le lazy loading permet de charger le code d’une fonctionnalité uniquement quand on visite sa route (ex: /tasks, /about).  
On utilise `loadChildren` dans `app.routes.ts` pour importer les routes de la feature à la demande.

### Structure features/
L’application est organisée par fonctionnalités dans `features/` (tasks, about, etc.).  
Chaque feature contient ses pages/composants et ses propres routes.

### Composant dynamique
Un composant dynamique n’est pas présent dans le HTML au départ. Il est créé à la volée via TypeScript.

### ViewContainerRef + createComponent()
On récupère une zone d’injection avec `@ViewChild(..., { read: ViewContainerRef })`.  
Puis on vide l’ancien contenu avec `container.clear()` et on crée le composant avec `container.createComponent(...)`.  
On peut ensuite passer des données via les inputs (ex: `ref.instance.title = task.title`).

## Séquence 4 — Tests Unitaires Angular

### 📚 Ce que j'ai appris

#### 1. Pourquoi tester ?
- Les tests permettent de vérifier automatiquement que le code fonctionne comme prévu.
- Sans tests, une modification peut casser une fonctionnalité existante sans que l’on s’en rende compte.
- Exemple concret : lors de l’ajout de la fonctionnalité *Highlight*, un test m’a permis de vérifier que le titre était bien affiché dans le DOM après une modification du composant.

#### 2. Outils utilisés
- **Jasmine** : framework de tests qui fournit les fonctions `describe`, `it` et `expect` pour écrire les tests.
- **Karma / Vitest** : outil qui exécute les tests dans un environnement automatisé et affiche les résultats.
- **TestBed** : utilitaire Angular qui permet de créer un environnement de test proche de l’application réelle (composants, services, dépendances).

#### 3. Concepts clés maîtrisés
- **AAA Pattern** :  
  - *Arrange* : préparer les données et le contexte  
  - *Act* : exécuter l’action à tester  
  - *Assert* : vérifier le résultat attendu
- **Mocks** : objets simulés permettant d’isoler la partie du code testée.
- **Spies** : permettent de surveiller l’appel d’une méthode (combien de fois, avec quels paramètres).
- **Fixture & detectChanges()** :  
  `fixture.detectChanges()` déclenche le cycle de vie Angular et met à jour le DOM, indispensable pour tester l’affichage.

#### 4. Types de tests pratiqués
- ✅ Test d'une classe simple (sans Angular)
- ✅ Test d'un service
- ✅ Test d'un composant avec TestBed
- ✅ Test des `@Input`
- ✅ Test du rendu du DOM

#### 5. Erreurs courantes rencontrées
- **Oublier `detectChanges()`** : le DOM n’est pas mis à jour, les tests échouent.
- **`No provider for ...`** : le service ou la dépendance n’a pas été déclaré dans `TestBed`.
- **Tests dépendants entre eux** : solution → réinitialiser l’état dans `beforeEach()`.

#### 6. Commandes importantes
```bash
ng test                  # Lancer les tests unitaires
ng test --coverage       # Générer le rapport de couverture de code
