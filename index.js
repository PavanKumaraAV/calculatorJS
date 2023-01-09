function display(num){
    number.value += num;
}

function allClear(){
    number.value = '';
}

function backSpace(){

    number.value = number.value.slice(0,-1);
}

function output(){
    number.value = eval(number.value);
}