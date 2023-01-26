import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { IProduct } from "./prducts-list";

@Component({
  selector: "pm-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.css"],
  providers: [ProductService],
})
export class ProductsListComponent implements OnInit {
  constructor(private productService: ProductService) {}
  pageTitle: string = "Product List:";
  showImage: boolean = true;
  imageWidth = 50;
  imageMargin = 2;
  errorMessage = "";
  // sub!: Subscription;
  private _listFilter: string = "";

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }
  products: IProduct[] = [];
  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }
  filteredProducts: IProduct[] = [];
  onRatingClicked(message: string) {
    this.pageTitle = "Product List: " + message;
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
