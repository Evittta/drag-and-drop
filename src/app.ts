import _ from "lodash";
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";
import { Product } from "./product.model";

console.log(_.shuffle([1, 2, 3]));

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");

const products = [
  { title: "Book", price: 4 },
  { title: "A Book", price: 5 },
  { title: "New Book", price: 10 },
];

const loadedProducts = plainToClass(Product, products);
//const product = new Product("Book", 5);
// console.log(product.getInformation());
loadedProducts.forEach((element: Product) => {
  console.log(element.getInformation());
});

const newProduct = new Product("", -1);
validate(newProduct).then((errors) => {
  if (errors.length) {
    console.log(errors);
  } else {
    console.log(newProduct.getInformation());
  }
});
