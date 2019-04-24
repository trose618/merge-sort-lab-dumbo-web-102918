
function findMinAndRemoveSorted(array) {
    let min = array[0]
    let minIndex = 0;

    for (let i = 0; i < array.length; i++) {
        let current = array[i]
        if (current < min) {
            min = current
            minIndex = i
        }
    }

    array.splice(minIndex, 1)

    return min
}

function merge(array1, array2) {
    // if (!array1) {
    //     console.log("array1 is undefined");
    // }

    // if (!array2) {
    //     console.log("array2 is undefined")
    // }
    // console.log("merging: ", array1.join(), array2.join())
    let combined = []
    let min;
    console.log("length of 1", array1.length);
    console.log("length of 2", array2.length);
    while (array1.length != 0 && array2.length != 0) {
        let min = findMin(array1, array2)
        combined.push(min)

    }

    return combined.concat(array1).concat(array2)

}

function mergeSort(array) {
    // console.log("intitial: ", array.join());


    // console.log("split:", firstHalf, "-", secondHalf)

    if (array.length < 2) {
        // console.log("base array: ", array.join());
        return array
    } else {

        // console.log("array length shouldn't be below 2: ", array.length);
        let midpoint = array.length / 2
        // console.log("midpoint", midpoint);
        let firstHalf = array.slice(0, midpoint)
        // console.log("firsHalf", firstHalf.join());
        let secondHalf = array.slice(midpoint, array.length)
        // console.log("secondHalf", secondHalf.join())
        // console.log('firstHalf: ', mergeSort(firstHalf).join(), "- secondHalf: ", mergeSort(secondHalf).join());
        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }

}

// console.log(mergeSort([5, 3, 4, 2, 1]).join())

function findMin(first, second) {
    let minFirst = first[0]
    let minSecond = second[0]

    if (minFirst < minSecond) {
        return first.shift()
    } else {
        return second.shift()
    }
}