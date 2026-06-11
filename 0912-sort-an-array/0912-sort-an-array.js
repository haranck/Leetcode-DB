/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let arr = nums
    let n = arr.length
    function heapify(arr,n,i){
        let largest = i
        let left  = 2*i+1
        let right  = 2*i+2
        if(left<n&&arr[largest]<arr[left]){
            largest = left
        }
        if(right<n&&arr[largest]<arr[right]){
            largest  = right
        }
        if(largest !== i){
            [arr[i],arr[largest]] = [arr[largest],arr[i]]
            heapify(arr,n,largest)
        }
    }
    function heapsort(arr){
        for(let i = Math.floor(n/2)-1;i>=0;i--){
            heapify(arr,n,i)
        }
        for(let j = n-1;j>0;j--){
            [arr[0],arr[j]] = [arr[j],arr[0]]
            heapify(arr,j,0)
        }
        return arr
    }
    return heapsort(arr)
};