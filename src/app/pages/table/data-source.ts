import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs'
import { Product } from "../../models/product.model";

export class DataSourceProduct extends DataSource<Product> {

  data = new BehaviorSubject<Product[]>([]);

  connect(): Observable<Product[]>{
    return this.data;
  }

  init(products: Product[]){
    this.data.next(products);
  }

  getTotal(){
    const products = this.data.getValue();
    return products
    .map(item => item.price)
    .reduce((price, total) => price + total, 0);
  }

  disconnect() {}
}
