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
   
}


function getTotalsbellSmallBis1() {
    let test = document.getElementById("tester").innerText

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 5"
    //----------------------------------------------------------

    let bellSmallBis1Phone = document.getElementById("bellSmallBis1Phone").value;
    let bellSmallBis1Plan = document.getElementById("bellSmallBis1Plan").value;
    let bellSmallBis1isc = document.getElementById("bellSmallBis1isc").value;
    let bellSmallBis1dis = document.getElementById("bellSmallBis1dis").value;
    let bellSmallBis1spc = document.getElementById("bellSmallBis1spc").value;
    let bellSmallBis1Offer1 = document.getElementById("bellSmallBis1offer1").value;
    let bellSmallBis1Offer2 = document.getElementById("bellSmallBis1offer2").value;
    let bellSmallBis1Offer3 = document.getElementById("bellSmallBis1offer3").value;

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 6"
    //----------------------------------------------------------

    bellSmallBis1Phone = parseFloat(bellSmallBis1Phone);
    bellSmallBis1Plan = parseFloat(bellSmallBis1Plan);
    bellSmallBis1isc = parseFloat(bellSmallBis1isc);
    bellSmallBis1dis = parseFloat(bellSmallBis1dis);
    bellSmallBis1spc = parseFloat(bellSmallBis1spc);
    bellSmallBis1Offer1 = parseFloat(bellSmallBis1Offer1);
    bellSmallBis1Offer2 = parseFloat(bellSmallBis1Offer2);
    bellSmallBis1Offer3 = parseFloat(bellSmallBis1Offer3);

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 7"
    //----------------------------------------------------------

    let bellSmallBis1dp60 = document.getElementById("bellSmallBis1dp60").checked;
    let bellSmallBis1dp120 = document.getElementById("bellSmallBis1dp120").checked;
    let bellSmallBis1dp240 = document.getElementById("bellSmallBis1dp240").checked;
    let bellSmallBis1dp360 = document.getElementById("bellSmallBis1dp360").checked;
    let bellSmallBis1SpendGet = document.getElementById("bellSmallBis1SpendGet").checked;

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 8"
    //----------------------------------------------------------

    let bellSmallBis1Disc60 = 0;
    let bellSmallBis1Disc120 = 0;
    let bellSmallBis1Disc240 = 0;
    let bellSmallBis1Disc360 = 0;
    let bellSmallBis1SG = 0
    let bellSmallBis1TotalSpend = bellSmallBis1isc + bellSmallBis1dis;

    if (bellSmallBis1dp60 === true) {
        bellSmallBis1Disc60 = -2.5;
        bellSmallBis1TotalSpend = bellSmallBis1TotalSpend - 60;
    }
    if (bellSmallBis1dp120 === true) {
        bellSmallBis1Disc120 = -5;
        bellSmallBis1TotalSpend = bellSmallBis1TotalSpend - 120;
    }
    if (bellSmallBis1dp240 === true) {
        bellSmallBis1Disc240 = -10;
        bellSmallBis1TotalSpend = bellSmallBis1TotalSpend - 240;
    }
    if (bellSmallBis1dp360 === true) {
        bellSmallBis1Disc360 = -15;
        bellSmallBis1TotalSpend = bellSmallBis1TotalSpend - 360;
    }
    if (bellSmallBis1SpendGet === true) {
        bellSmallBis1SG = -4.17;
    }

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 9"
    //----------------------------------------------------------

    var bellSmallBis1TotalBT = bellSmallBis1Phone + bellSmallBis1Plan + bellSmallBis1Disc60 + bellSmallBis1Disc120 + bellSmallBis1Disc240 + bellSmallBis1Disc360 + bellSmallBis1SG + bellSmallBis1spc + bellSmallBis1Offer1 + bellSmallBis1Offer2 + bellSmallBis1Offer3 + 0.95;
    var bellSmallBis1TotalAT = bellSmallBis1TotalBT + (bellSmallBis1TotalBT * 0.05);
    var bellSmallBis1PhonePerM = bellSmallBis1Phone + bellSmallBis1Disc60 + bellSmallBis1Disc120 + bellSmallBis1Disc240 + bellSmallBis1Disc360 + bellSmallBis1SG;
    
    test = document.getElementById("tester").innerText = "stop 5"

    document.getElementById("bellSmallBis1TotalBT").innerHTML = "$" + bellSmallBis1TotalBT.toFixed(2)
    document.getElementById("bellSmallBis1TotalAT").innerHTML = "$" + bellSmallBis1TotalAT.toFixed(2)
    document.getElementById("bellSmallBis1PhonePerM").innerHTML = "$" + bellSmallBis1PhonePerM.toFixed(2)
    document.getElementById("bellSmallBis1LeftToSpend").innerHTML = "$" + bellSmallBis1TotalSpend.toFixed(2)
   
    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "Code Ran Successfully"
    //----------------------------------------------------------
    
}

