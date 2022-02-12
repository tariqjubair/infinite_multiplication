
// ==== Calculation Execution ====

function do_math(){

    var fnum = document.getElementById('fnum').value;
    var lnum = document.getElementById('lnum').value;

    var fth = document.getElementById('fth').value;
    var lth = document.getElementById('lth').value;

    var ttl = '';
    var hd = '';

    for (i= parseInt(fnum); i<= parseInt(lnum); i++){
        hd ='Multiplication for ' + '( ' + '<b>' + i + '</b>' + ')' + ' : ' + 'from ' + fth + '*th' + ' to ' + lth + '*th' + '<br>';
  	    ttl += hd + '<br>';
        for (j= parseInt(fth); j<= parseInt(lth); j++){
            ttl += i + ' x ' + j + ' = ' + i*j + '<br>';
            document.getElementById('demo').innerHTML = ttl;
        }
        ttl += '<br>' + '<br>';
    }

}



