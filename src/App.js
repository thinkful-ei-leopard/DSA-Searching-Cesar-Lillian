import React, { Component } from 'react';

class App extends Component {
  state = {
    linearResult:'',
    binaryResult:'',
  }
  
  indexOf(e) {
    e.preventDefault()
    console.log('indexOf');
    const array = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2 ,14, 33, 45, 72, 56, 44, 21, 88, 27, 68 ,15 ,62, 93, 98, 73, 28, 16, 46 ,87 ,28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9 ,70 ,81 ,27 ,97, 82, 6, 88, 3 ,7, 4,6, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17 ,69, 90, 1 ,6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6 ,39 ,42 ,51 ,54 ,84 ,34 ,53, 78, 40, 14, 5];
    const value = document.getElementById('linear').value;
    console.log(value);
    let linearcount = 0;
    
    for (let i = 0; i < array.length; i++) {
      console.log('inside')
      linearcount += 1;
        if (array[i] == value) {
          console.log(linearcount);
          this.setState({linearResult:linearcount});
          return linearcount;
        }
        else if(linearcount === array.length){
           this.setState({linearResult:'Nothing Found'});
        }
      }
      
  };
    handleBinarySubmit(e){
      e.preventDefault()
      let array = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];
      const sortedArray = array.sort((a,b) => a-b);
      const value = e.target.binary.value;
      console.log(value)

      this.binarySearch(sortedArray, value)
    }

    // input 10000, we end with a start of 100 end of 100, our val= 100,  
    binarySearch(arr, val, start=0, end=arr.length, count=0){
      console.log(start)
      console.log(end)
      console.log(val)
      
      const index = Math.floor((start + end) / 2);
      const item = arr[index];
      count += 1;
      
      if(item == val){
        this.setState({binaryResult:count});
        return count;
      } else if (item < val){
        return this.binarySearch(arr, val, index + 1, end, count);
      } else if(item > val){
        return this.binarySearch(arr, val, start, index-1,count );
      }
            
      
      if(start === end  ){
        console.log('we didnt find it')
        this.setState({binaryResult:count + '  Your number was not found'});
        return 'Nothing Found';
      } 
    }

  render(){
  return (
    <main className='App'>
      
        <form onSubmit={e =>this.indexOf(e)}> 
        <label htmlFor='linear'>Submit Linear</label>
        <input type='text' name='linear' id ='linear'></input>
        <button type='submit'> Submit Linear </button>
        </form>
        <p>Return:{this.state.linearResult}</p>

        <form onSubmit={e =>this.handleBinarySubmit(e)}> 
        <label htmlFor='binary'>Submit Binary</label>
        <input type='text' name='binary' id ='binary'></input>
        <button type='submit'> Submit Binary </button>
        </form>

        <p>Steps Took:{this.state.binaryResult}</p>
    </main>
      
  
  );
    }
}

export default App;
