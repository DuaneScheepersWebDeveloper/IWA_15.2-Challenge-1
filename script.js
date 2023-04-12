//⁡⁣⁢⁣In the following exercise, you will need to extract the numbers from all ⁡
//⁡⁣⁢⁣three arrays in lists inside the data object and combine all values into ⁡
//⁡⁣⁢⁣a new single array called result.⁡

//⁡⁣⁢⁣The extractBiggest function will be run 15 times and will grab a ⁡
//⁡⁣⁢⁣single number and add it to the result array (as per the bottom section⁡
//⁡⁣⁢⁣of the code that you are not allowed to edit).⁡

//⁡⁣⁢⁣You will need to ensure that the extractBiggest function looks at the last ⁡
//⁡⁣⁢⁣item in each of the three lists and selects the biggest one. It should remove ⁡
//⁡⁣⁢⁣the value from the current array under lists and move it to the results array.⁡
//⁡⁣⁢⁣Running the code below should result in the following array being logged to the⁡
//⁡⁣⁢⁣console:⁡

//⁡⁣⁣⁢[10, 12, 14, 5, 7, 13, 11, 15, 4, 8, 6, 2, 1, 3, 9]⁡


//⁡⁣⁢⁣While the code runs, it logs the incorrect arrays, as seen below:⁡
//⁡⁣⁣⁢[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]⁡
//⁡⁣⁢⁣Please update the code between the two comments below so that the ⁡
//⁡⁣⁢⁣correct array value is logged.⁡

//================================================================
const data= {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	],
    results: []
}

//================================================
//maxIndex is equal to -1 because the value is outside the possible
//range of numbers

//used -Infinity; because it guarantees  that that value will be greater than max
//initially

const extractBiggest=()=> {
    let max = -Infinity;
    let maxIndex = -1;
  
    for (let i = 0; i < data.lists.length; i++) {
      const subArray = data.lists[i][1];//the array within data.lists
      const lastElement = subArray[subArray.length - 1];//looks for the last element
  
      if (lastElement > max) {
        max = lastElement;
        maxIndex = i;
      }
    }
  
    if (maxIndex !== -1) {
      const selectedArray = data.lists[maxIndex][1];
      const selectedElement = selectedArray.pop();
      data.results.push(selectedElement);
    }
  }
//================================================

// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())

// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())

// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())

for (let i = 0; i < 15; i++) {
    extractBiggest();
  }
  
console.log(data.results);