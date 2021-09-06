import Buyable from "./buyable";

export default class Cart {
    private _items:Buyable[] = [];

    add(item:Buyable):void {
        this._items.push(item);
    }

    getAll():Buyable[] {
        return[...this._items];
    }

    getTotalPrice():number {
        return this._items.reduce((acc, item) => acc + Number(item.price), 0);
    }

    getDiscountPrice(percent:number):number {
        return this.getTotalPrice() - this.getTotalPrice() * percent / 100;
    }

    deleteItems(id:number):void {
       const itemIndex = this._items.findIndex((item) => item.id === id);
       if (itemIndex != -1) {
           this._items.splice(itemIndex, 1);
       }
    }
}