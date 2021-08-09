var timerTrack = 0;
var message = 'THE ONLY CLOCK YOU NEED';
var length = message.length;
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
        str += '<span class="block" id="'+'r' + x.toString(10) + 'c' + y.toString(10) + '"' + '>' + wordMatrix[x][y]+'</span>';        
    }
    str += '<br>';
}
str += '</h1></div>'
var div = document.getElementById('matrix');
div.innerHTML = str;


setInterval(update , 200);

function clear() {
    for(var x = 0;x < 8; x++){
        for(var y = 0;y < 32; y++){
            var selected = document.getElementById('r' + x.toString() + 'c' + y.toString());
            selected.style.color = "rgb(40, 40, 40)";
        }
    }
}
function update(){
    clear();
    if(timerTrack == (32 + length)){
        timerTrack = 0;
    }
    if(timerTrack == 32) timerTrack = 0;
    console.log(timerTrack);
    for(var row = 0 ; row < 8 ; row++){
        var selected = document.getElementById('r' + row.toString() +'c' + timerTrack.toString());
        selected.style.color = "rgb(100, 100, 100)"; 
    }
    

    timerTrack++;
}
function addToFrame(row,col,length) {
    for(var x = col ; x < (col + length);x++)
    {
        var selected = document.getElementById('r' + row.toString() + 'c' + x.toString());
        selected.style.color = "rgb(80, 80, 255)";
    }
}




