import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true
})
export class HeaderComponent {
  @Output() registerClicked = new EventEmitter<void>();

  onRegisterClick() {
    console.log('Register button clicked'); 
    this.registerClicked.emit();
  }
}
