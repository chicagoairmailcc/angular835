import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
  }

  getItem(id: string) {
    this.itemService.getItem(id).subscribe(data => {
        console.log({data});
      });
  }

}
