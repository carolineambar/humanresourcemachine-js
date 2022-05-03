function year7(items) {
    const newItems = items.filter((item) => item !== 0)
    return newItems
}

const inbox = [6, 0, 1, 'B', 0, 0, 0]

console.log(year7(inbox))
