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
    this.getIdFromUrl();
  }

  ngAfterContentChecked() {
    this.itemService.searchTermChange.subscribe((data: string) => {
      console.log({itemData: data});
    });
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
      console.log({urlParameters});
      this.getItemData(urlParameters.item);
    });

    this.activatedRoute.paramMap.subscribe((data => {
      console.log({itemComponentUrl: data});
    }));
  }

}
