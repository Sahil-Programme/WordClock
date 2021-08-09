var wordMatrix = 
["HHAPPYLBIRTHDAYTFJKXCHARLYUIWZTV"
,"ITVISYTWENTYHALFONELEVENINETEENC"
,"TWELVESIXTEENTENTHIRTEENEIGHTEEN"
,"FOURTEENTWOVFIVEQUARTERSEVENTEEN"
,"THREEHPASTOUFIVEFOURTWELVEIGHTEN"
,"NINEFIVESIXTHREETWONELEVENSEVENT"
,"OCLOCKFINATHESTXEVENINGAFTERNOON"
,"MORNINGNIGHTIANDCOOLCOLDWARMHOTV"];

var str = "<div><h1>";

for(var x = 0;x < 8; x++){
    for(var y = 0;y < 32; y++){
        str += '<span class="block'+' r' + x.toString(10) + 'c' + y.toString(10) + '"' + '>' + wordMatrix[x][y]+'</span>';        
    }
    str += '<br>';
}
str += '</h1></div>'

var div = document.getElementById('matrix');
div.innerHTML = str;

addToFrame(1,0,2);
addToFrame(1,3,2);
addToFrame(2,16,8);
addToFrame(4,6,4);
addToFrame(5,20,6);


function addToFrame(row,col,length) {
    var styles = '';
    for(var x = col ; x < (col + length);x++)
    {
        styles +=  `.r`+row.toString(10)+`c` + x.toString(10) + ` {
        color: rgb(80, 80, 255);
      }`
    }
    var styleSheet = document.createElement("style")
    styleSheet.innerText += styles
    document.head.appendChild(styleSheet)
}




