
class scds{
data: Product;
  data1: ProductAuthor;
  data3: ModelProps;
  data4: OwnProps;
  data5: Product2;
  data6: Product3;
  data7: Partial<ProductAuthor>;
  person: ProductNew;
  
  ngOnInit() {
    // this.curry();

    // this.data5 = {id:'1',author: ''}
    this.data1 = { author: '', authorLink: '' };
    // this.data6 = {};

    this.person = {
      pdtFullName: 'demo',
      toNumber: () => {
        return 1;
      },
    };

    const obj = new Test();

    console.log(obj.toNumber());
  }

  // generic types
  constructor() {
    // problem
    //    console.log(this.addArrayIndex(['hi', 'hlo'])); // [Object, Object]  {index: 0, value: "hi"} {index: 1, value: "hlo"}
    //  const finalValue = this.addArrayIndex(['hi', 'hlo']);
    // console.log(finalValue[0].value.notexistingmenthod());
    // Now it will show an error  when you access an unknown method
    // console.log(this.addArrayIndex2(['hi', 'hlo'])); // [Object, Object]  {index: 0, value: "hi"} {index: 1, value: "hlo"}
    // const finalValue = this.addArrayIndex2(['hi', 'hlo']);
    // console.log(finalValue[0].value.notexistingmenthod());
  }

  // issue in generic types
  addArrayIndex(arr: any[]): { index: number; value: any }[] {
    return arr.map((val, i) => ({ value: val, index: i }));
  }

  //  To solve this problem you can add generic like this  -
  addArrayIndex2<T>(arr: T[]): { index: number; value: T }[] {
    return arr.map((val, i) => ({ value: val, index: i }));
  }

  // multiple types
  Setheight(height: string | number) {
    if (typeof height == 'string') {
    } else if (typeof height === 'number') {
    }
  }

  // genericTypes usage
  addQueue() {
    const queue = new Queue<number>();
    queue.push(0);
    // queue.push("1"); // ERROR : cannot push a string. Only numbers allowed
  }

  curry() {
    function makeSizer(size) {
      console.log(size, 'size');
      return function () {
        // document.body.style.fontSize = size + 'px';
        // document.getElementById('test').style.fontSize = size + 'px';
      };
    }
    // var size12 = makeSizer(12);
    // var size14 = makeSizer(14);
    var size16 = makeSizer(20);
    console.log(size16);
  }
}

/** A class definition with a generic parameter */
class Queue<T> {
  private data: Array<T> = [];

  push = (item: T) => this.data.push(item);

  pop = (): T | undefined => this.data.shift();
}

export interface ProductAuthor {
  author: string;
  authorLink: string;
}

export interface ProductBase {
  id: string;
  price: string;
}

export interface Product extends ProductBase, ProductAuthor {
  description: string;
  name: string;
}

export enum ReviewRequestsStatus {
  NEW = 10,
}

export enum state {
  PENDING = 'pending',
  OK = 'ok',
  KO = 'ko',
}

export const ReviewRequestStatusMap: Record<
  number,
  {
    state: state;
    messageTranslationKey: string;
    isReminder?: boolean;
  }
> = {
  [ReviewRequestsStatus.NEW]: {
    state: state.PENDING,
    messageTranslationKey: 'Data received',
  },
};

interface ProductNew {
  pdtFullName: string;

  toNumber(): number;

  id?: string;
  name?: string;
  price?: string;
  description?: string;
}

interface Pricing {}

interface cart extends ProductNew, Pricing {}

class Cosmetic {
  uId: string;

  cName: string;

  constructor(id: string, name: string) {
    this.uId = id;

    this.cName = name;
  }

  toString() {
    console.log(`cosmetic ID of ${this.cName}: ${this.uId}`);
  }
}

class Electronic {
  id: string;

  eName: string;

  constructor(id: string, name: string) {
    this.id = id;

    this.eName = name;
  }

  toString() {
    console.log(`EMP ID of ${this.eName}: ${this.id}`);
  }
}

// Instantiate both classes-

let cosmetic = new Cosmetic('2432423SR', 'XYZ');

let electronic = new Electronic('SM43432', '');
console.log(cosmetic, electronic);
// example Record

export const SERVICES: Record<string, string> = {
  doorToDoor: 'delivery at door',
  airDelivery: 'flying in',
  specialDelivery: 'special delivery',
  inStore: 'in-store pickup',
};

export class CartModel {
  products: Record<string, ProductInCart>;
  errors?: CartErrors;

  constructor() {
    // this.products = {}
  }
}

export interface ProductInCart {
  id: string;
  amount: number;
  name: string;
  label?: string;
}

export enum ErrorsCode {
  NetworkError = 'NetworkError',
  ServerError = 'ServerError',
  FormValidationError = 'FormValidationError',
  UnknownError = 'UnknownError',
}

export interface Product4 {
  id: string;
  name: string;
  price: string;
  description: string;
  author: string;
  authorLink: string;
}

// example partial
export type ModelProps = Partial<{
  product: Product;
  cartContent: Record<string, ProductInCart>;
}>;

export type CartErrors = Partial<Record<ErrorsCode, string>>;

export type OwnProps = Required<{
  name: string;
  description: string;
  ingredients: Array<Product>;
}>;

export type Product2 = Pick<Product4, 'id' | 'author'>;

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type Product3 = Omit<Product4, 'name' | 'description'>;

class Test implements ProductNew {
  pdtFullName: string;

  toNumber() {
    console.log('toNumber');
    return 1;
  }

  id: string;
  name: string;
  price: string;
  description: string;
}

// class C implements ProductNew {
//   pdtFullName: string;

//   //  Throws error:  Class 'C' incorrectly
//   // implements interface 'ProductNew'.
//   //  Property 'toNumber' is missing
//   ToNumber() {
//     console.log("C");
//   }
// }

function calculatePrice(value: any) {
  return value();
}

// With unknown-
function calculatePorice(value: unknown) {
  // value() // gives eror
  if (typeof value == 'function') {
    value();
  }
}

// All types expressible as interfaces

interface Node {
// children: Node[]; // property
// numChildren(): number; // method
(x: string): string; // callable
new (label: string): Node; // newable
[key: string]: boolean; // index signature
}