const wordMatrix = ["HHAPPYLBIRTHDAYT",
    "FJKXCHARLYUIWZTV",
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
    "COOLCOLDWARMHOTV"
];

const wordPosition_words = new Map();
const wordPosition_hours = new Map();
const wordPosition_minutes = new Map();

wordPosition_words.set('oclock', [12, 0, 6]);
wordPosition_words.set('at', [12, 9, 2]);
wordPosition_words.set('night', [14, 7, 5]);
wordPosition_words.set('in', [12, 7, 2]);
wordPosition_words.set('the', [12, 10, 3]);
wordPosition_words.set('morning', [14, 0, 7]);
wordPosition_words.set('afternoon', [13, 7, 9]);
wordPosition_words.set('evening', [13, 0, 7]);
wordPosition_words.set('it', [2, 0, 2]);
wordPosition_words.set('is', [2, 3, 2]);
wordPosition_words.set('past', [8, 6, 4]);
wordPosition_words.set('to', [8, 9, 2]);

wordPosition_hours.set(1, [11, 2, 3]);
wordPosition_hours.set(2, [11, 0, 3]);
wordPosition_hours.set(3, [10, 11, 5]);
wordPosition_hours.set(4, [9, 0, 4]);
wordPosition_hours.set(5, [8, 12, 4]);
wordPosition_hours.set(6, [10, 8, 3]);
wordPosition_hours.set(7, [11, 10, 5]);
wordPosition_hours.set(8, [9, 9, 5]);
wordPosition_hours.set(9, [10, 0, 4]);
wordPosition_hours.set(10, [9, 13, 3]);
wordPosition_hours.set(11, [11, 4, 6]);
wordPosition_hours.set(12, [9, 4, 6]);

wordPosition_minutes.set(1, [3, 0, 3]);
wordPosition_minutes.set(2, [6, 8, 3]);
wordPosition_minutes.set(3, [8, 0, 5]);
wordPosition_minutes.set(4, [6, 0, 4]);
wordPosition_minutes.set(5, [6, 12, 4]);
wordPosition_minutes.set(6, [4, 6, 3]);
wordPosition_minutes.set(7, [7, 7, 5]);
wordPosition_minutes.set(8, [5, 8, 5]);
wordPosition_minutes.set(9, [3, 7, 4]);
wordPosition_minutes.set(10, [4, 13, 3]);
wordPosition_minutes.set(11, [3, 2, 6]);
wordPosition_minutes.set(12, [4, 0, 6]);
wordPosition_minutes.set(13, [5, 0, 8]);
wordPosition_minutes.set(14, [6, 0, 8]);
wordPosition_minutes.set(15, [7, 0, 7]);
wordPosition_minutes.set(16, [4, 6, 7]);
wordPosition_minutes.set(17, [7, 7, 9]);
wordPosition_minutes.set(18, [5, 8, 8]);
wordPosition_minutes.set(19, [3, 7, 8]);
wordPosition_minutes.set(20, [2, 6, 6]);
wordPosition_minutes.set(30, [2, 12, 4]);

window.setInterval(assignFunction, 2000);

const radios = document.forms["about_form"].elements["about_selector"];

var mode = 3;
var refreshdelay = 0;
const reminderMode = 0;
const rgbMode = 1;
const soundMode = 2;
const clockMode = 3;

function assignFunction() {
    if (mode === reminderMode) reminderModeFunction();
    else if (mode === rgbMode) rgbModeFunction();
    else if (mode === soundMode) soundModeFunction();
    else if (mode === clockMode) clockModeFunction();
}



/*for (var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function() {
        console.log(this.value);
        if (this.value === 'rem') {
            refreshdelay = 100;
            mode = reminderMode;
        } else if (this.value === 'color') {
            refreshdelay = 500;
            mode = rgbMode;
        } else if (this.value === 'sound') {
            refreshdelay = 100;
            mode = soundMode;
        } else if (this.value === 'clock') {
            refreshdelay = 1000;
            mode = clockMode;
        }
    }
}*/

var hour = 0;
var min = 0;

function initMatrix() {
    var str = '<div><p>';

    for (var x = 0; x < 16; x++) {
        for (var y = 0; y < 16; y++) {
            let s = '<div class="size"><span class="block" id="' + 'r' + x.toString(10) + 'c' + y.toString(10) + '"' + '>' + wordMatrix[x][y] + '</span></div>';
            str += s;
        }
        str += '<br>';
    }
    str += '</p></div>'

    var div = document.getElementById('matrix');
    div.innerHTML = str;
}

