import { Item } from './item.model';

export class Cart {
    constructor(
        public cartid: number,
        public name: string,
        public items: Item[]
    ) {}
}
