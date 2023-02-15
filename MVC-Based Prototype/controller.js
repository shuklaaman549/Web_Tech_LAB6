class ShoppingListController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
      this.view.setModel(this.model);
      this.view.setController(this);
    }
  
    addItem(item) {
      this.model.addItem(item);
    }
  
    removeItem(index) {
      this.model.removeItem(index);
    }
  }
  