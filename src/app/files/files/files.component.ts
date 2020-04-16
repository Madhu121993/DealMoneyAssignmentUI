import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { jsonData } from '../../../../data';
import { ExcelService } from '../excel.service';
import { FileService } from "../files/files.service";
import { ToastrService } from '../toastr.service';
@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  constructor(private excelService: ExcelService, private fileService: FileService,private toastr:ToastrService) { }
  ngOnInit() {
  }
/**
     * @author Madhu
     * @description This function is used to upload json data.
     */
  fileUpload() {
    var body = { data: jsonData }
    this.fileService.uploadData(body).then(response => {
     this.toastr.Success("You have successfully uploaded")
    }).catch((err) => {
      this.toastr.Error("Data has not uploaded")
      return Observable.throw(err)
    })

  }

  /**
     * @author Madhu
     * @description This function will return All json data.
     */
  download() {
    this.fileService.DownloadData().then(response => {
      console.log("response",response)
      if (response.length == 0){
        this.toastr.Success("You have to upload first")
      }else{
        var excelData: any = response[0].data
        this.excelService.exportAsExcelFile(excelData, 'sample');
        this.toastr.Success("You have successfully downloaded")
      }
     
    }).catch((err) => {
      console.log("err", err)
      return Observable.throw(err)
    })
  }

}

