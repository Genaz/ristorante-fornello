export class MenuItem {
  public title: string;
  public price: number;
  public description: string;
  public calories: number;
  public imagePath: string;

  constructor(title: string, desc: string, price:number, calories: number, imagePath: string) {
    this.title = title;
    this.price = price;
    this.description = desc;
    this.calories = calories;
    this.imagePath = imagePath;
  }
}