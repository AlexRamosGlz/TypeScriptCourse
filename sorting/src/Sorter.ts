
export interface ISortable {
  length: number,
  swap(leftIndex: number, rightIndex: number): void,
  compare(leftIndex: number, rightIndex: number): boolean
}

export class Sorter {
  constructor(public collection: ISortable) {}
  
  public sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
