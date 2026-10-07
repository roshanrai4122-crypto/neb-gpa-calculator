// ======================================================
// NEBGPT AI CALCULATOR
// NEB CLASS 12 SCIENCE GPA CALCULATION
// ======================================================


// ======================================================
// 1. GRADE POINTS
// ======================================================

const gradeScale = {
    "A+": 4.0,
    "A": 3.6,
    "B+": 3.2,
    "B": 2.8,
    "C+": 2.4,
    "C": 2.0,
    "D": 1.6,
    "NG": 0.0
};


// ======================================================
// 2. SUBJECT DATA
// ======================================================

const subjects = {

    english: {
        name: "Compulsory English",
        code: "0041",
        theoryMarks: 75,
        practicalMarks: 25,
        theoryCredits: 3,
        practicalCredits: 1
    },

    nepali: {
        name: "Compulsory Nepali",
        code: "0021",
        theoryMarks: 75,
        practicalMarks: 25,
        theoryCredits: 2.25,
        practicalCredits: 0.75
    },

    mathematics: {
        name: "Mathematics",
        code: "0081",
        theoryMarks: 75,
        practicalMarks: 25,
        theoryCredits: 3.75,
        practicalCredits: 1.25
    },

    physics: {
        name: "Physics",
        code: "1021",
        theoryMarks: 75,
        practicalMarks: 25,
        theoryCredits: 3.75,
        practicalCredits: 1.25
    },

    chemistry: {
        name: "Chemistry",
        code: "1041",
        theoryMarks: 75,
        practicalMarks: 25,
        theoryCredits: 3.75,
        practicalCredits: 1.25
    },

    biology: {
        name: "Biology",
        code: "2021",
        theoryMarks: 75,
        practicalMarks: 25,
        theoryCredits: 3.75,
        practicalCredits: 1.25
    },

    computerScience: {
        name: "Computer Science",
        code: "4281",
        theoryMarks: 75,
        practicalMarks: 25,
        theoryCredits: 3.75,
        practicalCredits: 1.25
    }
};


// ======================================================
// 3. SCIENCE STREAM
// ======================================================

const scienceSubjects = [
    "english",
    "nepali",
    "mathematics",
    "physics",
    "chemistry"
];

const scienceOptionalSubjects = [
    "biology",
    "computerScience"
];


// ======================================================
// 4. HTML ELEMENTS
// ======================================================

const studentNameInput =
    document.getElementById("studentName");

const streamSelect =
    document.getElementById("stream");

const optionalSection =
    document.getElementById("optionalSection");

const optionalSubjectsContainer =
    document.getElementById("optionalSubjects");

const optionalDescription =
    document.getElementById("optionalDescription");

const subjectsSection =
    document.getElementById("subjectsSection");

const subjectsContainer =
    document.getElementById("subjectsContainer");

const calculateSection =
    document.getElementById("calculateSection");

const calculateButton =
    document.getElementById("calculateButton");

const resultSection =
    document.getElementById("resultSection");

const overallGpa =
    document.getElementById("overallGpa");

const overallGrade =
    document.getElementById("overallGrade");

const totalCredits =
    document.getElementById("totalCredits");

const resultTableBody =
    document.getElementById("resultTableBody");

const marksheetStudent =
    document.getElementById("marksheetStudent");

const marksheetStream =
    document.getElementById("marksheetStream");

const marksheetDate =
    document.getElementById("marksheetDate");

const printButton =
    document.getElementById("printButton");

const resetButton =
    document.getElementById("resetButton");


// ======================================================
// 5. CURRENT SELECTION
// ======================================================

let selectedStream = "";

let selectedOptionalSubject = "";


// ======================================================
// 6. STREAM SELECTION
// ======================================================

streamSelect.addEventListener(
    "change",
    function () {

        selectedStream =
            streamSelect.value;

        selectedOptionalSubject = "";


        optionalSubjectsContainer.innerHTML = "";

        subjectsContainer.innerHTML = "";

        resultSection.classList.add("hidden");

        subjectsSection.classList.add("hidden");

        calculateSection.classList.add("hidden");


        if (!selectedStream) {

            optionalSection.classList.add("hidden");

            return;
        }


        // For this version,
        // Science is fully configured.

        if (selectedStream === "science") {

            optionalSection.classList.remove("hidden");

            optionalDescription.textContent =
                "Select one optional subject.";

            createOptionalSubjects();

        }

    }
);


// ======================================================
// 7. CREATE OPTIONAL SUBJECT OPTIONS
// ======================================================

function createOptionalSubjects() {

    optionalSubjectsContainer.innerHTML = "";


    scienceOptionalSubjects.forEach(
        function (subjectId) {

            const subject =
                subjects[subjectId];


            const label =
                document.createElement("label");

            label.className =
                "optional-choice";


            const radio =
                document.createElement("input");

            radio.type = "radio";

            radio.name =
                "optionalSubject";

            radio.value =
                subjectId;


            const information =
                document.createElement("div");

            information.className =
                "optional-information";


            const name =
                document.createElement("strong");

            name.textContent =
                subject.name;


            const details =
                document.createElement("small");

            details.textContent =
                "Subject Code: " +
                subject.code;


            information.appendChild(name);

            information.appendChild(details);


            label.appendChild(radio);

            label.appendChild(information);


            optionalSubjectsContainer.appendChild(label);


            radio.addEventListener(
                "change",
                function () {

                    selectedOptionalSubject =
                        subjectId;

                    displayScienceSubjects();

                }
            );

        }
    );
}


