import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
// import { TasksService } from './app/tasks/tasks.service';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
// Il est possible de passer des providers à bootstrapApplication pour fournir des services à l'application entière (moins conseillé)
// bootstrapApplication(AppComponent, {
//     providers: [TasksService],
// }).catch((err) => console.error(err));
