import { Pipe, PipeTransform } from '@angular/core';
import { Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Pipe({
  name: 'fetch',
  pure:false

})
export class FetchJsonPipe implements PipeTransform {
  private cachedData:any = null;
  private cachedUrl = '';
  constructor(private http:Http){}



  transform(url: string): any {
    if(url!=this.cachedUrl){ //if there is a changed url
      this.cachedUrl = url; // set cached url as current url
      this.cachedData = null; //clear old cache 
      this.http.get(url)
        .map(i=>i.json())
        .subscribe(i=>this.cachedData = i);

    }
    return this.cachedData;
  }

}
