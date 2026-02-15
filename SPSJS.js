function go()
{
    const Comp=["Rock","Paper","Scissors"];
    const r=Comp[Math.floor(Math.random()*Comp.length)];
    const s=document.getElementById("I").value;
    document.getElementById("C").innerHTML=r;
    if((s==="Rock"&&r==="Scissors")||(s==="Paper"&&r==="Rock")||(s==="Scissors"&&r==="Paper"))
    {
        document.getElementById("T").value="You Win!";
        document.getElementById("T").style.backgroundColor="green";
    }
    else if(r===s)
    {
        document.getElementById("T").value="It's a Draw";
        document.getElementById("T").style.backgroundColor="yellow";
    }
    else
    {
        document.getElementById("T").value="You Lose!";
        document.getElementById("T").style.backgroundColor="red";
    }
}
function reset()
{
    document.getElementById("I").value="";
    document.getElementById("C").innerHTML="";
    document.getElementById("T").value="";
}