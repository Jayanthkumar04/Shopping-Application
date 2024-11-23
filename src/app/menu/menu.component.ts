import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  RouterModule,
} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgbModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    RouterModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  isCollapsed = false;
}
