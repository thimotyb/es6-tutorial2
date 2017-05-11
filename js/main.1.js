import * as mortgage from './mortgage';

document.getElementById('calcBtn').addEventListener('click', () => {
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;
    
    //let { monthlyPayment, monthlyRate } = calculateMonthlyPayment(principal, years, rate);
    let { monthlyPayment, monthlyRate, amortization} = mortgage.calculateAmortization(principal, years, rate);
    
    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
    document.getElementById("monthlyRate").innerHTML = (monthlyRate * 100);

    amortization.forEach((item) => { console.log(item)});

});