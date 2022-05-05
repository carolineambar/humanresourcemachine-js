function year10(items) {
    const newItems = items.map((item) => {
        return item * 8
    })
    return newItems
}

const inbox = [5, -7, 3, 0]

console.log(year10(inbox))
