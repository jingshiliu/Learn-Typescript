function* uniqueNumGenerator(): Generator<number>{
    let id = 1000
    while (true) yield id++
}

const idGenerator = uniqueNumGenerator()
export function generateUniqueId(): number{
    return idGenerator.next().value
}