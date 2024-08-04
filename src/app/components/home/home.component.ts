import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPopupComponent } from '../register-popup/register-popup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, RegisterPopupComponent]
})
export class HomeComponent {
  showRegisterPopup = false;

  toggleRegisterPopup() {
    this.showRegisterPopup = !this.showRegisterPopup;
  }

  onClosePopup() {
    this.showRegisterPopup = false;
  }
}
