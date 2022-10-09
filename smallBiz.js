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
    test = document.getElementById("tester").innerText = "stop 6"
    //----------------------------------------------------------

    //Line 2
    let bellSmallBis2Phone = document.getElementById("bellSmallBis2Phone").value;
    let bellSmallBis2Plan = document.getElementById("bellSmallBis2Plan").value;
    let bellSmallBis2isc = document.getElementById("bellSmallBis2isc").value;
    let bellSmallBis2dis = document.getElementById("bellSmallBis2dis").value;
    let bellSmallBis2SecondLine = document.getElementById("bellSmallBis2Secondline").value;
    let bellSmallBis2spc = document.getElementById("bellSmallBis2spc").value;
    let bellSmallBis2Offer1 = document.getElementById("bellSmallBis2offer1").value;
    let bellSmallBis2Offer2 = document.getElementById("bellSmallBis2offer2").value;
    let bellSmallBis2Offer3 = document.getElementById("bellSmallBis2offer3").value;

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 7"
    //----------------------------------------------------------

    bellSmallBis2Phone = parseFloat(bellSmallBis2Phone);
    bellSmallBis2Plan = parseFloat(bellSmallBis2Plan);
    bellSmallBis2isc = parseFloat(bellSmallBis2isc);
    bellSmallBis2dis = parseFloat(bellSmallBis2dis);
    bellSmallBis2SecondLine = parseFloat(bellSmallBis2SecondLine);
    bellSmallBis2spc = parseFloat(bellSmallBis2spc);
    bellSmallBis2Offer1 = parseFloat(bellSmallBis2Offer1);
    bellSmallBis2Offer2 = parseFloat(bellSmallBis2Offer2);
    bellSmallBis2Offer3 = parseFloat(bellSmallBis2Offer3);

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 8"
    //----------------------------------------------------------

    let bellSmallBis2dp60 = document.getElementById("bellSmallBis2dp60").checked;
    let bellSmallBis2dp120 = document.getElementById("bellSmallBis2dp120").checked;
    let bellSmallBis2dp240 = document.getElementById("bellSmallBis2dp240").checked;
    let bellSmallBis2dp360 = document.getElementById("bellSmallBis2dp360").checked;
    let bellSmallBis2SpendGet = document.getElementById("bellSmallBis2SpendGet").checked;

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 9"
    //----------------------------------------------------------

    let bellSmallBis2Disc60 = 0;
    let bellSmallBis2Disc120 = 0;
    let bellSmallBis2Disc240 = 0;
    let bellSmallBis2Disc360 = 0;
    let bellSmallBis2SG = 0
    let bellSmallBis2TotalSpend = bellSmallBis2isc + bellSmallBis2dis;

    if (bellSmallBis2dp60 === true) {
        bellSmallBis2Disc60 = -2.5;
        bellSmallBis2TotalSpend = bellSmallBis2TotalSpend - 60;
    }
    if (bellSmallBis2dp120 === true) {
        bellSmallBis2Disc120 = -5;
        bellSmallBis2TotalSpend = bellSmallBis2TotalSpend - 120;
    }
    if (bellSmallBis2dp240 === true) {
        bellSmallBis2Disc240 = -10;
        bellSmallBis2TotalSpend = bellSmallBis2TotalSpend - 240;
    }
    if (bellSmallBis2dp360 === true) {
        bellSmallBis2Disc360 = -15;
        bellSmallBis2TotalSpend = bellSmallBis2TotalSpend - 360;
    }
    if (bellSmallBis2SpendGet === true) {
        bellSmallBis2SG = -4.17;
    }


    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 10"
    //----------------------------------------------------------


    let bellSmallBis2TotalBT = bellSmallBis2Phone + bellSmallBis2Plan + bellSmallBis2Disc60 + bellSmallBis2Disc120 + bellSmallBis2Disc240 + bellSmallBis2Disc360 + bellSmallBis2SG + bellSmallBis2SecondLine + bellSmallBis2spc + bellSmallBis2Offer1 + bellSmallBis2Offer2 + bellSmallBis2Offer3 + 0.95;
    let bellSmallBis2TotalAT = bellSmallBis2TotalBT + (bellSmallBis2TotalBT * 0.05);
    let bellSmallBis2PhonePerM = bellSmallBis2Phone + bellSmallBis2Disc60 + bellSmallBis2Disc120 + bellSmallBis2Disc240 + bellSmallBis2Disc360 + bellSmallBis2SG;
    
    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 11"
    //----------------------------------------------------------
    

    document.getElementById("bellSmallBis2TotalBT").innerHTML = "$" + bellSmallBis2TotalBT.toFixed(2)
    document.getElementById("bellSmallBis2TotalAT").innerHTML = "$" + bellSmallBis2TotalAT.toFixed(2)
    document.getElementById("bellSmallBis2PhonePerM").innerHTML = "$" + bellSmallBis2PhonePerM.toFixed(2)
    document.getElementById("bellSmallBis2LeftToSpend").innerHTML = "$" + bellSmallBis2TotalSpend.toFixed(2)
   
    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "Code Ran Successfully"
    //----------------------------------------------------------
    
}