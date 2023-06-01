let noOfPeople = document.getElementById('noOfPeople');
console.log(noOfPeople);
let splitContainer = document.getElementById('splitContainer');
let splitContainerMain = document.getElementById('splitContainerMain');
let valueForPeople = document.getElementById('valueForPeople');
let headerSplit = document.getElementById('headerSplit');
let btn = document.getElementById('btn');
let result = document.getElementById('result');
let resultblock = document.getElementById('resultblock');

function checkIfAllExpenseIsSame(b) {
    let checkForSame = b[0];
    let count = 0;
    for (i = 0; i < b.length; i++) {
        if (b[i] == checkForSame) {
            count++;
        }
    }
    if (count == b.length) {
        return true;
    }
    else {
        return false;
    }
}
function func(len, a, b) {
    console.log(len);
    for (i = 0; i < a.length; i++) {
        let x = document.getElementById(`id${i + 1}`);
        if (x.value != '') {
            console.log(x.value);
            a[i] = x.value;
        }
        else {
            a[i] = 'Name ' + [i + 1];
        }
    }

    for (i = 0; i < b.length; i++) {
        let x = document.getElementById(`i${i + 1}`);
        if (x.value != '') {
            let d = parseInt(x.value);
            b[i] = d;
        }
        else {
            b[i] = 0;
        }
    }
}

function sum1(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];

    }
    return sum;
}

function higher(a) {
    greater = a[0];
    for (i = 0; i < a.length; i++) {
        if (a[i] > greater) {
            greater = a[i];
        }
    }
    return greater;
}

function higherIndex(a) {
    let greaterIndex = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i] == greater) {
            greaterIndex = i;
        }
    }
    return greaterIndex;
}

function makeZero(howMuch, greaterIndex) {
    howMuch[greaterIndex] = 0;
}

function calculateLogic(a, b) {
    let total = sum1(a);
    let perPerson = total / a.length;

    //calculating for the less and extra
    let extra = [];
    let less = [];
    let howMuch = [];

    for (i = 0; i < a.length; i++) {
        if (a[i] - perPerson > 0) {
            extra[i] = a[i];
            less[i] = 0;
            howMuch[i] = a[i] / a.length;
        }
        else {
            less[i] = a[i];
            extra[i] = 0;
            howMuch[i] = a[i] / a.length;
        }
    }
    let greater = higher(howMuch);
    let greaterIndex = higherIndex(howMuch);
    let rem = [];
    let count = 0;
    //Kaun kitna dega

    let html = '';
    while (count < a.length - 1) {
        if (count == 0) {
            for (i = 0; i < a.length; i++) {
                rem[i] = howMuch[greaterIndex] - howMuch[i];
                if (rem[i] != 0) {
                    html += `<div>${b[i]} will Give  <b>${howMuch[greaterIndex] - howMuch[i]}</b> to ${b[greaterIndex]}</div>`;

                }
            }
        }
        makeZero(howMuch, greaterIndex);
        count++;
        greater = higher(howMuch);
        greaterIndex = higherIndex(howMuch);
        console.log(greater);
        console.log(greaterIndex);
        for (i = 0; i < a.length; i++) {
            if (rem[i] != 0) {
                rem[i] = howMuch[greaterIndex] - howMuch[i];
            }
            if (rem[i] != 0) {
                html += `<div>${b[i]} will Give  ${howMuch[greaterIndex] - howMuch[i]} to ${b[greaterIndex]}</div>`;
            }
        }
        console.log('rem', rem);
        console.log('howMuch', howMuch);
    }
    console.log(html);
    html+= `<a type="button" href="index.html" class="btn-close" aria-label="Close" style="position: absolute;top: 0;
    right: 0;"></a>`  //please remove this
    result.innerHTML = html;
}

btn.addEventListener('click', () => {

    if ((valueForPeople.value >= 'a' && valueForPeople.value <= 'z') || (valueForPeople.value < 0 || valueForPeople.value > 10) || valueForPeople.value == '') {
        alert('Please Enter the Number Between 1 and 10');
        valueForPeople.value = '';
        return;
    }
    for (i = 0; i < valueForPeople.value; i++) {
        console.log(i);
    }
    noOfPeople.style.display = 'none';
    splitContainerMain.style.display = 'flex';
    let html = '';
    for (let i = 0; i < valueForPeople.value; i++) {

        // html+=`<div id="styling" class="d-flex w-100 border border-primary my-3"><h4 class="align-self-start px-2">Enter name ${i + 1} :</h4> <input type="text" id="id${i + 1}" class="form-control mx-3 mb-2 align-self-start flex1" placeholder="Enter the Name ${i+1}" aria-label="Username"
        // aria-describedby="basic-addon1"> <h4 class="align-self-start px-2">Enter the Expense :</h4> <input type="number" id="i${i + 1}" class="form-control mx-3 mb-2 align-self-start flex1" placeholder="Enter the Amount for Name ${i + 1}" aria-label="Username"
        // aria-describedby="basic-addon1"></div>`;
        html += `<div id="styling" class="w-100"><h4 >Enter name ${i + 1} :</h4> <input type="text" id="id${i + 1}" class="form-control" placeholder="Enter the Name ${i + 1}" aria-label="Username"
        aria-describedby="basic-addon1"> <h4>Enter the Expense :</h4> <input type="number" id="i${i + 1}" class="form-control" placeholder="Enter the Amount for Name ${i + 1}" aria-label="Username"
        aria-describedby="basic-addon1"></div>`;
    }
    html += `<div><Button class="btn btn-primary my-3" type="submit" id="btn1">Enter</Button></div>`
    splitContainer.innerHTML = html;

    console.log(splitContainer);
    let btn1 = document.getElementById('btn1');
    let a = [];
    a.length = valueForPeople.value;
    let b = [];
    b.length = valueForPeople.value;
    btn1.addEventListener('click', () => {


        func(valueForPeople.value, a, b);
        //Local Storage Start
        localStorage.setItem('Name',a);
        localStorage.setItem('Expense',b);

        //Local Storage End



        //If Everyone Expense is same or Zero
        if (checkIfAllExpenseIsSame(b)) {
            Text = 'No need to Split'
            splitContainerMain.style.display = 'none';
            Text+=`<br><a type="button" href="index.html" class="btn-close" aria-label="Close" style="position: absolute;top: 0;
            right: 0;"></a>`
            result.innerHTML = Text;
            resultblock.style.display = 'flex';
            return;
        }
        splitContainerMain.style.display = 'none';
        calculateLogic(b, a);
        resultblock.style.display = 'flex';
    })
})