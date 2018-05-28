//import { ShoppingCart } from './shopping-cart';

export class Blog {
    datePost: number;
    // authorName: string;
    // authorId: string;
    // blogForm: {
    //     "title": string,
    //     "imageUrl": string,
    //     "ingredients": string,
    //     "notes": string
    // }
    //items: any[]=[];
    //shoppingCart: ShoppingCart

    constructor(public authorName: string, public authorId: string, public blogForm: any ){//init?: Partial<Blog>
        this.datePost = new Date().getTime();
        //Object.assign(this, init);
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