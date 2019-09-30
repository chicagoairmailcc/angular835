import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { ActivatedRoute, Params, UrlSegment } from '@angular/router';
import { MessengerService } from '../messenger.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit, AfterContentChecked {

  itemBaseUrl = '/item';
  itemOne = '1';
  itemTwo = '2';
  itemThree = '3';
  itemFour = '4';

  constructor(
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute,
    private messengerService: MessengerService
  ) { }

  item: Item;
  id: string;

  ngOnInit() {
    this.itemService.searchTermChange.subscribe((data: string) => {
      console.log({ itemData: data });
      this.id = data;
      this.getItemData(data);
      this.getCurrentUrl();
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

  getCurrentUrl() {
    this.activatedRoute.url.subscribe(data => {
      console.log({ urlSegmentsFromItem: data });
      console.log({ itemActivatedRoute: this.activatedRoute });
      this.messengerService.issueMessage('item-component-activated-route', data);
    });
  }

}
