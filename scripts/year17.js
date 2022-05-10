function year17(items) {
    let counter = 0
    const newItems = []
    while(counter < items.length) {
        if(items[counter] >= 0 && items[counter + 1] >= 0){
            newItems.push(0)
        }
        else if (items[counter] < 0 && items[counter + 1] < 0){
            newItems.push(0)
        }
        else {
            newItems.push(1)
        }
        counter = counter+2
    }
    return newItems
}

const inbox = [3, 3, -9, 1, -8, 7, -4, -9]

console.log(year17(inbox))
