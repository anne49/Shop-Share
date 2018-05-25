//import { ShoppingCart } from './shopping-cart';

export class Blog {
    datePost: number;
    //items: any[]=[];
    //shoppingCart: ShoppingCart

    constructor(public authorName: string, public authorId: string, public blogForm: any){
        this.datePost = new Date().getTime();
        // this.items = shoppingCart.items.map(i => {
        //     return {
        //         product:{
        //             title: i.title,
        //             imageUrl: i.imageUrl,
        //             price: i.price,
        //         },
        //         quantity: i.quantity,
        //         totalPrice: i.totalPrice
        //     }
        // });
    }
}