class ShoppingListModel {
    constructor() {
      this.items = [];
      this.listeners = [];
    }
  
    addItem(item) {
      this.items.push(item);
      this.notifyListeners();
    }
  
    removeItem(index) {
      this.items.splice(index, 1);
      this.notifyListeners();
    }
  
    getItems() {
      return this.items.slice();
    }
  
    addListener(listener) {
      this.listeners.push(listener);
    }
  
    notifyListeners() {
      for (const listener of this.listeners) {
        listener(this.getItems());
      }
    }
  }
  