function clockModeFunction() {
    updateTime();
}
var x = false;

function rgbModeFunction() {
    if (x === false) {
        x = true;
        console.log('called');
        for (var i = 0; i < 16; i++) {
            for (var j = 0; j < 16; j++) {
                var elem = document.getElementById('r' + i + 'c' + j);
                elem.style.transition = 'background-color 0.5s ease-out 3s';
                elem.style.transitionProperty = 'background-color';

                elem.onmouseover = function() {
                    this.style.backgroundColor = "blue";
                }
                elem.onmouseleave = function() {
                    this.style.backgroundColor = "transparent";
                }
            }
        }
    }

}

function reminderModeFunction() {}

function soundModeFunction() {}

function updateTime() {

    /*/ comment this section after debugging
    min++;
    if (min === 60) {
        min = 0;
        hour++;
        if (hour === 24) {
            hour = 0;
        }
    }
    //--------------------------------------*/

    let oldH = hour;
    let oldM = min;
    let d = new Date;
    // uncomment the following after debugging
    hour = d.getHours();
    min = d.getMinutes();
    //---------------------------------------
    updateMatrix();
    if (oldH !== hour || oldM !== min) {
        console.log('h:' + hour + ' : m:' + min);
        //updateMatrix();
    }
}

function clearMatrix() {
    for (var x = 0; x < 16; x++) {
        for (var y = 0; y < 16; y++) {
            let element = document.getElementById(`r` + x.toString(10) + `c` + y.toString(10));
            element.style.color = 'rgb(40, 40, 40)';
        }
    }
}

function updateMatrix() {
    clearMatrix();
    if (!((hour === 0 && min === 0) || (hour === 12 && min === 0))) {
        if (min === 0) {
            //addToFrame(wordPosition_words['oclock']);
        }
    }

    if ((hour > 21 && hour <= 23) || (hour >= 0 && hour < 4)) {
        addToFrame(wordPosition_words.get('at'));
        addToFrame(wordPosition_words.get('night'));
    } else if (hour >= 4 && hour < 12) {
        if (!((hour == 0 && min == 0) || (hour == 12 && min == 0))) {
            addToFrame(wordPosition_words.get('in'));
            addToFrame(wordPosition_words.get('the'));
            addToFrame(wordPosition_words.get('morning'));
        }
    } else if (hour >= 12 && hour < 16) {
        addToFrame(wordPosition_words.get('in'));
        addToFrame(wordPosition_words.get('the'));
        addToFrame(wordPosition_words.get('afternoon'));
    } else if (hour >= 16 && hour <= 21) {
        if (!((hour == 0 && min == 0) || (hour == 12 && min == 0))) {
            addToFrame(wordPosition_words.get('in'));
            addToFrame(wordPosition_words.get('the'));
            addToFrame(wordPosition_words.get('evening'));
        }
    }


    addToFrame(wordPosition_words.get('it'));
    addToFrame(wordPosition_words.get('is'));

    timeSwitch();
}

