import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { ItemService } from '../item.service';
import { UrlSegment, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  searchTerm: string;

  constructor(
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  getItem(input: string) {
    console.log({input});
    this.itemService.searchTerm = input;
  }

}
