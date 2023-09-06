import { ISortable } from "./Sorter";

export class NumbersCollection{
    constructor(public data: number[]) {}

    get length(): number {
        return this.data.length
    }

    /**
     * compare wheter leftIndex is greater than rightIndex or not
     * @param leftIndex 
     * @param rightIndex 
     * @returns 
     * @example 1 > 2 returns false
     */
    public compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    /**
     * swap index
     * @param leftIndex 
     * @param rightIndex 
     */
    public swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
    
}