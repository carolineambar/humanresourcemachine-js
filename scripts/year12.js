function year12(items) {
    const newItems = items.map((item) => item * 40)
    return newItems
}

const inbox = [2, -5, 7, 0]

console.log(year12(inbox))
