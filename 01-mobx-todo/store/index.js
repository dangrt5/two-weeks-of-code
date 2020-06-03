import { action, observable, computed } from "mobx";

const initialData = [
  {
    title: "Picking weeds",
    checked: false,
  },
  {
    title: "Watch Future Man",
    checked: false,
  },
];

class Store {
  @observable
  list = initialData;

  @action
  addList() {
    this.list.count++;
  }

  @action
  removeFromList() {
    this.list.count = this.list.count - 1;
  }

  @action
  addTodo(task) {
    this.list.push(task);
  }

  @action
  updateTodo(taskIndex) {
    this.list[taskIndex].checked = !this.list[taskIndex].checked;
  }

  @computed get listLength() {
    return this.list.length;
  }
}

const storeInstance = new Store();

export default storeInstance;
