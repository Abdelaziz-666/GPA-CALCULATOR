let subjectName = document.getElementById("subjectName");
let creditHours = document.getElementById("creditHours");
let grade = document.getElementById("grade");
let addSubject = document.getElementById("addSubject");
let deleteSub = document.getElementById("deleteSub");
let clear = document.getElementById("clear");
let calculate = document.getElementById("calculate");
let small = document.getElementById("small");
let GPA = 0;
let table = document.getElementById("table");

/*
function to create
function to delete
function to calculate
function to clear
*/
let newSubjects = [];
addSubject.onclick = function create(){
    let gradeValue = getGradeValue(grade.value);
    
    let newsubject = {
        subjectName:subjectName.value,
        creditHours: Number(creditHours.value),
        grade:grade.value,
        gradeValue: gradeValue
        
    };
     newSubjects.push(newsubject)
     showData()
     clearDataInputs()
};
   

function showData(){
    let Table = '';
    for (let i = 0; i < newSubjects.length; i++) {
        Table += `
            <tr>
                <td>${newSubjects[i].subjectName}</td>
                <td>${newSubjects[i].creditHours}</td>
                <td>${newSubjects[i].grade}</td>
            </tr>
        `;
        table.innerHTML = 
        ` <tr>
            <th>Subject Name</th>
            <th>Credit Hours</th>
            <th>Grade</th>
        </tr>   ` + Table ;

   

    };

    
};
showData();
    

function clearDataInputs(){
    subjectName.value = "";
    creditHours.value = "";
    grade.value = "";
    


};



function clearAllData(){

    newSubjects.splice(0);
    
    clearDataInputs();
    showData();
    table.innerHTML = 
        ` <tr>
            <th>Subject Name</th>
            <th>Credit Hours</th>
            <th>Grade</th>
        </tr>   `
};



function deletedata(){
    newSubjects.splice(-1, 1);
    showData();

    }
    function getGradeValue(grade) {
        switch (grade) {
            case "A+": return 4;
            case "A": return 3.7;
            case "A-": return 3.4;
            case "B+": return 3.2;
            case "B": return 3;
            case "B-": return 2.8;
            case "C+": return 2.6;
            case "C": return 2.4;
            case "C-": return 2.2;
            case "D+": return 2;
            case "D": return 1.5;
            case "D-": return 1;
            case "F": return 0;
            default: return 0; 
        }
    }



function calculateGPA() {
    let totalCredits = 0;
    let totalGradePoints = 0;
    for (let i = 0; i < newSubjects.length; i++) {
        totalGradePoints += newSubjects[i].gradeValue * newSubjects[i].creditHours;
        totalCredits += newSubjects[i].creditHours;
    }

        if (totalCredits === 0) {
            GPA = 0;
        } else {
        GPA = totalGradePoints / totalCredits;
        }
    small.innerHTML = "GPA: " + GPA.toFixed(2);
    
}

