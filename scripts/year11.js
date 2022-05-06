function year11(items) {
    let counter = 0
    const newItems = []
    while(counter < items.length) {
        const sub1 = items[counter+1] - items[counter]
        const sub2 = items[counter] - items[counter+1]
        counter = counter+2
        newItems.push(sub1)
        newItems.push(sub2)
    }
    return newItems
}

const inbox = [4, 9, 8, 2, -2, -2, 1, -3]

console.log(year11(inbox))
