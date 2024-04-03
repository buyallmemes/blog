import {Component} from '@angular/core';
import {MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MatIconButton,
    MatToolbar,
    RouterLink
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  constructor(protected router: Router) {
  }

  openLinkInNewWindow(url: string) {
    window.open(url, "_blank");
  }

  goHome() {
    this.router.navigate(['']);
  }
}
