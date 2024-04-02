const usernames: [] = []
// cannot do this bc usernames is typed empty array
usernames.push('a')

const usernames1: any[] = []
const usernames2: Array<any> = []

const users: string[] = []
users.push("Tom")

const users1: Array<string> = []


type Point = {
    x: number,
    y: number
}

const points: Array<Point> = []
const coords: Point[] = []


// Multi-dimensional Arrays
const board: Array<Array<string>> = [["X", "O", "X"], ["X", "O", "X"], ["X", "O", "X"]]
const board1: string[][] = [["X", "O", "X"], ["X", "O", "X"], ["X", "O", "X"]]