import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { config } from "../../config";
@Injectable({
    providedIn: 'root'
  })
export class FileService {
    urlPort = config.urlPort;
    constructor(private httpClient: HttpClient) { }
  
    /**
 * @author Madhu
 * @description This function is used by user to upload the json data.
 */
uploadData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      
      this.httpClient.post(this.urlPort + "/api/upload/uploadFile", body)
            .pipe(map(Response => Response))
  
            .subscribe((response: any) => {
                resolve(response);
            }, reject);
    });
  }

  /**
 * @author Madhu
 * @description This function will return All Json data.
 */
DownloadData(): Promise<any> {
    return new Promise((resolve, reject) => {
      
      this.httpClient.get(this.urlPort + "/api/download/downloadFile")
      .map(
        (response) => response
      )
            .subscribe((response: any) => {
                resolve(response);
            }, reject);
    });
  }
  
}
