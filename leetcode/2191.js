function sortJumbled(mapping, nums) {
    function getJumbledValue(num) {
        let numStr = num.toString();
        let jumbledStr = '';
        for (let char of numStr) {
            jumbledStr += mapping[parseInt(char)];
        }
        return parseInt(jumbledStr);
    }

    nums.sort((a, b) => {
        return getJumbledValue(a) - getJumbledValue(b);
    });

    return nums;
}
