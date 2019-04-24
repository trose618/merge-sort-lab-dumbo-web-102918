
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

    let combined = []

    while (array1.length != 0 && array2.length != 0) {
        let min;
        array1[0] < array2[0] ? min = array1.shift() : min = array2.shift()

        combined.push(min)

    }

    return combined.concat(array1.concat(array2))

}

function mergeSort(array) {

    let sorted = []

    while (array.length != 0) {
        let min = findMinAndRemoveSorted(array)
        sorted.push(min)
    }
    return sorted
}