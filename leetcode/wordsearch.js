var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    const dfs = (i, j, index) => {
        if (index === word.length) {
            return true;
        }

        if (i < 0 || j < 0 || i >= rows || j >= cols || board[i][j] !== word[index]) {
            return false;
        }

        const temp = board[i][j];
        board[i][j] = '*';

        const found = dfs(i + 1, j, index + 1) || dfs(i - 1, j, index + 1) ||
                      dfs(i, j + 1, index + 1) || dfs(i, j - 1, index + 1);

        board[i][j] = temp;

        return found;
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
};
