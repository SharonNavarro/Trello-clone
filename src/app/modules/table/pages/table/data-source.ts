import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs'
import { Product } from "../../../../models/product.model";

export class DataSourceProduct extends DataSource<Product> {

  data = new BehaviorSubject<Product[]>([]);
  originalData: Product[] = [];

  connect(): Observable<Product[]> {
    return this.data;
  }

  init(products: Product[]) {
    this.originalData = products;
    this.data.next(products);
  }

  getTotal() {
    const products = this.data.getValue();
    return products
      .map(item => item.price)
      .reduce((price, total) => price + total, 0);
  }

  update(id: Product['id'], changes: Partial<Product>) {
    const products = this.data.getValue();
    const productIndex = products.findIndex(item => item.id === id);
    // 0 === false - Me devuelve la posicion,
    // si la posicion es 0, la condicional lo interpreta como false
    console.log(productIndex);
    if (productIndex !== -1) {
      products[productIndex] = {
        ...products[productIndex],
        ...changes,
      }
      console.log(products);
      this.data.next(products);
    }
  }

  find(query: string) {
    const newProducts = this.originalData.filter(item => item.title.toLowerCase().includes(query.toLowerCase())
    || item.id.toString().includes(query) || item.price.toString().includes(query));
    this.data.next(newProducts);
  }

  disconnect() { }
}
