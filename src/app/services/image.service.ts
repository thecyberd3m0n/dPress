import { IpfsService } from './ipfs.service';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private ipfsService: IpfsService) {
   }

  publishImage(file: File) {
    // TODO: image validation
    return this.ipfsService.uploadFile(file);
  }

  getImage(path: string) {
    return this.ipfsService.getFile(path).pipe(tap(x => console.log(x)));
  }
}
