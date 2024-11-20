import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLoggedIn = false;
  userRole: string | null = null;

  constructor(private sessionService: SessionService) {
    this.sessionService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });

    this.sessionService.role$.subscribe((role) => {
      this.userRole = role;
    });
  }
}
