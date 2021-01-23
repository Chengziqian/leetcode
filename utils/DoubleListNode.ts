export class DoubleListNode<T> {
  public next: DoubleListNode<T> | null
  public pre: DoubleListNode<T> | null
  public value: T | null
  
  constructor(value: T = null, pre: DoubleListNode<T> = null, next: DoubleListNode<T> = null) {
    this.value = value;
    this.next = next;
    this.pre = pre;
  }
}
