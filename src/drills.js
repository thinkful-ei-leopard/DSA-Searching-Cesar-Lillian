//drill 1

// const startArr = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

// function binarySearch(arr, val, start=0, end=arr.length) {
//   if(start > end){
//     return 'nothing found matching val';
//   }

//   const index = Math.floor((start + end) / 2);
//   const item = arr[index];

//   console.log(item);
//   if(item === val){
//     return item;
//   } else if (item < val){
//     return binarySearch(arr, val, index + 1, end);
//   } else if(item > val){
//     return binarySearch(arr, val, start, index-1);
//   }
// }

// console.log(binarySearch(startArr, 8));
// console.log(binarySearch(startArr, 16));


//drill 3

//[000,001,003 ... 999]
//['book1','book2'...]

//[201, 'book']

const sections = [000, 010, 100, 102, 200, 201, 250, 300, 400, 500, 600, 700, 800, 999]

const shelf = ['book1', 'book2', 'book', 'book3', 'book5']

function findSection(sections, dest, book, shelf, start=0, end=sections.length){
  if(start > end){
    return 'no section exists with that DD';
  }

  const index = Math.floor((start + end) / 2);
  const dewey = sections[index];

  if(dewey === dest){
    return findBook(shelf, book);
  } else if (dewey < dest){
    return findSection(sections, dest, book, shelf, index + 1, end);
  } else if(dewey > dest){
    return findSection(sections, dest, book, shelf, start, index-1);
  }
}

//don't know if books will be sorted, so search the section separately
function findBook(shelf, book){
  for (let i = 0; i < shelf.length; i++) {
    if (shelf[i] == book) {
        return shelf[i];
    }
}
return -1;
}


console.log(findSection(sections, 201, 'book', shelf));