const input1 = document.getElementById('input1');
const output1 = document.getElementById('output1');
const input2 = document.getElementById('input2');
const output2 = document.getElementById('output2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');

var n=Math.random()*100;
var calculation= n+1;
var output=document.getElementById('calculate');
var result;
var res=document.getElementById('res');
// const res1=document.getElementById('res1');
function printInput(){
    output1.innerHTML = input1.value;
    output2.innerHTML = input2.value;
    output.innerHTML=calculation;
    res.innerHTML=result;
        document.getElementById('contain').style.display="block";
        // document.getElementById('contain').style.text-align="center";
    document.getElementById('contain1').style.display="none";
    }
    // n=Math.random()*100;
    // calculation= n+1;
    // var output0=document.getElementById('again');
    var cal=(Math.random()*100)+1
    function printInputAgain(){
    output1.innerHTML = input3.value;
    output2.innerHTML = input4.value;
    output.innerHTML=cal;
    res.innerHTML=result;
    // document.getElementById('contain').style.display="block";
    // document.getElementById('contain1').style.display="none";
    }
        if(calculation<=30){
          result="The chances of relationship working between you and your partner is very lower.but there is always a chance to make things work better .I hope you both will focus on your relationship and make it stronger."
        }
        else if(calculation>30 && calculation<=60){
            result="The chances of relationship working between  you and your partner is very good .You guys just need time to spend with each other and make each other your priorities.Wish You guys the best of luck "
        }
        else{
            result="The love between you and your partner is unbelivable.I would like to touchwood to you guys.Be always like that"
        }