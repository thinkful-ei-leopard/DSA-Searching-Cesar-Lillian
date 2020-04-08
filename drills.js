//drill 1

const startArr = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

function binarySearch(arr, val, start=0, end=arr.length) {
  if(start > end){
    return 'nothing found matching val';
  }

  const index = Math.floor((start + end) / 2);
  const item = arr[index];

  console.log(item);
  if(item === val){
    return item;
  } else if (item < val){
    return binarySearch(arr, val, index + 1, end);
  } else if(item > val){
    return binarySearch(arr, val, start, index-1);
  }
}

// console.log(binarySearch(startArr, 8));
// console.log(binarySearch(startArr, 16));