function timeSwitch() {

    let m = min;
    let h = hour;
    if (h > 12) {
        h = h - 12;
    }
    if (m <= 30 && m != 0)
        addToFrame(wordPosition_words.get('past'));
    else if (m > 30) addToFrame(wordPosition_words.get('to'));

    if (h == 0 && m == 0)
        addToFrame(wordPosition_hours.get(12));
    else if (h == 0 && m <= 30)
        addToFrame(wordPosition_hours.get(12));
    else if (h == 0 && m > 30)
        addToFrame(wordPosition_hours.get(1));
    else if (h == 1 && m <= 30)
        addToFrame(wordPosition_hours.get(1));
    else if (h == 1 && m > 30)
        addToFrame(wordPosition_hours.get(2));
    else if (h == 2 && m <= 30)
        addToFrame(wordPosition_hours.get(2));
    else if (h == 2 && m > 30)
        addToFrame(wordPosition_hours.get(3));
    else if (h == 3 && m <= 30)
        addToFrame(wordPosition_hours.get(3));
    else if (h == 3 && m > 30)
        addToFrame(wordPosition_hours.get(4));
    else if (h == 4 && m <= 30)
        addToFrame(wordPosition_hours.get(4));
    else if (h == 4 && m > 30)
        addToFrame(wordPosition_hours.get(5));
    else if (h == 5 && m <= 30)
        addToFrame(wordPosition_hours.get(5));
    else if (h == 5 && m > 30)
        addToFrame(wordPosition_hours.get(6));
    else if (h == 6 && m <= 30)
        addToFrame(wordPosition_hours.get(6));
    else if (h == 6 && m > 30)
        addToFrame(wordPosition_hours.get(7));
    else if (h == 7 && m <= 30)
        addToFrame(wordPosition_hours.get(7));
    else if (h == 7 && m > 30)
        addToFrame(wordPosition_hours.get(8));
    else if (h == 8 && m <= 30)
        addToFrame(wordPosition_hours.get(8));
    else if (h == 8 && m > 30)
        addToFrame(wordPosition_hours.get(9));
    else if (h == 9 && m <= 30)
        addToFrame(wordPosition_hours.get(9));
    else if (h == 9 && m > 30)
        addToFrame(wordPosition_hours.get(10));
    else if (h == 10 && m <= 30)
        addToFrame(wordPosition_hours.get(10));
    else if (h == 10 && m > 30)
        addToFrame(wordPosition_hours.get(11));
    else if (h == 11 && m <= 30)
        addToFrame(wordPosition_hours.get(11));
    else if (h == 11 && m > 30)
        addToFrame(wordPosition_hours.get(12));
    else if (h == 12 && m <= 30)
        addToFrame(wordPosition_hours.get(12));
    else if (h == 12 && m > 30)
        addToFrame(wordPosition_hours.get(1));

    if (m > 30) m = 60 - m;

    if (m == 1)
        addToFrame(wordPosition_minutes.get(1));
    else if (m == 2)
        addToFrame(wordPosition_minutes.get(2));
    else if (m == 3)
        addToFrame(wordPosition_minutes.get(3));
    else if (m == 4)
        addToFrame(wordPosition_minutes.get(4));
    else if (m == 5)
        addToFrame(wordPosition_minutes.get(5));
    else if (m == 6)
        addToFrame(wordPosition_minutes.get(6));
    else if (m == 7)
        addToFrame(wordPosition_minutes.get(7));
    else if (m == 8)
        addToFrame(wordPosition_minutes.get(8));
    else if (m == 9)
        addToFrame(wordPosition_minutes.get(9));
    else if (m == 10)
        addToFrame(wordPosition_minutes.get(10));
    else if (m == 11)
        addToFrame(wordPosition_minutes.get(11));
    else if (m == 12)
        addToFrame(wordPosition_minutes.get(12));
    else if (m == 13)
        addToFrame(wordPosition_minutes.get(13));
    else if (m == 14)
        addToFrame(wordPosition_minutes.get(14));
    else if (m == 15)
        addToFrame(wordPosition_minutes.get(15));
    else if (m == 16)
        addToFrame(wordPosition_minutes.get(16));
    else if (m == 17)
        addToFrame(wordPosition_minutes.get(17));
    else if (m == 18)
        addToFrame(wordPosition_minutes.get(18));
    else if (m == 19)
        addToFrame(wordPosition_minutes.get(19));
    else if (m == 20)
        addToFrame(wordPosition_minutes.get(20));
    else if (m == 21) {
        addToFrame(wordPosition_minutes.get(20));
        addToFrame(wordPosition_minutes.get(1));
    } else if (m == 22) {
        addToFrame(wordPosition_minutes.get(20));
        addToFrame(wordPosition_minutes.get(2));
    } else if (m == 23) {
        addToFrame(wordPosition_minutes.get(20));
        addToFrame(wordPosition_minutes.get(3));
    } else if (m == 24) {
        addToFrame(wordPosition_minutes.get(20));
        addToFrame(wordPosition_minutes.get(4));
    } else if (m == 25) {
        addToFrame(wordPosition_minutes.get(20));
        addToFrame(wordPosition_minutes.get(5));
    } else if (m == 26) {
        addToFrame(wordPosition_minutes.get(20));
        addToFrame(wordPosition_minutes.get(6));
    } else if (m == 27) {
        addToFrame(wordPosition_minutes.get(20));
        addToFrame(wordPosition_minutes.get(7));
    } else if (m == 28) {
        addToFrame(wordPosition_minutes.get(20));
        addToFrame(wordPosition_minutes.get(8));
    } else if (m == 29) {
        addToFrame(wordPosition_minutes.get(20));
        addToFrame(wordPosition_minutes.get(9));
    } else if (m == 30)
        addToFrame(wordPosition_minutes.get(30));
}

function addToFrame([row, col, length]) {
    for (var x = col; x < (col + length); x++) {
        let element = document.getElementById(`r` + row.toString(10) + `c` + x.toString(10));
        element.style.color = 'rgb(80, 80, 255)';
    }
}

initMatrix();