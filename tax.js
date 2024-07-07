document.getElementById("salaryForm").addEventListener("submit", function(e) {
    e.preventDefault();

    //gross salary from form
    const grossSalary = +document.getElementById("grossSalary").value;
    
    //calculate payee
 
    const relief = 2400;
    let payee = 0;

    if (grossSalary<=24000){
        payee = grossSalary*0.1;
    }
    else if (grossSalary<=32333){
        payee = relief + (grossSalary-24000 )* 0.25;
    }
    else if (grossSalary<=500000){
        payee = relief + (grossSalary-32333 )* 0.3;
    }
    else if (grossSalary<=800000){
        payee = relief + (grossSalary - 50000)* 0.325;
    }
    else if (grossSalary<=1600000){
        payee = relief + (grossSalary -800000)* 0.35;
    }


    //calculate nssf,

    const tier1 = (grossSalary*0.06);
    const tier2 = (grossSalary-36000)*0.12;
    let nssf = 0;

    if (grossSalary>=7000 && grossSalary<=36000){
        nssf= tier1;
    }
    else {
        nssf= tier1 + tier2;
    }

    //calculate nhif

    let nhif = 0;

    if (grossSalary>=5999){
        nhif = 150;
    }
    else if (grossSalary>=6000 && grossSalary<7999){
        nhif= 300;
    }
    else if (grossSalary>=8000 && grossSalary<11999){
        nhif= 400;
    }
    else if (grossSalary>=12000 && grossSalary<14999){
        nhif= 500;
    }
    else if (grossSalary>=15000 && grossSalary<19999){
        nhif= 600;
    }
    else if (grossSalary>=20000 && grossSalary<24999){
        nhif= 750;
    }
    else if (grossSalary>=25000 && grossSalary<29999){
        nhif= 850;
    }
    else if (grossSalary>=30000 && grossSalary<34999){
        nhif= 950;
    }
    else if (grossSalary>=40000 && grossSalary<44999){
        nhif= 1000;
    }
    else if (grossSalary>=45000 && grossSalary<49999){
        nhif= 1100;
    }
    else if (grossSalary>=50000 && grossSalary<59999){
        nhif= 1200;
    }
    else if (grossSalary>=60000 && grossSalary<69999){
        nhif= 1300;
    }
    else if (grossSalary>=70000 && grossSalary<79999){
        nhif= 1400;
    }
    else if (grossSalary>=80000 && grossSalary<89999){
        nhif= 1500;
    }
    else if (grossSalary>=90000 && grossSalary<99999){
        nhif= 1600;
    }
    else if (grossSalary>50000){
        nhif= 1700;
    }
    
    //calculate netSalary

    const netSalary = grossSalary- payee- nhif- nssf;

    //results display
    document.getElementById("results").innerText = `
    Gross Salary: ${grossSalary}
    PAYEE: ${payee}
    NHIF: ${nhif}
    NSSF: ${nssf}
    Net Salary: ${netSalary}
`;

});

