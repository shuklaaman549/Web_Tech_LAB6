class ShoppingListView {
    constructor() {
      this.model = null;
      this.controller = null;
      this.list = document.getElementById("list");
      this.addBtn = document.getElementById("add-btn");
      this.input = document.getElementById("item");
    }
  
    setModel(model) {
      this.model = model;
      this.model.addListener(this.render.bind(this));
    }
  
    setController(controller) {
      this.controller = controller;
      this.addBtn.addEventListener("click", () => {
        const item = this.input.value;
        this.controller.addItem(item);
        this.input.value = "";
      });
      this.list.addEventListener("click", (event) => {
        const index = parseInt(event.target.dataset.index);
        this.controller.removeItem(index);
      });
    }
  
    render(items) {
      this.list.innerHTML = "";
      for (let i = 0; i < items.length; i++) {
        const item = document.createElement("li");
        item.innerText = items[i];
        item.dataset.index = i;
        this.list.appendChild(item);
      }
    }
  }
  