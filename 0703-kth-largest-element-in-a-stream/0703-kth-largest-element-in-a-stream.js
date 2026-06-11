class MyMinHeap {
    constructor() {
        this.heap = [];
    }

    getParent(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeft(i) {
        return 2 * i + 1;
    }

    getRight(i) {
        return 2 * i + 2;
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parent = this.getParent(index);

            if (this.heap[parent] <= this.heap[index]) break;

            [this.heap[parent], this.heap[index]] = [
                this.heap[index],
                this.heap[parent],
            ];

            index = parent;
        }
    }

    remove() {
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);

        return min;
    }

    heapifyDown(index) {
        while (true) {
            let smallest = index;
            let left = this.getLeft(index);
            let right = this.getRight(index);

            if (
                left < this.heap.length &&
                this.heap[left] < this.heap[smallest]
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right] < this.heap[smallest]
            ) {
                smallest = right;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [
                this.heap[smallest],
                this.heap[index],
            ];

            index = smallest;
        }
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.k = k;
    this.minHeap = new MyMinHeap();

    for (let num of nums) {
        this.minHeap.insert(num);

        if (this.minHeap.size() > this.k) {
            this.minHeap.remove();
        }
    }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.minHeap.insert(val);

    if (this.minHeap.size() > this.k) {
        this.minHeap.remove();
    }

    return this.minHeap.peek();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */