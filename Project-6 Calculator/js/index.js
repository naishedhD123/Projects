var result = document.getElementById('result')

function display(number){
  result.value += number
}

function eql(){
  result.value = eval(result.value);
}

function clrs(){
  result.value = '';
}

function del(){
  result.value = result.value.slice(0,-1);
}