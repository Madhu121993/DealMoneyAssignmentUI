import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    
    {
      path: '',
      redirectTo: 'files/form',
      pathMatch: 'full'
  },
      {
        path: 'files',
        loadChildren: './files/files.module#FilesModule'
    },
 
];

export class AppRoutingModule {}
