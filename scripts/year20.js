function year20(items) {
    let counter = 0
    const newItems = []
    while(counter < items.length) {
        const mult = items[counter] * items[counter+1]
        counter = counter+2
        newItems.push(mult)
    }
    return newItems
}

const inbox = [3, 4, 0, 6]

console.log(year20(inbox))
