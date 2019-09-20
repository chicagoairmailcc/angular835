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
    const id = this.getIdFromUrl();
    console.log(id);
    this.getIdFromUrl();
  }

  getItemData(id: number) {
    this.itemService.getItem().subscribe(
      result => {
        this.item = result;
        console.log(result.name);
      }
    );
  }

  getIdFromUrl(): number {
    this.activatedRoute.params.subscribe((parameters: Params) => {
      const urlParameters = parameters;
      const id = urlParameters.id;
      return id;
    });
    return 1;
  }

}
