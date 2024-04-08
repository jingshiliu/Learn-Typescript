function add(...nums: number[]): number{
    return nums.reduce((x, y) => x + y)
}

function sample<T>(arr: T[]): T{
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

export {
    add,
    sample
}