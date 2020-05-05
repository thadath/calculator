
var n1 ;
var n2 ;
var op ;
var sb ;
var ans ;
var end = false ;
var op_count = 0 ;
var result1 = 0 ; 

function del() {
    end = false ;
    getNumber(0) ;
}

function back() {
    var res = document.getElementById("result").innerHTML;
    var va = res.length;
    console.log("va=",va) ;
    var x = va - 1 ;
    console.log("x=",x) ;
    var re = res.slice(0, x);
    document.getElementById("result").innerHTML=re;

    if (va===1) {
        document.getElementById("result").innerHTML=0;
    }
}

///////////////////////////////////////////

function zero() {
    getNumber(0) ;
}

function one() {
    getNumber(1) ;
}

function two() {
    getNumber(2) ;
}

function three() {
    getNumber(3) ;
}

function four() {
    getNumber(4) ;
}
    
function five() {
    getNumber(5) ;
}

function six() {
    getNumber(6) ;
}

function seven() {
    getNumber(7) ;
}

function eight() {
    getNumber(8) ;
}

function nine() {
    getNumber(9) ;
}

function dot() {
    getNumber(".") ;                       
}

////////////////////////////////////////////////////////////////////////////

function getNumber(n) {
    var num ; 
    if (end) {
        num = document.getElementById("result").innerHTML + n ;
    }
    else {
        num = n ;
        end = true ;
    }
    document.getElementById("result").innerHTML=num ;
    
    if (num === 0) {
        end = false ;
    }
}

function sub() {
    end = false ;
    op = "-" ;
    n1 = document.getElementById("result").innerHTML ;
    op_count=op_count+1

    console.log("n1=",n1) ;
    console.log("op=",op) ;
}

function add() {
    end = false ;
    op = "+" ;
    n1 = document.getElementById("result").innerHTML ;
    op_count=op_count+1

    console.log("n1=",n1) ;
    console.log("op=",op) ;
    console.log("op_count",op_count)
} 

function multriply() {
    end = false ;
    op = "*" ;
    n1 = document.getElementById("result").innerHTML ;
    op_count=op_count+1

    console.log("n1=",n1) ;
    console.log("op=",op) ;
}

function divise() {
    end = false ;
    op = "/" ;
    n1 = document.getElementById("result").innerHTML ;
    op_count=op_count+1

    console.log("n1=",n1) ;
    console.log("op=",op) ;
}

function iss() {
    end = false ;
    n2 = document.getElementById("result").innerHTML ;

    if ((op==="+")&&(op_count===1)){
        result1 = parseFloat(n1) + parseFloat   (n2) ;                    
    }
    else if ((op==="+")&&(op_count>1)){
        result1 = parseFloat(result1) + parseFloat   (n2) ;   
    }

    if ((op==="-")&&(op_count===1)){
        result1 = parseFloat(n1) - parseFloat   (n2) ;                    
    }
    else if ((op==="-")&&(op_count>1)){
        result1 = parseFloat(result1) - parseFloat   (n2) ;   
    }

    if ((op==="*")&&(op_count===1)){
        result1 = parseFloat(n1) * parseFloat   (n2) ;                    
    }
    else if ((op==="*")&&(op_count>1)){
        result1 = parseFloat(result1) * parseFloat   (n2) ;   
    }

    if ((op==="/")&&(op_count===1)){
        result1 = parseFloat(n1) / parseFloat   (n2) ;                    
    }
    else if ((op==="/")&&(op_count>1)){
        result1 = parseFloat(result1) / parseFloat   (n2) ;   
    }
    document.getElementById("result").innerHTML=result1 ;
    console.log("iss n1=",n1) ;
    console.log("iss n2=",n2) ;
    console.log("iss op=",op) ;
    console.log("iss result1=",result1) ;
}