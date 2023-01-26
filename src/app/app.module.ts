import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { HomeComponent } from "./home/home.component";
import { SharedComponent } from "./shared/shared.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    HomeComponent,
    SharedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
