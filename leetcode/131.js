/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = [];

    const isPalindrome = (str) => {
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    };

    const dfs = (start, path) => {
        if (start === s.length) {
            result.push([...path]);
            return;
        }

        for (let end = start; end < s.length; end++) {
            const substring = s.substring(start, end + 1);
            if (isPalindrome(substring)) {
                path.push(substring);
                dfs(end + 1, path);
                path.pop();
            }
        }
    };

    dfs(0, []);
    return result;
};
