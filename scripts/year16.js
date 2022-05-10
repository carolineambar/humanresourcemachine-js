function year16(items) {
    const newItems = items.map((item) => {
        if (item < 0){
            return item * -1
        }
        else {
            return item
        }
    })
    return newItems
}

const inbox = [6, -5, 7, 0, -3, 8, 2]

console.log(year16(inbox))
