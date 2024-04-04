// Tuple: fixed length array, with strict order of types
var color = [0, 0, 0];
var stuffs = [1, '2', false];
var goodRes = [200, 'OK'];
// push or pop doesnt care
goodRes.pop();
// ENUM, a set of named constant that can be reused easily
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys[ArrowKeys["UP"] = 0] = "UP";
    ArrowKeys[ArrowKeys["DOWN"] = 1] = "DOWN";
    ArrowKeys[ArrowKeys["LEFT"] = 2] = "LEFT";
    ArrowKeys[ArrowKeys["RIGHT"] = 3] = "RIGHT";
})(ArrowKeys || (ArrowKeys = {}));
var Constant;
(function (Constant) {
    Constant[Constant["PI"] = 3.14] = "PI";
})(Constant || (Constant = {}));
console.log(2 * Constant.PI === 2);
var orderStatus = OrderStatus.DELIVERED;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
