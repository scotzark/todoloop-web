import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todoloop';

  constructor(private cookieService: CookieService) {}

  ngOnInit() {
    this.cookieService.set("cookie1", "test");
    console.log(this.cookieService.get("cookie1"));
  }

}
