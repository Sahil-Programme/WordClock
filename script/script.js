var wordMatrix = 
["HHAPPYLBIRTHDAYT"
,"FJKXCHARLYUIWZTV"
,"ITVISYTWENTYHALF"
,"ONELEVENINETEENC"
,"TWELVESIXTEENTEN"
,"THIRTEENEIGHTEEN"
,"FOURTEENTWOVFIVE"
,"QUARTERSEVENTEEN"
,"THREEHPASTOUFIVE"
,"FOURTWELVEIGHTEN"
,"NINEFIVESIXTHREE"
,"TWONELEVENSEVENT"
,"OCLOCKFINATHESTX"
,"EVENINGAFTERNOON"
,"MORNINGNIGHTIAND"
,"COOLCOLDWARMHOTV"];

//var element = document.createElement("div");
//    element.appendChild(document.createElement() .createTextNode('The man who mistook his wife for a hat'));
//    document.getElementById('matrix').appendChild(element);


//<h1><span>WORD</span><span>WORD</span></h1>
var str = "<div><h1 class=\"inmatrixComponent\">";
for(var x = 0;x < 16; x++){
    for(var y = 0;y < 16; y++){
        str += '<span class="block'+' r' + x.toString(10) + 'c' + y.toString(10) + '"' + '>' + wordMatrix[x][y]+'</span>';        
    }
    str += '<br>';
}
str += '</h1></div>'

var div = document.getElementById('matrix');
div.innerHTML += str;

    

//var elem = document.getElementsByClassName('matrix');
//elem.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.3;z-index:100';
//document.body.appendChild(elem);
