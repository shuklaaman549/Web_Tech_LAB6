let items = [];

function addItem() {
  let item = document.getElementById("item").value;
  items.push(item);
  displayItems();
}
function displayItems() {
    let list = document.getElementById("list");
    list.innerHTML = "";
    for (let i = 0; i < items.length; i++) {
      let item = document.createElement("li");
      item.appendChild(document.createTextNode(items[i]));
      list.appendChild(item);
    }
  }
  function removeItem(index) {
    items.splice(index, 1);
    displayItems();
  }
    