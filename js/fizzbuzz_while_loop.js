/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x <= 20) {
    // check divisibility
    // print Julia, James, or JuliaJames
    // increment x
    // console.log(x);

    if ((x % 3 === 0) && (x % 5 === 0)) {
        console.log("JuliaJames");
    }
    
    else if (x % 3 === 0) {
        console.log("Julia");
    }
    
    else if (x % 5 === 0) {
        console.log("James");
    }
    
    else {
        console.log(x);
    }
    
    x = x + 1;
}
