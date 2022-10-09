function virginPage() {
    window.location.href="index2.html"
}
function bellPage() {
    window.location.href="index.html"
}

function getTotalsbellSmallBis() {
    let test = document.getElementById("tester").innerText

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 0"
    //----------------------------------------------------------

    let bellSmallBisPhone = document.getElementById("bellSmallBisPhone").value;
    let bellSmallBisPlan = document.getElementById("bellSmallBisPlan").value;
    let bellSmallBisisc = document.getElementById("bellSmallBisisc").value;
    let bellSmallBisdis = document.getElementById("bellSmallBisdis").value;
    let bellSmallBisspc = document.getElementById("bellSmallBisspc").value;
    let bellSmallBisOffer1 = document.getElementById("bellSmallBisoffer1").value;
    let bellSmallBisOffer2 = document.getElementById("bellSmallBisoffer2").value;
    let bellSmallBisOffer3 = document.getElementById("bellSmallBisoffer3").value;

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 1"
    //----------------------------------------------------------

    bellSmallBisPhone = parseFloat(bellSmallBisPhone);
    bellSmallBisPlan = parseFloat(bellSmallBisPlan);
    bellSmallBisisc = parseFloat(bellSmallBisisc);
    bellSmallBisdis = parseFloat(bellSmallBisdis);
    bellSmallBisspc = parseFloat(bellSmallBisspc);
    bellSmallBisOffer1 = parseFloat(bellSmallBisOffer1);
    bellSmallBisOffer2 = parseFloat(bellSmallBisOffer2);
    bellSmallBisOffer3 = parseFloat(bellSmallBisOffer3);

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 2"
    //----------------------------------------------------------

    let bellSmallBisdp60 = document.getElementById("bellSmallBisdp60").checked;
    let bellSmallBisdp120 = document.getElementById("bellSmallBisdp120").checked;
    let bellSmallBisdp240 = document.getElementById("bellSmallBisdp240").checked;
    let bellSmallBisdp360 = document.getElementById("bellSmallBisdp360").checked;
    let bellSmallBisSpendGet = document.getElementById("bellSmallBisSpendGet").checked;

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 3"
    //----------------------------------------------------------

    let bellSmallBisDisc60 = 0;
    let bellSmallBisDisc120 = 0;
    let bellSmallBisDisc240 = 0;
    let bellSmallBisDisc360 = 0;
    let bellSmallBisSG = 0
    let bellSmallBisTotalSpend = bellSmallBisisc + bellSmallBisdis;

    if (bellSmallBisdp60 === true) {
        bellSmallBisDisc60 = -2.5;
        bellSmallBisTotalSpend = bellSmallBisTotalSpend - 60;
    }
    if (bellSmallBisdp120 === true) {
        bellSmallBisDisc120 = -5;
        bellSmallBisTotalSpend = bellSmallBisTotalSpend - 120;
    }
    if (bellSmallBisdp240 === true) {
        bellSmallBisDisc240 = -10;
        bellSmallBisTotalSpend = bellSmallBisTotalSpend - 240;
    }
    if (bellSmallBisdp360 === true) {
        bellSmallBisDisc360 = -15;
        bellSmallBisTotalSpend = bellSmallBisTotalSpend - 360;
    }
    if (bellSmallBisSpendGet === true) {
        bellSmallBisSG = -4.17;
    }

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 4"
    //----------------------------------------------------------

    var bellSmallBisTotalBT = bellSmallBisPhone + bellSmallBisPlan + bellSmallBisDisc60 + bellSmallBisDisc120 + bellSmallBisDisc240 + bellSmallBisDisc360 + bellSmallBisSG + bellSmallBisspc + bellSmallBisOffer1 + bellSmallBisOffer2 + bellSmallBisOffer3 + 0.95;
    var bellSmallBisTotalAT = bellSmallBisTotalBT + (bellSmallBisTotalBT * 0.05);
    var bellSmallBisPhonePerM = bellSmallBisPhone + bellSmallBisDisc60 + bellSmallBisDisc120 + bellSmallBisDisc240 + bellSmallBisDisc360 + bellSmallBisSG;
    
    test = document.getElementById("tester").innerText = "stop 5"

    document.getElementById("bellSmallBisTotalBT").innerHTML = "$" + bellSmallBisTotalBT.toFixed(2)
    document.getElementById("bellSmallBisTotalAT").innerHTML = "$" + bellSmallBisTotalAT.toFixed(2)
    document.getElementById("bellSmallBisPhonePerM").innerHTML = "$" + bellSmallBisPhonePerM.toFixed(2)
    document.getElementById("bellSmallBisLeftToSpend").innerHTML = "$" + bellSmallBisTotalSpend.toFixed(2)
   
    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "Code Ran Successfully"
    //----------------------------------------------------------
    
}