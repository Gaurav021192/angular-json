import {Component, OnInit} from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit {
  title = 'app';
  private apiUrl = './assets/data/data.json';
  data: any = {};

  constructor(private http: Http) {
    this.getContacts();
    this.getData();
  }

  ngOnInit() {
  }

  getData() {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json());
  }

  getContacts() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
}
