function add(...nums) {
    return nums.reduce((x, y) => x + y);
}
function sample(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
export { add, sample };
