import {Component} from '@angular/core';
import {MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MatIconButton,
    MatToolbar
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  constructor(protected router: Router) {
  }

  openLinkInNewWindow(url: string) {
    window.open(url, "_blank");
  }

  goHome() {
    this.router.navigate(['']);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
