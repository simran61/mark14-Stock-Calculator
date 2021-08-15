var purc = document.querySelector(".purchase");
var quan = document.querySelector(".quantity");
var curr = document.querySelector(".current");

var btn = document.querySelector(".btn");
var after_submit = document.querySelector("#after_submit");

btn.addEventListener("click", () => {

    document.getElementById('graph').style.display="none";
    var purchase = Number(purc.value);
    console.log(purchase);
    var quantity = Number(quan.value);
    console.log(quantity)
    var current = Number(curr.value);
    console.log(current);

    if (purchase < 1 || quantity < 1 || current < 1)
    {
        document.getElementById('after_submit').innerHTML = "Enter values greater than 0";
    }
    else{
        var totalPurchase = purchase * quantity;
        var totalCurrent = current * quantity;
        var diff = totalCurrent - totalPurchase;
        if(totalPurchase === totalCurrent)
        {
            document.getElementById('after_submit').style.display="block";
            after_submit.textContent = "No profit no loss";
            document.getElementById('ok').style.display="block";
            document.getElementById('profit').style.display="none";
            document.getElementById('loss').style.display="none";
        }
        else if (diff > 0)
        {
            var profitPer = ((diff / totalPurchase) * 100).toFixed(2);
            document.getElementById('after_submit').style.display="block";
            document.getElementById('after_submit').innerHTML = `Congrats!! You got a profit of Rs ${diff} which is ` + profitPer + `%`;
            document.getElementById('profit').style.display="block";
            document.getElementById('loss').style.display="none";
            document.getElementById('ok').style.display="none";
        }
        else{
            var lossPer = ((-diff / totalPurchase) * 100).toFixed(2);
            document.getElementById('after_submit').style.display="block";
            document.getElementById('after_submit').innerHTML = `Awww, you are in loss of Rs ${-diff} which is ` + lossPer + `%`;
            document.getElementById('loss').style.display="block";
            document.getElementById('profit').style.display="none";
            document.getElementById('ok').style.display="none";
        }
    }
});