//bell line 1
function getTotalsBell() {
    let test = document.getElementById("tester").innerText

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 0"
    //----------------------------------------------------------

    let bellPhone = document.getElementById("bellPhone").value;
    let bellPlan = document.getElementById("bellPlan").value;
    let bellisc = document.getElementById("bellisc").value;
    let belldis = document.getElementById("belldis").value;
    let bellspc = document.getElementById("bellspc").value;
    let bellOffer1 = document.getElementById("belloffer1").value;
    let bellOffer2 = document.getElementById("belloffer2").value;
    let bellOffer3 = document.getElementById("belloffer3").value;

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 1"
    //----------------------------------------------------------

    bellPhone = parseFloat(bellPhone);
    bellPlan = parseFloat(bellPlan);
    bellisc = parseFloat(bellisc);
    belldis = parseFloat(belldis);
    bellspc = parseFloat(bellspc);
    bellOffer1 = parseFloat(bellOffer1);
    bellOffer2 = parseFloat(bellOffer2);
    bellOffer3 = parseFloat(bellOffer3);

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 2"
    //----------------------------------------------------------

    let belldp60 = document.getElementById("belldp60").checked;
    let belldp120 = document.getElementById("belldp120").checked;
    let belldp240 = document.getElementById("belldp240").checked;
    let belldp360 = document.getElementById("belldp360").checked;
    let bellSpendGet = document.getElementById("bellSpendGet").checked;

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 3"
    //----------------------------------------------------------

    let bellDisc60 = 0;
    let bellDisc120 = 0;
    let bellDisc240 = 0;
    let bellDisc360 = 0;
    let bellSG = 0
    let bellTotalSpend = bellisc + belldis;

    if (belldp60 === true) {
        bellDisc60 = -2.5;
        bellTotalSpend = bellTotalSpend - 60;
    }
    if (belldp120 === true) {
        bellDisc120 = -5;
        bellTotalSpend = bellTotalSpend - 120;
    }
    if (belldp240 === true) {
        bellDisc240 = -10;
        bellTotalSpend = bellTotalSpend - 240;
    }
    if (belldp360 === true) {
        bellDisc360 = -15;
        bellTotalSpend = bellTotalSpend - 360;
    }
    if (bellSpendGet === true) {
        bellSG = -4.17;
    }

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 4"
    //----------------------------------------------------------

    var bellTotalBT = bellPhone + bellPlan + bellDisc60 + bellDisc120 + bellDisc240 + bellDisc360 + bellSG + bellspc + bellOffer1 + bellOffer2 + bellOffer3 + 0.95;
    var bellTotalAT = bellTotalBT + (bellTotalBT * 0.05);
    var bellPhonePerM = bellPhone + bellDisc60 + bellDisc120 + bellDisc240 + bellDisc360 + bellSG;
    
    test = document.getElementById("tester").innerText = "stop 5"

    document.getElementById("bellTotalBT").innerHTML = "$" + bellTotalBT.toFixed(2)
    document.getElementById("bellTotalAT").innerHTML = "$" + bellTotalAT.toFixed(2)
    document.getElementById("bellPhonePerM").innerHTML = "$" + bellPhonePerM.toFixed(2)
    document.getElementById("bellLeftToSpend").innerHTML = "$" + bellTotalSpend.toFixed(2)

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 6"
    //----------------------------------------------------------

    //Line 2
    let bell2Phone = document.getElementById("bell2Phone").value;
    let bell2Plan = document.getElementById("bell2Plan").value;
    let bell2isc = document.getElementById("bell2isc").value;
    let bell2dis = document.getElementById("bell2dis").value;
    let bell2SecondLine = document.getElementById("bell2Secondline").value;
    let bell2spc = document.getElementById("bell2spc").value;
    let bell2Offer1 = document.getElementById("bell2offer1").value;
    let bell2Offer2 = document.getElementById("bell2offer2").value;
    let bell2Offer3 = document.getElementById("bell2offer3").value;

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 7"
    //----------------------------------------------------------

    bell2Phone = parseFloat(bell2Phone);
    bell2Plan = parseFloat(bell2Plan);
    bell2isc = parseFloat(bell2isc);
    bell2dis = parseFloat(bell2dis);
    bell2SecondLine = parseFloat(bell2SecondLine);
    bell2spc = parseFloat(bell2spc);
    bell2Offer1 = parseFloat(bell2Offer1);
    bell2Offer2 = parseFloat(bell2Offer2);
    bell2Offer3 = parseFloat(bell2Offer3);

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 8"
    //----------------------------------------------------------

    let bell2dp60 = document.getElementById("bell2dp60").checked;
    let bell2dp120 = document.getElementById("bell2dp120").checked;
    let bell2dp240 = document.getElementById("bell2dp240").checked;
    let bell2dp360 = document.getElementById("bell2dp360").checked;
    let bell2SpendGet = document.getElementById("bell2SpendGet").checked;

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 9"
    //----------------------------------------------------------

    let bell2Disc60 = 0;
    let bell2Disc120 = 0;
    let bell2Disc240 = 0;
    let bell2Disc360 = 0;
    let bell2SG = 0
    let bell2TotalSpend = bell2isc + bell2dis;

    if (bell2dp60 === true) {
        bell2Disc60 = -2.5;
        bell2TotalSpend = bell2TotalSpend - 60;
    }
    if (bell2dp120 === true) {
        bell2Disc120 = -5;
        bell2TotalSpend = bell2TotalSpend - 120;
    }
    if (bell2dp240 === true) {
        bell2Disc240 = -10;
        bell2TotalSpend = bell2TotalSpend - 240;
    }
    if (bell2dp360 === true) {
        bell2Disc360 = -15;
        bell2TotalSpend = bell2TotalSpend - 360;
    }
    if (bell2SpendGet === true) {
        bell2SG = -4.17;
    }


    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 10"
    //----------------------------------------------------------


    let bell2TotalBT = bell2Phone + bell2Plan + bell2Disc60 + bell2Disc120 + bell2Disc240 + bell2Disc360 + bell2SG + bell2SecondLine + bell2spc + bell2Offer1 + bell2Offer2 + bell2Offer3 + 0.95;
    let bell2TotalAT = bell2TotalBT + (bell2TotalBT * 0.05);
    let bell2PhonePerM = bell2Phone + bell2Disc60 + bell2Disc120 + bell2Disc240 + bell2Disc360 + bell2SG;
    
    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 11"
    //----------------------------------------------------------
    

    document.getElementById("bell2TotalBT").innerHTML = "$" + bell2TotalBT.toFixed(2)
    document.getElementById("bell2TotalAT").innerHTML = "$" + bell2TotalAT.toFixed(2)
    document.getElementById("bell2PhonePerM").innerHTML = "$" + bell2PhonePerM.toFixed(2)
    document.getElementById("bell2LeftToSpend").innerHTML = "$" + bell2TotalSpend.toFixed(2)



    //Line 3
    let bell3Phone = document.getElementById("bell3Phone").value;
    let bell3Plan = document.getElementById("bell3Plan").value;
    let bell3isc = document.getElementById("bell3isc").value;
    let bell3dis = document.getElementById("bell3dis").value;
    let bell3SecondLine = document.getElementById("bell3Secondline").value;
    let bell3spc = document.getElementById("bell3spc").value;
    let bell3Offer1 = document.getElementById("bell3offer1").value;
    let bell3Offer2 = document.getElementById("bell3offer2").value;
    let bell3Offer3 = document.getElementById("bell3offer3").value;

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 12"
    //----------------------------------------------------------

    bell3Phone = parseFloat(bell3Phone);
    bell3Plan = parseFloat(bell3Plan);
    bell3isc = parseFloat(bell3isc);
    bell3dis = parseFloat(bell3dis);
    bell3SecondLine = parseFloat(bell3SecondLine);
    bell3spc = parseFloat(bell3spc);
    bell3Offer1 = parseFloat(bell3Offer1);
    bell3Offer2 = parseFloat(bell3Offer2);
    bell3Offer3 = parseFloat(bell3Offer3);

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 13"
    //----------------------------------------------------------

    let bell3dp60 = document.getElementById("bell3dp60").checked;
    let bell3dp120 = document.getElementById("bell3dp120").checked;
    let bell3dp240 = document.getElementById("bell3dp240").checked;
    let bell3dp360 = document.getElementById("bell3dp360").checked;
    let bell3SpendGet = document.getElementById("bell3SpendGet").checked;


    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 14"
    //----------------------------------------------------------


    let bell3Disc60 = 0;
    let bell3Disc120 = 0;
    let bell3Disc240 = 0;
    let bell3Disc360 = 0;
    let bell3SG = 0
    let bell3TotalSpend = bell3isc + bell3dis;

    if (bell3dp60 === true) {
        bell3Disc60 = -2.5;
        bell3TotalSpend = bell3TotalSpend - 60;
    }
    if (bell3dp120 === true) {
        bell3Disc120 = -5;
        bell3TotalSpend = bell3TotalSpend - 120;
    }
    if (bell3dp240 === true) {
        bell3Disc240 = -10;
        bell3TotalSpend = bell3TotalSpend - 240;
    }
    if (bell3dp360 === true) {
        bell3Disc360 = -15;
        bell3TotalSpend = bell3TotalSpend - 360;
    }
    if (bell3SpendGet === true) {
        bell3SG = -4.17;
    }

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 15"
    //----------------------------------------------------------


    var bell3TotalBT = bell3Phone + bell3Plan + bell3Disc60 + bell3Disc120 + bell3Disc240 + bell3Disc360 + bell3SG + bell3SecondLine + bell3spc + bell3Offer1 + bell3Offer2 + bell3Offer3 + 0.95;
    var bell3TotalAT = bell3TotalBT + (bell3TotalBT * 0.05);
    var bell3PhonePerM = bell3Phone + bell3Disc60 + bell3Disc120 + bell3Disc240 + bell3Disc360 + bell3SG;
    

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 16"
    //----------------------------------------------------------

    
    
    document.getElementById("bell3TotalBT").innerHTML = "$" + bell3TotalBT.toFixed(2)
    document.getElementById("bell3TotalAT").innerHTML = "$" + bell3TotalAT.toFixed(2)
    document.getElementById("bell3PhonePerM").innerHTML = "$" + bell3PhonePerM.toFixed(2)
    document.getElementById("bell3LeftToSpend").innerHTML = "$" + bell3TotalSpend.toFixed(2)

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 17"
    //----------------------------------------------------------


    let bell2on = document.getElementById("bell2on").checked;
    let bell3on = document.getElementById("bell3on").checked;

    let newBell2BT = bell2TotalBT;
    let newBell2AT = bell2TotalAT;
    let newBell2PhonePer = bell2PhonePerM;
    let newBell2Spend = bell2TotalSpend
    
    let newBell3BT = bell3TotalBT
    let newBell3AT = bell3TotalAT;
    let newBell3PhonePer = bell3PhonePerM;
    let newBell3Spend = bell3TotalSpend

    if (bell2on == false){
        newBell2BT = 0;
        newBell2AT = 0;
        newBell2PhonePer = 0;
        newBell2Spend = 0;
    }

    if (bell3on == false){
        newBell3BT = 0;
        newBell3AT = 0;
        newBell3PhonePer = 0;
        newBell3Spend = 0;
    }

    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "stop 18"
    //----------------------------------------------------------

    let bellallBT = bellTotalBT + newBell2BT + newBell3BT;
    let bellallAT = bellTotalAT + newBell2AT + newBell3AT;
    let bellallPhonePer = bellPhonePerM + newBell2PhonePer + newBell3PhonePer;
    let bellallspendget = bellTotalSpend + newBell2Spend + newBell3Spend;

    document.getElementById("bellallTotalBT").innerText = "$" + bellallBT.toFixed(2);
    document.getElementById("bellallTotalAT").innerText = "$" + bellallAT.toFixed(2);
    document.getElementById("bellallPhonePerM").innerText = "$" + bellallPhonePer.toFixed(2);
    document.getElementById("bellallLeftToSpend").innerText = "$" + bellallspendget.toFixed(2);


    //----------------------------------------------------------
    test = document.getElementById("tester").innerText = "Code Ran Successfully"
    //----------------------------------------------------------

}



