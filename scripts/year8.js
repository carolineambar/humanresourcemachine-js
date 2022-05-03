function year8(items) {
    const newItems = items.map((item) => {
        return item * 3
    })
    return newItems
}

const inbox = [1, -5, 7, 0]

console.log(year8(inbox))
