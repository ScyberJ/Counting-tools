let counter = 0;
const incrementCounter = document.querySelector('.increment');
const primeCounter = document.querySelector('.prime');
const fibCounter = document.querySelector('.fib');
incrementCounter.innerHTML = counter;
primeCounter.innerHTML = counter;
fibCounter.innerHTML = counter;

function increment () {
    let incount = incrementCounter.innerHTML
    incount++
    incrementCounter.innerHTML = incount
}
function decrement () {
    let decount = incrementCounter.innerHTML
    if (decount > 0) {
        decount--
        incrementCounter.innerHTML = decount
    }
}
function addPrime () {
    let primeAdder = primeCounter.innerHTML
    primeAdder++
    let primeDecider = false;
    let primeCheck = 0;
    if (primeAdder == 0){
        primeAdder = 2
    }
    else{
        while(primeDecider == false){
            primeCheck = 0
            for (let i = (primeAdder - 1); i > 1; i--){
                if (primeAdder%i == 0){
                    primeCheck++
                }
            }
            if (primeCheck == 0){
                primeDecider = true
            }
            else{
                primeAdder++
            }
        }
        
    }
    
    primeCounter.innerHTML = primeAdder
}
function subPrime () {
    let primeSubber = primeCounter.innerHTML
    if (primeSubber > 2){
        primeSubber--
        let primeDecider = false;
        let primeCheck = 0;
        while(primeDecider == false){
            primeCheck = 0
            for (let i = (primeSubber - 1); i > 1; i--){
                if (primeSubber%i == 0){
                    primeCheck++
                }
            }
            if (primeCheck == 0){
                primeDecider = true
            }
            else{
                primeSubber--
            }
        }
        
    }

    
    primeCounter.innerHTML = primeSubber
}

let placeHolder = 0
function incrementFib () {
    let inFib = parseInt(fibCounter.innerHTML)
    if (inFib == 0){
        inFib += 1;
    }
    else{
        let temp = inFib
        inFib = temp + placeHolder
        placeHolder = temp

    }
    fibCounter.innerHTML = inFib
    }
    
function decrementFib () {
    let defib = fibCounter.innerHTML
    if (defib > 0) {
        let dif = defib - placeHolder
        defib = placeHolder
        placeHolder = dif
        fibCounter.innerHTML = defib
    }
}
let resetter = 0
function toPrime () {
    const arr = ['.incrementer', '.primer', '.fibonacci']
    if (resetter == 2){
        document.querySelector(arr[resetter]).className += ' beGone'
        document.querySelector(arr[0]).className = document.querySelector(arr[0]).className.replace(' beGone', '')
        document.querySelectorAll('.counter')[0].textContent = 0
        resetter = 0
    }
    else{
        document.querySelector(arr[resetter]).className += ' beGone'
        document.querySelector(arr[resetter + 1]).className = document.querySelector(arr[resetter + 1]).className.replace(' beGone', '')
        document.querySelectorAll('.counter')[resetter + 1].textContent = 0
        resetter++
    }

    console.log(document.querySelectorAll('.counter')[0].textContent)
    
}