//Virgin Line 1
function getTotalsVirgin() {
    let test = document.getElementById("vtester").innerText

    //----------------------------------------------------------
    test = document.getElementById("vtester").innerText = "stop 0"
    //----------------------------------------------------------

    let virginPhone = document.getElementById("virginPhone").value;
    let virginPlan = document.getElementById("virginPlan").value;
    let virginisc = document.getElementById("virginisc").value;
    let virgindis = document.getElementById("virgindis").value;
    let virginspc = document.getElementById("virginspc").value;
    let virginOffer1 = document.getElementById("virginoffer1").value;
    let virginOffer2 = document.getElementById("virginoffer2").value;
    let virginOffer3 = document.getElementById("virginoffer3").value;
    let virginUPfront = document.getElementById("virginUpFront").value;

    //----------------------------------------------------------
    test = document.getElementById("vtester").innerText = "stop 1"
    //----------------------------------------------------------

    virginPhone = parseFloat(virginPhone);
    virginPlan = parseFloat(virginPlan);
    virginisc = parseFloat(virginisc);
    virgindis = parseFloat(virgindis);
    virginspc = parseFloat(virginspc);
    virginOffer1 = parseFloat(virginOffer1);
    virginOffer2 = parseFloat(virginOffer2);
    virginOffer3 = parseFloat(virginOffer3);
    virginUPfront = parseFloat(virginUPfront);

    //----------------------------------------------------------
    test = document.getElementById("vtester").innerText = "stop 2"
    //----------------------------------------------------------

    let virgindp60 = document.getElementById("virgindp60").checked;
    let virgindp120 = document.getElementById("virgindp120").checked;
    let virgindp240 = document.getElementById("virgindp240").checked;
    let virgindp360 = document.getElementById("virgindp360").checked;
    let virginSpendGet = document.getElementById("virginSpendGet").checked;

    //----------------------------------------------------------
    test = document.getElementById("vtester").innerText = "stop 3"
    //----------------------------------------------------------

    let virginDisc60 = 0;
    let virginDisc120 = 0;
    let virginDisc240 = 0;
    let virginDisc360 = 0;
    let virginSG = 0
    let virginTotalSpend = virginisc + virgindis;



    if (virgindp60 === true) {
        virginDisc60 = -2.5;
        virginTotalSpend = virginTotalSpend - 60;
    }
    if (virgindp120 === true) {
        virginDisc120 = -5;
        virginTotalSpend = virginTotalSpend - 120;
    }
    if (virgindp240 === true) {
        virginDisc240 = -10;
        virginTotalSpend = virginTotalSpend - 240;
    }
    if (virgindp360 === true) {
        virginDisc360 = -15;
        virginTotalSpend = virginTotalSpend - 360;
    }
   
    
   
    if (virginSpendGet === true) {
        if (virginUPfront > 0){
            if (virginUPfront < 50){
                virginUPfront = 0;
            }else{
                virginUPfront = virginUPfront - 50;
            }
        }else{
            virginSG = -2.08;
        } 
    }

    //----------------------------------------------------------
    test = document.getElementById("vtester").innerText = "stop 4"
    //----------------------------------------------------------


    let virginTotalBT = virginPhone + virginPlan + virginDisc60 + virginDisc120 + virginDisc240 + virginDisc360 + virginSG + virginspc + virginOffer1 + virginOffer2 + virginOffer3 + 0.95;
    let virginTotalAT = virginTotalBT + (virginTotalBT * 0.05);
    let virginPhonePerM = virginPhone + virginDisc60 + virginDisc120 + virginDisc240 + virginDisc360 + virginSG;
    let virginLeftToSpend = virginTotalSpend;
    
    document.getElementById("virginTotalBT").innerHTML = "$" + virginTotalBT.toFixed(2);
    document.getElementById("virginTotalAT").innerHTML = "$" + virginTotalAT.toFixed(2);
    document.getElementById("virginPhonePerM").innerHTML = "$" + virginPhonePerM.toFixed(2);
    document.getElementById("virginLeftToSpend").innerHTML = "$" + virginLeftToSpend.toFixed(2);
    document.getElementById("virginUpfrontTotal").innerHTML = "$" + virginUPfront.toFixed(2);

    //----------------------------------------------------------
    test = document.getElementById("vtester").innerText = "stop 5"
    //----------------------------------------------------------

    // line 2 v
    let virgin2Phone = document.getElementById("virgin2Phone").value;
    let virgin2Plan = document.getElementById("virgin2Plan").value;
    let virgin2isc = document.getElementById("virgin2isc").value;
    let virgin2dis = document.getElementById("virgin2dis").value;
    let virgin2SecondLine = document.getElementById("virgin2Secondline").value;
    let virgin2spc = document.getElementById("virgin2spc").value;
            //offers
    let virgin2Offer1 = document.getElementById("virgin2offer1").value;
    let virgin2Offer2 = document.getElementById("virgin2offer2").value;
    let virgin2Offer3 = document.getElementById("virgin2offer3").value;
    let virgin2UPfront = document.getElementById("virgin2UpFront").value;

    //----------------------------------------------------------
    test = document.getElementById("vtester").innerText = "stop 6"
    //----------------------------------------------------------

    virgin2Phone = parseFloat(virgin2Phone);
    virgin2Plan = parseFloat(virgin2Plan);
    virgin2isc = parseFloat(virgin2isc);
    virgin2dis = parseFloat(virgin2dis);
    virgin2SecondLine = parseFloat(virgin2SecondLine);
    virgin2spc = parseFloat(virgin2spc);
    virgin2Offer1 = parseFloat(virgin2Offer1);
    virgin2Offer2 = parseFloat(virgin2Offer2);
    virgin2Offer3 = parseFloat(virgin2Offer3);
    virgin2UPfront = parseFloat(virgin2UPfront);

    let virgin2dp60 = document.getElementById("virgin2dp60").checked;
    let virgin2dp120 = document.getElementById("virgin2dp120").checked;
    let virgin2dp240 = document.getElementById("virgin2dp240").checked;
    let virgin2dp360 = document.getElementById("virgin2dp360").checked;
    let virgin2SpendGet = document.getElementById("virgin2SpendGet").checked;

    //----------------------------------------------------------
    test = document.getElementById("vtester").innerText = "stop 7"
    //----------------------------------------------------------

    let virgin2Disc60 = 0;
    let virgin2Disc120 = 0;
    let virgin2Disc240 = 0;
    let virgin2Disc360 = 0;
    let virgin2SG = 0
    let virgin2TotalSpend = virgin2isc + virgin2dis;



    if (virgin2dp60 === true) {
        virgin2Disc60 = -2.5;
        virgin2TotalSpend = virgin2TotalSpend - 60;
    }
    if (virgin2dp120 === true) {
        virgin2Disc120 = -5;
        virgin2TotalSpend = virgin2TotalSpend - 120;
    }
    if (virgin2dp240 === true) {
        virgin2Disc240 = -10;
        virgin2TotalSpend = virgin2TotalSpend - 240;
    }
    if (virgin2dp360 === true) {
        virgin2Disc360 = -15;
        virgin2TotalSpend = virgin2TotalSpend - 360;
    }
   
    
   
    if (virgin2SpendGet === true) {
        if (virgin2UPfront > 0){
            if (virgin2UPfront < 50){
                virgin2UPfront = 0;
            }else{
                virgin2UPfront = virgin2UPfront - 50;
            }
        }else{
            virgin2SG = -2.08;
        } 
    }

    //----------------------------------------------------------
    test = document.getElementById("vtester").innerText = "stop 8"
    //----------------------------------------------------------


    let virgin2TotalBT = virgin2Phone + virgin2Plan + virgin2Disc60 + virgin2Disc120 + virgin2Disc240 + virgin2Disc360 + virgin2SG + virgin2SecondLine + virgin2spc + virgin2Offer1 + virgin2Offer2 + virgin2Offer3 + 0.95;
    let virgin2TotalAT = virgin2TotalBT + (virgin2TotalBT * 0.05);
    let virgin2PhonePerM = virgin2Phone + virgin2Disc60 + virgin2Disc120 + virgin2Disc240 + virgin2Disc360 + virgin2SG;
    let virgin2LeftToSpend = virgin2TotalSpend;

    document.getElementById("virgin2TotalBT").innerHTML = "$" + virgin2TotalBT.toFixed(2);
    document.getElementById("virgin2TotalAT").innerHTML = "$" + virgin2TotalAT.toFixed(2);
    document.getElementById("virgin2PhonePerM").innerHTML = "$" + virgin2PhonePerM.toFixed(2);
    document.getElementById("virgin2LeftToSpend").innerHTML = "$" + virgin2LeftToSpend.toFixed(2);
    document.getElementById("virgin2UpfrontTotal").innerHTML = "$" + virgin2UPfront.toFixed(2);

    //----------------------------------------------------------
    test = document.getElementById("vtester").innerText = "stop 9"
    //----------------------------------------------------------

    //line 3 v
    let virgin3Phone = document.getElementById("virgin3Phone").value;
    let virgin3Plan = document.getElementById("virgin3Plan").value;
    let virgin3isc = document.getElementById("virgin3isc").value;
    let virgin3dis = document.getElementById("virgin3dis").value;
    let virgin3SecondLine = document.getElementById("virgin3Secondline").value;
    let virgin3spc = document.getElementById("virgin3spc").value;
            //offers
    let virgin3Offer1 = document.getElementById("virgin3offer1").value;
    let virgin3Offer2 = document.getElementById("virgin3offer2").value;
    let virgin3Offer3 = document.getElementById("virgin3offer3").value;
    let virgin3UPfront = document.getElementById("virgin3UpFront").value;

    //----------------------------------------------------------
    test = document.getElementById("vtester").innerText = "stop 10"
    //----------------------------------------------------------

    virgin3Phone = parseFloat(virgin3Phone);
    virgin3Plan = parseFloat(virgin3Plan);
    virgin3isc = parseFloat(virgin3isc);
    virgin3dis = parseFloat(virgin3dis);
    virgin3SecondLine = parseFloat(virgin3SecondLine);
    virgin3spc = parseFloat(virgin3spc);
    virgin3Offer1 = parseFloat(virgin3Offer1);
    virgin3Offer2 = parseFloat(virgin3Offer2);
    virgin3Offer3 = parseFloat(virgin3Offer3);
    virgin3UPfront = parseFloat(virgin3UPfront);

    let virgin3dp60 = document.getElementById("virgin3dp60").checked;
    let virgin3dp120 = document.getElementById("virgin3dp120").checked;
    let virgin3dp240 = document.getElementById("virgin3dp240").checked;
    let virgin3dp360 = document.getElementById("virgin3dp360").checked;
    let virgin3SpendGet = document.getElementById("virgin3SpendGet").checked;

    //----------------------------------------------------------
    test = document.getElementById("vtester").innerText = "stop 11"
    //----------------------------------------------------------

    let virgin3Disc60 = 0;
    let virgin3Disc120 = 0;
    let virgin3Disc240 = 0;
    let virgin3Disc360 = 0;
    let virgin3SG = 0
    let virgin3TotalSpend = virgin3isc + virgin3dis;



    if (virgin3dp60 === true) {
        virgin3Disc60 = -2.5;
        virgin3TotalSpend = virgin3TotalSpend - 60;
    }
    if (virgin3dp120 === true) {
        virgin3Disc120 = -5;
        virgin3TotalSpend = virgin3TotalSpend - 120;
    }
    if (virgin3dp240 === true) {
        virgin3Disc240 = -10;
        virgin3TotalSpend = virgin3TotalSpend - 240;
    }
    if (virgin3dp360 === true) {
        virgin3Disc360 = -15;
        virgin3TotalSpend = virgin3TotalSpend - 360;
    }
   
    
   
    if (virgin3SpendGet === true) {
        if (virgin3UPfront > 0){
            if (virgin3UPfront < 50){
                virgin3UPfront = 0;
            }else{
                virgin3UPfront = virgin3UPfront - 50;
            }
        }else{
            virgin3SG = -2.08;
        } 
    }

    //----------------------------------------------------------
    test = document.getElementById("vtester").innerText = "stop 12"
    //----------------------------------------------------------


    let virgin3TotalBT = virgin3Phone + virgin3Plan + virgin3Disc60 + virgin3Disc120 + virgin3Disc240 + virgin3Disc360 + virgin3SG + virgin3SecondLine + virgin3spc + virgin3Offer1 + virgin3Offer2 + virgin3Offer3 + 0.95;
    let virgin3TotalAT = virgin3TotalBT + (virgin3TotalBT * 0.05);
    let virgin3PhonePerM = virgin3Phone + virgin3Disc60 + virgin3Disc120 + virgin3Disc240 + virgin3Disc360 + virgin3SG;
    let virgin3LeftToSpend = virgin3TotalSpend;


    
    document.getElementById("virgin3TotalBT").innerHTML = "$" + virgin3TotalBT.toFixed(2);
    document.getElementById("virgin3TotalAT").innerHTML = "$" + virgin3TotalAT.toFixed(2);
    document.getElementById("virgin3PhonePerM").innerHTML = "$" + virgin3PhonePerM.toFixed(2);
    document.getElementById("virgin3LeftToSpend").innerHTML = "$" + virgin3LeftToSpend.toFixed(2);
    document.getElementById("virgin3UpfrontTotal").innerHTML = "$" + virgin3UPfront.toFixed(2);

    let virgin2on = document.getElementById("virgin2on").checked;
    let virgin3on = document.getElementById("virgin3on").checked;

    //----------------------------------------------------------
    test = document.getElementById("vtester").innerText = "stop 13"
    //----------------------------------------------------------

    let newVirgin2BT = virgin2TotalBT;
    let newVirgin2AT = virgin2TotalAT;
    let newVirgin2PhonePer = virgin2PhonePerM;
    let newVirgin2Spend = virgin2TotalSpend
    
    let newVirgin3BT = virgin3TotalBT
    let newVirgin3AT = virgin3TotalAT;
    let newVirgin3PhonePer = virgin3PhonePerM;
    let newVirgin3Spend = virgin3TotalSpend

    if (virgin2on == false){
        newVirgin2BT = 0;
        newVirgin2AT = 0;
        newVirgin2PhonePer = 0;
        newVirgin2Spend = 0;
    }

    if (virgin3on == false){
        newVirgin3BT = 0;
        newVirgin3AT = 0;
        newVirgin3PhonePer = 0;
        newVirgin3Spend = 0;
    }

    let virginallBT = virginTotalBT + newVirgin2BT + newVirgin3BT;
    let virginallAT = virginTotalAT + newVirgin2AT + newVirgin3AT;
    let virginallPhonePer = virginPhonePerM + newVirgin2PhonePer + newVirgin3PhonePer;
    let virginallspendget = virginTotalSpend + newVirgin2Spend + newVirgin3Spend;

    document.getElementById("virginallTotalBT").innerText = "$" + virginallBT.toFixed(2);
    document.getElementById("virginallTotalAT").innerText = "$" + virginallAT.toFixed(2);
    document.getElementById("virginallPhonePerM").innerText = "$" + virginallPhonePer.toFixed(2);
    document.getElementById("virginallLeftToSpend").innerText = "$" + virginallspendget.toFixed(2);

    //----------------------------------------------------------
    test = document.getElementById("vtester").innerText = "Code Ran Successfully"
    //----------------------------------------------------------

}





function virginPage() {
    window.location.href="index2.html"
}
function bellPage() {
    window.location.href="index.html"
}
function BellSmallBiz() {
    window.location.href="index3.html"
}
