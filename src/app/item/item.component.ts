import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { ActivatedRoute, Params, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit, AfterContentChecked {

  constructor(
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute
  ) { }

  item: Item;
  id: string;

  ngOnInit() {
    this.itemService.searchTermChange.subscribe((data: string) => {
      console.log({itemData: data});
      this.id = data;
      this.getItemData(data);
    });
  }

  ngAfterContentChecked() { }

  getItemData(id: string) {
    this.itemService.getItem(id).subscribe(
      result => {
        this.item = result;
        console.log(result.name);
      }
    );
  }

}
