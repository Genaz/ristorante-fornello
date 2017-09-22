import {MenuItem} from "./menu/menu-list/menu-item.model";

export class MenuService {
  menuList: MenuItem[] = [
    new MenuItem('BRUSCHETTA', 'toasted italian bread, chopped roma tomatoes, shaved grana padano cheese', 8, 120, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/2014_Bruschetta_The_Larder_Chiang_Mai.jpg/640px-2014_Bruschetta_The_Larder_Chiang_Mai.jpg'),
    new MenuItem('INSALATA CAPRESE', 'bufala mozzarella, vine ripen tomatoes, extra virgin olive oil, pesto drizzle', 14, 300, 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Tomato_season.jpg/640px-Tomato_season.jpg'),
    new MenuItem('PIZZA GENOVESE', 'fresh tomato sauce, pesto, mozzarella cheese, goat cheese, sundried tomatoes, chicken', 19, 420, 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Traditional_pizza_from_Napoli.jpg/640px-Traditional_pizza_from_Napoli.jpg'),
    new MenuItem('CRESPELLE NAPOLETANA', 'homemade crepes, spinach & ricotta cheese, mozzarella cheese, tomato sauce', 15, 400, 'http://4.bp.blogspot.com/-aiSMc5FGmpk/TlJzKiCVOAI/AAAAAAAAAbY/_xCBD2Hx9Mo/s1600/P1030228.JPG'),
    new MenuItem('PANINO PASTRAMI', 'focaccia bread, prosciutto, arugula, roasted red pepper, and bocconcini cheese', 11, 450, 'http://www.dissapore.com/wp-content/uploads/2014/02/panino-pastrami-romeo-ape.jpg')
  ];

  getMenu():  MenuItem[] {
    return this.menuList;
  }
}
