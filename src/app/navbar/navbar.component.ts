import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(){ }
  ngOnInit(): void{ }

  toggleSidebar(): void {
    this.toggleSidenav.emit();
  }

  
}
