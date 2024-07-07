document.getElementById("speedForm").addEventListener("submit",function(e){
    e.preventDefault();
    
    //speed from form
    const speed = +document.getElementById("speed").value;

    //calculate demerit points
    function calculateDemeritPoints(speed){
    
        const demeritPointsPerRange = 1;
        const speedLimit = 70;

        let excessSpeed = speed - speedLimit;
        if (excessSpeed <=0){
            return "Your speed is Ok.";
        }

        let demeritPoints = Math.floor(excessSpeed / 5);
        if (demeritPoints <= 12) {
            return `Your speed is ${speed} km/hr. You have received ${demeritPoints} demerits.`;
        }

        else {
            return `Your speed is ${speed} km/hr. Your license has been suspended.`;
        }

    }
    //display results
    const resultMessage = calculateDemeritPoints(speed);
    document.getElementById("carspeed").innerText =`${speed} km/hr`;
    document.getElementById("result").innerText = resultMessage;

});









        
