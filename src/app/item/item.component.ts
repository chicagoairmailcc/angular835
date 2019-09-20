import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  constructor(
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute
  ) { }

  item: Item;
  id: string;

  ngOnInit() {
    this.getIdFromUrl();
    this.getItemData(this.id);
  }

  getItemData(id: string) {
    this.itemService.getItem(id).subscribe(
      result => {
        this.item = result;
        console.log(result.name);
      }
    );
  }

  getIdFromUrl(): void {
    this.activatedRoute.params.subscribe((parameters: Params) => {
      const urlParameters = parameters;
      this.id = urlParameters.item;
    });
  }

}
