function mincost(arr){
	    total_cost = 0

    while len(arr) > 1:
        # Sort the array
        arr.sort()

        # Combine the two smallest elements
        first = arr.pop(0)
        second = arr.pop(0)

        cost = first + second
        total_cost += cost

        # Add the combined rope back to the list
        arr.append(cost)

    return total_cost

}


module.exports=mincost;
