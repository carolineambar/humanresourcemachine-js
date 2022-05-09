function year13(items) {
    let counter = 0
    const newItems = []
    while(counter < items.length) {
        if(items[counter] === items[counter + 1]){
            newItems.push(items[counter])
        }
        counter = counter+2
    }
    
    return newItems
}

const inbox = [9, 6, 4, 4, 5, 1, 9, 9]

console.log(year13(inbox))
