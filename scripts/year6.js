function year6(items) {
    let counter = 0
    const newItems = []
    while(counter < items.length) {
        const soma = items[counter] + items[counter+1]
        counter = counter+2
        newItems.push(soma)
    }
    return newItems
}

const inbox = [5, 8, 0, -4, 0, 3]

console.log(year6(inbox))
