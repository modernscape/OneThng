let app = new Vue({
  el: "#app",
  data: {
    items: exItems,
    categories: exCategories
  }
});

function addItem() {
  confirm('アイテム追加！');
}

function addCategory() {
  confirm('カテゴリー追加！');
}