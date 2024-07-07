document.getElementById("gradeForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    let grade = document.getElementById("grade").value;
    let result;

    if (grade>=79){
        result= "A";
    }
    else if (grade>=60 && grade<79){
        result= "B";
    }
    else if (grade>=49 && grade<60){
        result= "C";
    }
   else if (grade>=40 && grade<49){
        result= "D";
    }
   else {
        result= "E";
    }
  document.getElementById("result").innerText = `Your grade is : ${result}`;
});




