import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { ItemService } from '../item.service';
import { UrlSegment, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  searchTerm: string;

  constructor(
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((data => {
      console.log({ searchComponentUrl: data });
      if (data.has('id')) {
        console.log({ searchComponentID: data.get('id') });
        this.searchTerm = data.get('id');
        this.getItem(this.searchTerm);
      }
    }));
  }

  getItem(input: string) {
    console.log({ input });
    this.searchTerm = input;
    this.itemService.setSearchTerm(input);
    this.router.navigateByUrl('/item/' + this.searchTerm);
  }

}
