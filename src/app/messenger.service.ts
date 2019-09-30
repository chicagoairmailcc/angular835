import { Injectable } from '@angular/core';
import { MessengerSubscription } from './messenger-subscription';
import { Communicable } from './communicable';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  index = 0;
  observers: Array<MessengerSubscription> = [];

  constructor() { }

  addObserver(subscription: string, observer: Communicable): number {
      for (const value of this.observers) {
          if (value.subscriptionKey === subscription) {
              return value.addSubscriber(observer);
          }
      }

      const newSubscription = new MessengerSubscription(subscription);
      const index = newSubscription.addSubscriber(observer);
      this.observers.push(newSubscription);
      return index;
  }

  removeObserver(subscription: string, index: number): boolean {
      for (const value of this.observers) {
          if (value.subscriptionKey === subscription) {
              return value.removeSubscriber(index);
          }
      }
      return false;
  }

  issueMessage(subscription: string, message: any) {
      for (const value of this.observers) {
          if (value.subscriptionKey === subscription) {
              value.subscribers.forEach(subscriber => {
                  subscriber.communicate(message);
                  console.log({ MessengerServiceCommunicateMessage: message });
              });
          }
      }
  }
}
