var str="";
var output=document.getElementById('output');

function view(str){
    if(str=='Infinity'||str=='NaN'){
        str='error';
        output.innerHTML=str;
        str='';
        return;
    }
    if(str!='Infinity'||str!='NaN') output.innerHTML=str;
}
//--------------номера-------------------
var one=document.getElementById('num1');
var two=document.getElementById('num2');
var three=document.getElementById('num3');
var four=document.getElementById('num4');
var five=document.getElementById('num5');
var six=document.getElementById('num6');
var seven=document.getElementById('num7');
var eight=document.getElementById('num8');
var nine=document.getElementById('num9');
var zero=document.getElementById('zero');
var dot=document.getElementById('dot');

//---------операции с номерами----------
one.addEventListener('click',function(){
    str+='1';
    view(str);
});
two.addEventListener('click',function(){
    str+='2';
    view(str);
});
three.addEventListener('click',function(){
    str+='3';
    view(str);
});
four.addEventListener('click',function(){
    str+='4';
    view(str);
});
five.addEventListener('click',function(){
    str+='5';
    view(str);
});
six.addEventListener('click',function(){
    str+='6';
    view(str);
});
seven.addEventListener('click',function(){
    str+='7';
    view(str);
});
eight.addEventListener('click',function(){
    str+='8';
    view(str);
});
nine.addEventListener('click',function(){
    str+='9';
    view(str);
});
zero.addEventListener('click',function(){
    str+='0';
    view(str);
});
dot.addEventListener('click',function(){
    str+='.';
    view(str);
});




//------------------функции------------------

var ac=document.getElementById('ac');
var add=document.getElementById('add');
var equal=document.getElementById('equal');
var sub=document.getElementById('subtract');
var mul=document.getElementById('multiply');
var div=document.getElementById('divide');
var mod=document.getElementById('mod');
var noideaiv=document.getElementById('plus');




//-----------функции вычисления-----------
ac.addEventListener('click',function(){
    str="";
    view(str);
});

add.addEventListener('click',function(){
    str+='+';
    view(str);
});
equal.addEventListener('click',function(){
    str=parseInt(eval(str));
    view(str);
});

sub.addEventListener('click',function(){
    str+='-';
    view(str);
});

mul.addEventListener('click',function(){
    str+='*';
    view(str);
});

div.addEventListener('click',function(){
    str+='/';
    view(str);
});

mod.addEventListener('click',function(){
    str+='%';
    view(str);
});

noideaiv.addEventListener('click',function(){
    console.log(str);
    var temp=str.slice(0,str.length-1);
    console.log(temp);
    str=temp;
    view(str);
});



