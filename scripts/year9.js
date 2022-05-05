function year9(items) {
    const newItems = items.filter((item) => item == 0)
    return newItems
}

const inbox = [1, 0, -4, 'B', 0, 0, 3]

console.log(year9(inbox))
