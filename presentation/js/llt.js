
String.prototype.commatize = function(){
    var ret = "";
    var j = 0;
    for (var i = this.length - 1; i > -1; i--){
        j++;
        ret = this.charAt(i) + ret;
        if (j % 3 == 0 && j != this.length){ ret = "," + ret;}
    }
    return ret;
}

var LLT = function(p) {
    var s = BigInteger(4);
    var M = BigInteger(2).pow(p).subtract(1);
    for (var i=0; i < (p-2); i++) {
        s = s.square().subtract(2).remainder(M);
    }
    if (s.compare(0) == 0) { // if (s == 0) {
        $("#LLTPrime").html(M.toString().commatize());
        return true
    } else {                 // } else {
        return false
    }                        // }
}
var RunLLT = function(i, sorted) {
    a = TimeLLT(sorted[i])
    if (a["result"] == true) {
        $("#llt-"+sorted[i]).addClass("good");
    } else {
        $("#llt-"+sorted[i]).addClass("bad");
    }
    if (i < sorted.length) {
        setTimeout(function(){RunLLT(i+1,sorted);}, 5);
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

var Sieve = function(max) {
    /* 
     * Fill valid with odd integers between 3 and max,
     * these will be the candidate primes.
     */
    for (var i = 3; i < max; i += 2){
        valid[i] = true;
    }
    /*
     * Now go from 3 to max/2 and remove multiples 
     * from the valid set, the remaining ones will be prime.
     */ 
    sieveLoop(3, max);
}

var sieveLoop = function(i, max){
    var j = i * 2;
    innerSieve(j, i, max);
    if (i < max / 2){
        setTimeout(function(){sieveLoop(i + 2, max);}, 5);
    }
}

var innerSieve = function(j, i, max){
    $("#siv-"+j).addClass("bad");
    delete valid[j];
    if (j <= max){
        setTimeout(function(){innerSieve(j + i, i, max);}, 120);
    }
}

var Generate = function(max_prime){
    $("#siv-2").addClass("good");
    Sieve(max_prime);
    setTimeout(function(){
    for (var i in valid){ 
        $("#siv-"+i).addClass("good");
        $("#LLTBox").append("<span id='llt-"+i+"'>"+i+"</span> ");
    }
    }, 5 * max_prime);
    $("#llt-2").addClass("bad");
}
