// Tuple: fixed length array, with strict order of types
const color: [number, number, number] = [0, 0, 0]

const stuffs: [number, string, boolean] = [1, '2', false]

// A TUPLE Type
type HttpResponse = [number, string]

const goodRes: HttpResponse = [200, 'OK']
// push or pop doesnt care
goodRes.pop()


// ENUM, a set of named constant that can be reused easily

enum OrderStatus{
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

enum ArrowKeys{
    UP,
    DOWN,
    LEFT,
    RIGHT
}

enum Constant{
    PI = 3.14
}

console.log(2 * Constant.PI === 2)

const orderStatus = OrderStatus.DELIVERED

function isDelivered(status: OrderStatus){
    return status === OrderStatus.DELIVERED
}


type Point = {
    x: number,
    y: number
}

function isSamePoint(p1: Point, p2: Point){
    return p1.x === p2.x && p1.y === p2.y
}

// inline declaration must be exactly same as Point
const point2 = {x: 1, y: 2, z: 2}
isSamePoint({x: 1, y: 2}, point2)