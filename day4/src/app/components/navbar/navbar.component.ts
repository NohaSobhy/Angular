import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Output() componentChange = new EventEmitter<string>();

  showComponent(component: string): void {
    this.componentChange.emit(component);
  }
}
