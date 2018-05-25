import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images=[
    "https://images.unsplash.com/photo-1515774206252-cd4fa51b83de?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=56961b91ced695e28b584ce7e7bee7e7&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d2b5c3a30ad1ec478df74c83536d47e3&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1515683359900-6922e4964be1?ixlib=rb-0.3.5&s=6c8f1cf02cc0ce04b44fe8eb000b0fce&auto=format&fit=crop&w=1050&q=80"
  ]
  constructor() { }

  ngOnInit() {
  }

}
