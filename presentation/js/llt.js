var LLT = function(p) {
    var s = BigInteger(4);
    var M = BigInteger(2).pow(p).subtract(1);
    for (var i=0; i < (p-2); i++) {
        s = s.square().subtract(2).remainder(M);
    }
    if (s.compare(0) == 0) { // if (s == 0) {
        return true
    } else {                 // } else {
        return false
    }                        // }
}
var RunLLT = function(i,max) {
    a = TimeLLT(i)
    if (a["result"] == true) {
       document.getElementById("LLTBox").innerHTML += "Found prime, p=" + i + " (" + a["elapsed"] + " msec)<br>" 
    } else {
       document.getElementById("LLTBox-Bad").innerHTML += i + " "; 
    }
    if (i < max) {
        setTimeout("RunLLT("+(i+2)+","+max+")", 5);
    }
}
var TimeLLT = function(i) {
    var begin = (new Date()).getTime()
    if (LLT(i) == true) {
       var after = (new Date()).getTime() - begin;
       return {"result": true, "elapsed": after}
    } else {
       var after = (new Date()).getTime() - begin;
       return {"result": false, "elapsed": after}
    }
}
