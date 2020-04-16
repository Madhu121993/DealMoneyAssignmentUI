import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesComponent } from './files/files.component';
import { RouterModule } from '@angular/router';
import { filesRoutes } from './files.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ExcelService } from "./excel.service";
import { FileService } from "../files/files/files.service";
import { ToastrService } from "../files/toastr.service";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(filesRoutes),
    HttpModule,
    HttpClientModule
  ],
  providers:[ExcelService,FileService,ToastrService],
  declarations: [FilesComponent]
})
export class FilesModule { }
