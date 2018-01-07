
function sudoku(grid) {

    //convert array rows to columns
    var coltorow = [];
    for (var a = 0; a < grid.length && grid.length === 9; a++) {
        coltorow[a] = [];
        for (var b = 0; b < grid[a].length && grid[a].length === 9; b++) {
            coltorow[a][b] = grid[b][a]
        }

    }

    console.log(coltorow)

    for (var k = 0; k < grid.length && grid.length === 9; k++) {
        for (var i = 0; i < grid[k].length && grid[k].length === 9; i++) {
            if (grid[k][i] > 0 && grid[k][i] < 10) {
                for (var j = i + 1; j < grid[k].length && grid[k].length === 9; j++) {


                    if (grid[k][i] === grid[k][j] && coltorow[k][a] === coltorow[k][b]) {

                        return false;
                    }
                }

                
            }
            else {
                return false;
            }
        }
        return true;
        
    }

}