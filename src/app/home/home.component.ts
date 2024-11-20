import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userRole: string | null = null;

  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {
    this.userRole = this.sessionService.getRole(); // Obtener el rol desde el storage
  }

  isProvider(): boolean {
    return this.userRole === 'PROVEEDOR';
  }

  isClient(): boolean {
    return this.userRole === 'COMPRADOR';
  }

  isAdmin(): boolean {
    return this.userRole === 'ADMINISTRADOR';
  }
}
