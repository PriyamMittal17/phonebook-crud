import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'phonebook-crud';


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }
}
