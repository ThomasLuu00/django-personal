import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  opened: boolean = true;
  constructor() {}

  ngOnInit(): void {
  }

  toggleSidebar(){
    this.opened = !this.opened;
  }
}
