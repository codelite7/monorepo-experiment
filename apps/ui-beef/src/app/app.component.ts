import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 's3_static_site';
  phrase = ''
  constructor(private http: HttpClient) {
    this.getPhrase()
  };
  getPhrase() {
    this.http.get<any>('https://api.derp.ninja/derp').subscribe(data => {
      console.log(data)
      this.phrase = data.message
    });
  }
}
