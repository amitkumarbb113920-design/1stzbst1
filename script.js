const lockScreen = document.getElementById("lock-screen");
const mainContent = document.getElementById("main-content");
const secretCode = document.getElementById("secretCode");
const unlockBtn = document.getElementById("unlockBtn");
const codeError = document.getElementById("codeError");

const SECRET_CODE = "Buddi";

mainContent.style.display = "none";

unlockBtn.addEventListener("click", function () {

    if (secretCode.value === SECRET_CODE) {

        lockScreen.style.display = "none";
        mainContent.style.display = "block";

    } else {

        codeError.style.display = "block";
        secretCode.value = "";
        secretCode.focus();

    }

});
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyBzxpXvSbItjir5-YzpQfMfd8In_epC8ls",
    authDomain: "first-is-best.firebaseapp.com",
    projectId: "first-is-best",
    storageBucket: "first-is-best.firebasestorage.app",
    messagingSenderId: "638892589235",
    appId: "1:638892589235:web:9d4227ddf7ec2775bff0c6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const proceedBtn = document.getElementById("proceedBtn");

const welcomeCard = document.querySelector(".welcome-card");
const nextScreen = document.getElementById("next-screen");
const thirdScreen = document.getElementById("third-screen");
const fourthScreen = document.getElementById("fourth-screen");
const fifthScreen = document.getElementById("fifth-screen");
const sixthScreen = document.getElementById("sixth-screen");
const finalScreen = document.getElementById("final-screen");
const finalPrevBtn = document.getElementById("finalPrevBtn");

const storyContinueBtn =
    document.getElementById("storyContinueBtn");

const prevBtn =
    document.getElementById("prevBtn");

const thirdContinueBtn =
    document.getElementById("thirdContinueBtn");

const thirdPrevBtn =
    document.getElementById("thirdPrevBtn");

const fourthContinueBtn =
    document.getElementById("fourthContinueBtn");

const fourthPrevBtn =
    document.getElementById("fourthPrevBtn");

const fifthContinueBtn =
    document.getElementById("fifthContinueBtn");

const fifthPrevBtn =
    document.getElementById("fifthPrevBtn");

const yesBtn =
    document.getElementById("yesBtn");

const noBtn =
    document.getElementById("noBtn");

const reasonSection =
    document.getElementById("reason-section");

const reason =
    document.getElementById("reason");

const reasonError =
    document.getElementById("reason-error");

const sixthContinueBtn =
    document.getElementById("sixthContinueBtn");

const sixthPrevBtn =
    document.getElementById("sixthPrevBtn");

const seventhScreen =
    document.getElementById("seventh-screen");

const submitBtn =
    document.getElementById("submitBtn");

const seventhPrevBtn =
    document.getElementById("seventhPrevBtn");


let selectedAnswer = "";


// ===============================
// SCREEN 1 → SCREEN 2
// ===============================

proceedBtn.addEventListener("click", function () {

    welcomeCard.style.display = "none";
    nextScreen.style.display = "block";

});


// ===============================
// SCREEN 2 → SCREEN 1
// ===============================

prevBtn.addEventListener("click", function () {

    nextScreen.style.display = "none";
    welcomeCard.style.display = "block";

});


// ===============================
// SCREEN 2 → SCREEN 3
// ===============================

storyContinueBtn.addEventListener("click", function () {

    nextScreen.style.display = "none";
    thirdScreen.style.display = "block";

});


// ===============================
// SCREEN 3 → SCREEN 2
// ===============================

thirdPrevBtn.addEventListener("click", function () {

    thirdScreen.style.display = "none";
    nextScreen.style.display = "block";

});


// ===============================
// SCREEN 3 → SCREEN 4
// ===============================

thirdContinueBtn.addEventListener("click", function () {

    thirdScreen.style.display = "none";
    fourthScreen.style.display = "block";

});


// ===============================
// SCREEN 4 → SCREEN 3
// ===============================

fourthPrevBtn.addEventListener("click", function () {

    fourthScreen.style.display = "none";
    thirdScreen.style.display = "block";

});


// ===============================
// SCREEN 4 → SCREEN 5
// ===============================

fourthContinueBtn.addEventListener("click", function () {

    fourthScreen.style.display = "none";
    fifthScreen.style.display = "block";

});


// ===============================
// YES BUTTON
// ===============================

yesBtn.addEventListener("click", function () {

    selectedAnswer = "YES";

    yesBtn.classList.add("selected");
    noBtn.classList.remove("selected");

    reasonSection.style.display = "block";

    reasonError.style.display = "none";

    reason.focus();

});


// ===============================
// NO BUTTON
// ===============================

noBtn.addEventListener("click", function () {

    selectedAnswer = "NO";

    noBtn.classList.add("selected");
    yesBtn.classList.remove("selected");

    reasonSection.style.display = "block";

    reasonError.style.display = "none";

    reason.focus();

});


// ===============================
// SCREEN 5 → SCREEN 6
// ===============================

fifthContinueBtn.addEventListener("click", function () {

    // Check YES / NO

    if (selectedAnswer === "") {

        reasonError.textContent =
            "Choose YES or NO before continuing.";

        reasonError.style.display = "block";

        return;
    }


    // Check reason

    if (reason.value.trim() === "") {

        reasonError.textContent =
            "I'd really like to know your reason before you continue.";

        reasonError.style.display = "block";

        reason.focus();

        return;
    }


    // Everything is valid

    reasonError.style.display = "none";

    fifthScreen.style.display = "none";
    sixthScreen.style.display = "block";

});


// ===============================
// SCREEN 5 → SCREEN 4
// ===============================

fifthPrevBtn.addEventListener("click", function () {

    fifthScreen.style.display = "none";
    fourthScreen.style.display = "block";

});


// ===============================
// SCREEN 6 → SCREEN 5
// ===============================

sixthPrevBtn.addEventListener("click", function () {

    sixthScreen.style.display = "none";
    fifthScreen.style.display = "block";

});


// ===============================
// SCREEN 6 → SCREEN 7
// ===============================

sixthContinueBtn.addEventListener("click", function () {

    sixthScreen.style.display = "none";
    seventhScreen.style.display = "block";

});
seventhPrevBtn.addEventListener("click", function () {

    seventhScreen.style.display = "none";
    sixthScreen.style.display = "block";

});

// FINISH → SAVE RESPONSE TO FIRESTORE

submitBtn.addEventListener("click", async function () {

    try {

        await addDoc(collection(db, "responses"), {

            relationshipAnswer: selectedAnswer,

            reason: reason.value.trim(),

            careerPlan: document
                .getElementById("careerPlan")
                .value
                .trim(),

            marriagePlan: document
                .getElementById("marriagePlan")
                .value
                .trim(),

            submittedAt: serverTimestamp()

        });

       seventhScreen.style.display = "none";
finalScreen.style.display = "block";

    } catch (error) {

        console.error("Error saving response:", error);

        alert("Something went wrong while saving your response.");

    }

});
finalPrevBtn.addEventListener("click", function () {
    finalScreen.style.display = "none";
    seventhScreen.style.display = "block";
});
