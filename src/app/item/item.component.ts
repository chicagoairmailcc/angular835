import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  item: Item;

  ngOnInit() {
    this.itemService.getItem().subscribe(
      result => {
        this.item = result;
        console.log(result.name);
      }
    );
  }

}
