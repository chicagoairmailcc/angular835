import { Communicable } from './communicable';

export class MessengerSubscription {
    index = 0;
    subscriptionKey: string;
    subscribers: Map<number, Communicable> = new Map<number, Communicable>();

    constructor(subscriptionKey: string) {
        this.subscriptionKey = subscriptionKey;
    }

    addSubscriber(subscriber: Communicable): number {
        this.subscribers.set(++this.index, subscriber);
        return this.index;
    }

    removeSubscriber(index: number): boolean {
        if (this.subscribers.has(index) === false) {
            return false;
        }

        return this.subscribers.delete(index);
    }
}