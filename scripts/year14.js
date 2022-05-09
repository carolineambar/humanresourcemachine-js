function year14(items) {
    let counter = 0
    const newItems = []
    while(counter < items.length) {
        if(items[counter] >= items[counter + 1]){
            newItems.push(items[counter])
        }
        else {
            newItems.push(items[counter + 1])
        }
        counter = counter+2
    }
    
    return newItems
}

const inbox = [6, 1, -3, -8, 3, 3, 7, 6]

console.log(year14(inbox))
