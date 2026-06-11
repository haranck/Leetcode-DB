/**
 * @param {number[]} stones
 * @return {number}
 */
class MyMaxHeap {
    constructor() {
        this.heap = []
    }
    insert(value) {
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }
    remove() {
        if (this.heap.length === 0) return
        let max = this.heap[0]
        let last = this.heap.pop()
        if (this.heap.length > 0) {
            this.heap[0] = last
            this.heapifyDown(0)
        }
        return max
    }
    heapifyUp(index) {
        let parent = Math.floor((index - 1) / 2)
        while (index > 0 && this.heap[index] > this.heap[parent]) {
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]]
            index = parent
            parent = Math.floor((index - 1) / 2)
        }
    }
    heapifyDown(index) {
        let largest = index
        let left = 2 * index + 1
        let right = 2 * index + 2

        if (left < this.heap.length && this.heap[largest] < this.heap[left]) {
            largest = left
        }
        if (right < this.heap.length && this.heap[largest] < this.heap[right]) {
            largest = right
        }
        if(largest !== index){
            [this.heap[index],this.heap[largest]] = [this.heap[largest],this.heap[index]]
            this.heapifyDown(largest)
        }
    }
}
var lastStoneWeight = function (stones) {
    let max = new MyMaxHeap()
    for (let num of stones) {
        max.insert(num)
    }
    while (max.heap.length > 1) {
        let first = max.remove()
        let second = max.remove()

        if(first !== second){
            max.insert(first - second)
        }
    }
    return max.heap.length === 0 ? 0 : max.remove()
};