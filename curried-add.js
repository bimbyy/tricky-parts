function curriedAdd() {
    let sum = 0;

    function adder(nextNumber) {
        if (nextNumber === undefined) return sum;
        sum += nextNumber;
        return adder;
    }

    return adder;
}
module.exports = { curriedAdd };
