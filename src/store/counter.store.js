import {action, decorate, observable} from 'mobx';

export default class CounterStore {
  count = 0;

  increment() {
    console.log('this.count: ', this.count);
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }
}
decorate(CounterStore, {
  count: observable,
  increment: action.bound,
  decrement: action.bound,
});
