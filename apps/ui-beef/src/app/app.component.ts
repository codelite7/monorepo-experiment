import {Component, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Auth} from "aws-amplify";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 's3_static_site';
  phrase = ''
  user : any = {}
  constructor(private http: HttpClient) {
    Auth.currentAuthenticatedUser().then(user => {
      this.user = user
      console.log(user)
    })
    this.getPhrase()
  };
  getPhrase() {
    this.http.get<any>('https://api.derp.ninja/derp').subscribe(data => {
      console.log(data)
      this.phrase = data.message
    });
  }
}