// ======================================================
// 8. DISPLAY SCIENCE SUBJECTS
// ======================================================

function displayScienceSubjects() {

    subjectsContainer.innerHTML = "";


    // Add compulsory subjects

    scienceSubjects.forEach(
        function (subjectId) {

            createSubjectCard(subjectId);

        }
    );


    // Add selected optional subject

    if (selectedOptionalSubject) {

        createSubjectCard(
            selectedOptionalSubject
        );

    }


    subjectsSection.classList.remove(
        "hidden"
    );

    calculateSection.classList.remove(
        "hidden"
    );


    subjectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// ======================================================
// 9. CREATE SUBJECT CARD
// ======================================================

function createSubjectCard(subjectId) {

    const subject =
        subjects[subjectId];


    const card =
        document.createElement("div");

    card.className =
        "subject-card";


    // --------------------------------------------------
    // SUBJECT HEADER
    // --------------------------------------------------

    const header =
        document.createElement("div");

    header.className =
        "subject-header";


    const information =
        document.createElement("div");


    const name =
        document.createElement("div");

    name.className =
        "subject-name";

    name.textContent =
        subject.name;


    const code =
        document.createElement("div");

    code.className =
        "subject-code";

    code.textContent =
        "Subject Code: " +
        subject.code;


    information.appendChild(name);

    information.appendChild(code);


    const creditBadge =
        document.createElement("span");

    creditBadge.className =
        "credit-badge";


    const totalSubjectCredits =
        subject.theoryCredits +
        subject.practicalCredits;


    creditBadge.textContent =
        totalSubjectCredits.toFixed(2) +
        " Credit Hours";


    header.appendChild(information);

    header.appendChild(creditBadge);


    // --------------------------------------------------
    // GRADE INPUT AREA
    // --------------------------------------------------

    const gradeInputs =
        document.createElement("div");

    gradeInputs.className =
        "grade-inputs";


    // THEORY

    const theoryInput =
        createGradeSelect(
            subjectId,
            "theory",
            "Theory",
            subject.theoryMarks
        );


    // PRACTICAL

    const practicalInput =
        createGradeSelect(
            subjectId,
            "practical",
            "Practical / Internal",
            subject.practicalMarks
        );


    gradeInputs.appendChild(
        theoryInput
    );

    gradeInputs.appendChild(
        practicalInput
    );


    // --------------------------------------------------
    // ADD EVERYTHING TO CARD
    // --------------------------------------------------

    card.appendChild(header);

    card.appendChild(gradeInputs);

    subjectsContainer.appendChild(card);
}


// ======================================================
// 10. CREATE GRADE SELECT BOX
// ======================================================

function createGradeSelect(
    subjectId,
    component,
    labelText,
    maximumMarks
) {

    const group =
        document.createElement("div");

    group.className =
        "grade-group";


    const label =
        document.createElement("label");

    label.textContent =
        labelText +
        " (" +
        maximumMarks +
        " marks)";


    const select =
        document.createElement("select");

    select.className =
        "grade-select";


    select.dataset.subject =
        subjectId;

    select.dataset.component =
        component;


    // Default option

    const defaultOption =
        document.createElement("option");

    defaultOption.value = "";

    defaultOption.textContent =
        "Select Grade";


    select.appendChild(
        defaultOption
    );


    // Grade options

    const grades = [
        "A+",
        "A",
        "B+",
        "B",
        "C+",
        "C",
        "D",
        "NG"
    ];


    grades.forEach(
        function (grade) {

            const option =
                document.createElement("option");

            option.value =
                grade;

            option.textContent =
                grade +
                " (" +
                gradeScale[grade] +
                " GP)";


            select.appendChild(option);

        }
    );


    group.appendChild(label);

    group.appendChild(select);


    return group;
}


// ======================================================
// 11. CALCULATE BUTTON
// ======================================================

calculateButton.addEventListener(
    "click",
    calculateResult
);


// ======================================================
// 12. MAIN CALCULATION
// ======================================================

function calculateResult() {

    const studentName =
        studentNameInput.value.trim();


    // Check student name

    if (!studentName) {

        alert(
            "Please enter the student name."
        );

        studentNameInput.focus();

        return;
    }


    // Check stream

    if (!selectedStream) {

        alert(
            "Please select your stream."
        );

        return;
    }


    // Check optional subject

    if (
        selectedStream === "science" &&
        !selectedOptionalSubject
    ) {

        alert(
            "Please select Biology or Computer Science."
        );

        return;
    }


    const gradeSelects =
        document.querySelectorAll(
            ".grade-select"
        );


    const studentGrades = {};


    // --------------------------------------------------
    // READ ALL SELECTED GRADES
    // --------------------------------------------------

    for (
        const select of gradeSelects
    ) {

        const subjectId =
            select.dataset.subject;

        const component =
            select.dataset.component;

        const grade =
            select.value;


        if (!grade) {

            alert(
                "Please select all Theory and Practical grades."
            );

            select.focus();

            return;
        }


        if (
            !studentGrades[subjectId]
        ) {

            studentGrades[subjectId] = {};

        }


        studentGrades[subjectId][component] =
            grade;

    }


    // --------------------------------------------------
    // CALCULATE EACH SUBJECT
    // --------------------------------------------------

    const results = [];


    let totalQualityPoints = 0;


    let totalCreditHours = 0;


    Object.keys(studentGrades)
        .forEach(
            function (subjectId) {

                const subject =
                    subjects[subjectId];


                const grades =
                    studentGrades[subjectId];


                const theoryGP =
                    gradeScale[
                        grades.theory
                    ];


                const practicalGP =
                    gradeScale[
                        grades.practical
                    ];


                // Theory QP

                const theoryQP =
                    theoryGP *
                    subject.theoryCredits;


                // Practical QP

                const practicalQP =
                    practicalGP *
                    subject.practicalCredits;


                // Total QP

                const subjectQP =
                    theoryQP +
                    practicalQP;


                // Total subject credits

                const subjectCredits =
                    subject.theoryCredits +
                    subject.practicalCredits;


                // Final Subject GP

                const subjectGP =
                    subjectQP /
                    subjectCredits;


                // Add to overall total

                totalQualityPoints +=
                    subjectQP;


                totalCreditHours +=
                    subjectCredits;


                results.push({

                    name: subject.name,

                    code: subject.code,

                    theoryGrade:
                        grades.theory,

                    practicalGrade:
                        grades.practical,

                    theoryGP:
                        theoryGP,

                    practicalGP:
                        practicalGP,

                    theoryQP:
                        theoryQP,

                    practicalQP:
                        practicalQP,

                    subjectQP:
                        subjectQP,

                    subjectGP:
                        subjectGP,

                    creditHours:
                        subjectCredits

                });

            }
        );


    // --------------------------------------------------
    // FINAL GPA
    // --------------------------------------------------

    // NEB Science total = 27 credit hours

    const overallGPA =
        totalQualityPoints / 27;


    // --------------------------------------------------
    // OVERALL GRADE
    // --------------------------------------------------

    const finalGrade =
        getGradeFromGPA(overallGPA);


    // --------------------------------------------------
    // DISPLAY SUMMARY
    // --------------------------------------------------

    overallGpa.textContent =
        overallGPA.toFixed(2);


    overallGrade.textContent =
        finalGrade;


    totalCredits.textContent =
        totalCreditHours.toFixed(2);


    // --------------------------------------------------
    // MARKSHEET INFORMATION
    // --------------------------------------------------

    marksheetStudent.textContent =
        "Student Name - " +
        studentName;


    marksheetStream.textContent =
        "Stream - Science";


    marksheetDate.textContent =
        "Issued Date - " +
        getCurrentDate();


    // --------------------------------------------------
    // CREATE RESULT TABLE
    // --------------------------------------------------

    createResultTable(results);


    // Show result

    resultSection.classList.remove(
        "hidden"
    );


    resultSection.scrollIntoView({
        behavior: "smooth"
    });

}


// ======================================================
// 13. CONVERT GPA TO OVERALL GRADE
// ======================================================

function getGradeFromGPA(gpa) {

    if (gpa >= 3.6) {
        return "A+";
    }

    if (gpa >= 3.2) {
        return "A";
    }

    if (gpa >= 2.8) {
        return "B+";
    }

    if (gpa >= 2.4) {
        return "B";
    }

    if (gpa >= 2.0) {
        return "C+";
    }

    if (gpa >= 1.6) {
        return "C";
    }

    if (gpa >= 1.0) {
        return "D";
    }

    return "NG";
}


// ======================================================
// 14. CREATE RESULT TABLE
// ======================================================

function createResultTable(results) {

    resultTableBody.innerHTML = "";


    results.forEach(
        function (result) {

            const row =
                document.createElement("tr");


            row.innerHTML = `

                <td>
                    ${result.name}
                </td>

                <td>
                    ${result.theoryGrade}
                </td>

                <td>
                    ${result.practicalGrade}
                </td>

                <td>
                    ${result.subjectGP.toFixed(2)}
                </td>

                <td>
                    ${result.subjectGP.toFixed(2)}
                </td>

                <td>
                    ${result.creditHours.toFixed(2)}
                </td>

            `;


            resultTableBody.appendChild(row);

        }
    );
}


// ======================================================
// 15. GET CURRENT DATE
// ======================================================

function getCurrentDate() {

    return new Date().toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    );

}


// ======================================================
// 16. PRINT RESULT
// ======================================================

printButton.addEventListener(
    "click",
    function () {

        window.print();

    }
);


// ======================================================
// 17. RESET CALCULATOR
// ======================================================

resetButton.addEventListener(
    "click",
    function () {

        window.location.reload();

    }
);