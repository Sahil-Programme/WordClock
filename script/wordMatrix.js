var wordMatrix = ["HHAPPYLBIRTHDAYT",
    "CFJKXCHARLYUIWZT",
    "ITVISYTWENTYHALF",
    "ONELEVENINETEENC",
    "TWELVESIXTEENTEN",
    "THIRTEENEIGHTEEN",
    "FOURTEENTWOVFIVE",
    "QUARTERSEVENTEEN",
    "THREEHPASTOUFIVE",
    "FOURTWELVEIGHTEN",
    "NINEFIVESIXTHREE",
    "TWONELEVENSEVENT",
    "OCLOCKFINATHESTX",
    "EVENINGAFTERNOON",
    "MORNINGNIGHTIAND",
    "COOLCOLDWARMHOTV",
];

var str = '<div><p>';

for (var x = 0; x < 16; x++) {
    for (var y = 0; y < 16; y++) {
        str += '<div class="size"><span class="block' + ' r' + x.toString(10) + 'c' + y.toString(10) + '"' + '>' + wordMatrix[x][y] + '</span></div>';
    }
    str += '<br>';
}
str += '</p></div>'

var div = document.getElementById('matrix');
div.innerHTML = str;

addToFrame(2, 0, 2);
addToFrame(2, 3, 2);
addToFrame(4, 8, 5);
addToFrame(10, 7, 6);


function addToFrame(row, col, length) {
    var styles = '';
    for (var x = col; x < (col + length); x++) {
        styles += `.r` + row.toString(10) + `c` + x.toString(10) + ` {
        color: rgb(80, 80, 255);
      }`
    }
    var styleSheet = document.createElement("style")
    styleSheet.innerText += styles
    document.head.appendChild(styleSheet)
}