import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { MobileAppComponent } from './components/mobile-app/mobile-app.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterPopupComponent } from './components/register-popup/register-popup.component';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    HeaderComponent,
    HomeComponent,
    GettingStartedComponent,
    MobileAppComponent,
    FooterComponent,
    RegisterPopupComponent
  ]
})
export class AppComponent {
  showRegisterPopup = false;

  toggleRegisterPopup() {
    console.log('Toggling register popup');
    this.showRegisterPopup = !this.showRegisterPopup;
  }

  onCloseRegisterPopup() {
    console.log('Closing register popup');
    this.showRegisterPopup = false;
  }
}
