function add()
{
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a+b;
    document.getElementById("op").innerHTML="ADDITION";
    document.getElementById("ans1").innerHTML="Addition is "+c;
}
function sub()
{
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    if(a<b)
    {
        let temp=a;
        a=b;
        b=temp;
    }
    let d=a-b;
    document.getElementById("op").innerHTML="SUBSTRACTION";
    document.getElementById("ans1").innerHTML="Substraction is "+d;
}
function mul()
{
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let e=a*b;
    document.getElementById("op").innerHTML="MULTIPLICATION";
    document.getElementById("ans1").innerHTML="Multiplication is "+e;
}
function div()
{
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let f=a/b;
    document.getElementById("op").innerHTML="DIVISION";
    document.getElementById("ans1").innerHTML="Division  is "+f;
}
function mod()
{
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let g=a%b;
    document.getElementById("op").innerHTML="MODULOUS";
    document.getElementById("ans1").innerHTML="Modulous  is "+g;
}