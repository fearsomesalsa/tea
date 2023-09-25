import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent {
  searchString = new FormControl<string>('', {nonNullable: true});
  public search$: Subject<string> = new Subject<string>();
  private subscription: Subscription | null = null;
  value: string = '';

  constructor(private router: Router) { }

  search() {
    this.search$.next(this.searchString.value);
    if (this.searchString.value) {
      this.router.navigate(['/products'], {queryParams: {search: this.searchString.value}});
    } else {
      this.router.navigate(['/products']);
    }
  }

  reset() {
    this.searchString.reset();
    this.search$.next(this.searchString.value);
    this.router.navigate(['/products']);
  }

  print() {
    this.search$.next(this.searchString.value);
    console.log(this.searchString.value);
  }
}
