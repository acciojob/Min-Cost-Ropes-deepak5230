function mincost(arr)
{ 
	  const heapify = () => {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      heapifyDown(i);
    }
  };

  // Helper function to maintain the heap property while pushing down a node
  const heapifyDown = (index) => {
    let smallest = index;
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    
    if (left < arr.length && arr[left] < arr[smallest]) {
      smallest = left;
    }
    
    if (right < arr.length && arr[right] < arr[smallest]) {
      smallest = right;
    }
    
    if (smallest !== index) {
      [arr[index], arr[smallest]] = [arr[smallest], arr[index]];
      heapifyDown(smallest);
    }
  };

  // Initialize the total cost
  let totalCost = 0;

  // Build the min-heap
  heapify();

  // Continue until there is only one rope left
  while (arr.length > 1) {
    // Remove the two shortest ropes from the heap
    const rope1 = arr.shift();
    const rope2 = arr.shift();

    // Connect the two ropes and add their lengths to the total cost
    const connectedRope = rope1 + rope2;
    totalCost += connectedRope;

    // Add the length of the connected rope back to the heap
    arr.push(connectedRope);
    heapify();
  }

  return totalCost;
}


	
//write your code here
// return the min cost
  
}

module.exports=mincost;
