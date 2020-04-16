import { Routes } from '@angular/router';
import { FilesComponent } from './files/files.component';
export const filesRoutes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'form',
          component: FilesComponent
        }
      ]
    }
  ];