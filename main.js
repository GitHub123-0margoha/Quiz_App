// // Select Elements
// const countSpan = document.querySelector(".count span");
// const categorySpan = document.querySelector(".quiz-info .category span");
// const spansContainar = document.querySelector(".bullets .spans");
// let quizArea = document.querySelector(".quize-area");
// let answersArea = document.querySelector(".answers-area");
// let submitButton = document.querySelector(".submit-botton");
// let result = document.querySelector(".results");
// let countdowenElement = document.querySelector(".count-down");


// // Set Option
// let currentIndex = 0;
// let currentQuetion = [];
// let theRightAnsewrs = 0;
// let numOfQuestions = 0;
// let countDowenInterval;

// // Fetch Questions
// function getQuestion() {
//     fetch("html_guestion.json")
//         .then(response => response.json())
//         .then(data => {
//             let quizData = data.quiz;

//             // اختيار فئة عشوائية
            
//             const categories = Object.keys(quizData);
//             const randomCategory = categories[Math.floor(Math.random() * categories.length)];

//             // عرض اسم الفئة في الـ span
//             categorySpan.textContent = randomCategory;

//             // حساب عدد الأسئلة داخل الفئة المختارة
//             numOfQuestions = quizData[randomCategory].length;

//             // استخراج الاسئله من Category المختاره
//             let currentQuetion = quizData[randomCategory];

//             // عرض عدد الأسئلة في countSpan
//             countSpan.textContent = numOfQuestions;

//             // استدعاء creatBullets وتمرير عدد الأسئلة إليها
//             creatBullets(numOfQuestions);
            
//             // Add Quetion Data
//             addQutionData(currentQuetion[currentIndex] , numOfQuestions);

//             // start count dowen
//             countDowen(15 , numOfQuestions);

//             // Clic Submit Button
//             submitButton.onclick = function () {
//                 // الحصول على الإجابة الصحيحة
//                 let rightAnswer = currentQuetion[currentIndex].answer;
                
//                 // التحقق من الإجابة
//                 checkAnswer(rightAnswer, numOfQuestions);
            
//                 // زيادة الفهرس للانتقال إلى السؤال التالي
//                 currentIndex++;
            
//                 // مسح السؤال والإجابات السابقة
//                 quizArea.innerHTML = "";
//                 answersArea.innerHTML = "";
            
//                 // التحقق مما إذا كانت الأسئلة انتهت
//                 if (currentIndex < numOfQuestions) {
//                     addQutionData(currentQuetion[currentIndex], numOfQuestions);
//                     handelBullets();
//                     // start count dowen After Click
//                     clearInterval(countDowenInterval);
//                     countDowen(15 , numOfQuestions);
//                 } else {
//                     showResults();
//                 }
//             };
            
//         })
//         .catch(error => console.error("Error fetching data:", error));
// }

// // دالة إنشاء النقاط (Bullets)
// function creatBullets(num) {
//     spansContainar.innerHTML = ""; // تنظيف الـ div قبل الإضافة

//     for (let i = 1; i <= num; i++) {
//         let theBullets = document.createElement("span");
//         if (i === 1) {
//             theBullets.className = 'on';
//         }
//         spansContainar.appendChild(theBullets);
//     }
// }

// // تشغيل الدالة عند تحميل الصفحة
// getQuestion();

// function addQutionData(obj, count) {
    
//     if (currentIndex < count) {

//         // تنظيف المنطقة قبل إضافة السؤال الجديد
//         quizArea.innerHTML = "";
//         answersArea.innerHTML = "";
//         // إنشاء عنوان السؤال
//         let questionTitle = document.createElement("h2");
//         let questionText = document.createTextNode(obj["question"]);
//         questionTitle.appendChild(questionText);
//         quizArea.appendChild(questionTitle);
    
//         // إنشاء الاختيارات
//         obj.options.forEach((option, index) => {
//             // إنشاء العنصر الرئيسي للإجابة
//             let mainDiv = document.createElement("div");
//             mainDiv.className = "answer";
    
//             // إنشاء زر الراديو
//             let radioInput = document.createElement("input");
//             radioInput.name = "question";
//             radioInput.type = "radio";
//             radioInput.id = `answer_${index}`;
//             radioInput.value = option; // قيمة الإجابة
//             radioInput.dataset.answer = option; // لحفظ الإجابة المختارة
    
//             // Make First Option Selectsd 
//             if (index === 0) {
//                 radioInput.checked = true;
//             }
    
//             // إنشاء التسمية (Label)
//             let theLabel = document.createElement("label");
//             theLabel.htmlFor = `answer_${index}`;
    
//             // إضافة نص الإجابة إلى التسمية
//             let labelText = document.createTextNode(option);
//             theLabel.appendChild(labelText);
    
//             // إضافة العناصر إلى الـ Div الرئيسي
//             mainDiv.appendChild(radioInput);
//             mainDiv.appendChild(theLabel);
    
//             // إضافة الإجابة إلى منطقة الإجابات
//             answersArea.appendChild(mainDiv);
//         });
//     }

// }

// function checkAnswer(aAnswer , count) { // count ده عدد الاسئله
//     let answers = document.getElementsByName("question"); // بنستدعي كل inputs عن طريق الاسم الي احنا ادنهوله
//     let choosenAnswer;

//     for (let i =0; i < answers.length; i++) {
//         if (answers[i].checked) {
//             choosenAnswer = answers[i].dataset.answer;
//         }
//     }
    
//     if (aAnswer === choosenAnswer) {
//         theRightAnsewrs++;
//     }
// }

// function handelBullets() {
//     let bulletsSpans = document.querySelectorAll(".bullets .spans span");
//     let arreyFromSpans = Array.from(bulletsSpans);

//     arreyFromSpans.forEach((span , index) => {
//         if (currentIndex === index) {
//             span.className = "on";
//         }
//     });
// }

// function showResults() {
//     quizArea.innerHTML = "";
//     answersArea.innerHTML = "";
//     submitButton.remove(); // حذف زر الإرسال عند انتهاء الاختبار
//     answersArea.remove();
//     quizArea.remove();

//     let resultMessage;
//     if (theRightAnsewrs === numOfQuestions) {
//         resultMessage = `<span class="perfect">excellent! 🎉 You answered all the questions correctly.</span>`;
//     } else if (theRightAnsewrs >= numOfQuestions / 2) {
//         resultMessage = `<span class="good">good! I have answered ${theRightAnsewrs} From ${numOfQuestions} correctly.</span>`;
//     } else {
//         resultMessage = `<span class="bad">I have answered ${theRightAnsewrs} From ${numOfQuestions}. Try again! 😢</span>`;
//     }

//     result.innerHTML = `<h2>Result: ${theRightAnsewrs} From ${numOfQuestions}</h2>${resultMessage}`;
// }

// function countDowen(duration , count) {
//     clearInterval(countDowenInterval);
//     if (currentIndex < count) {
//         let minuets , seconds;

//         function ubdatCountDowen() {

//             minuets = parseInt(duration / 60); // parsInt هتديني عدد صحيح
//             seconds = parseInt(duration % 60); // هنا هنجيب باقي القسمه

//             minuets = minuets < 10 ? `0${minuets}`:minuets;
//             seconds = seconds < 10 ? `0${seconds}`:seconds;

//             countdowenElement.innerHTML = `${minuets}:${seconds}`;

//             if (duration === 0) {
//                 clearInterval(countDowenInterval); // عشان يوقف العداد
//                 submitButton.click(); // معناها بعد متخلص عد اضغط علي زرار submit اوتوماتيك
//             }
//             duration--;
//         };
//         ubdatCountDowen();
//         countDowenInterval = setInterval(ubdatCountDowen , 1000)
//     }
// }






// Select Elements
const countSpan = document.querySelector(".count span");
const categorySpan = document.querySelector(".quiz-info .category span");
const spansContainar = document.querySelector(".bullets .spans");
let quizArea = document.querySelector(".quize-area");
let answersArea = document.querySelector(".answers-area");
let submitButton = document.querySelector(".submit-botton");
let result = document.querySelector(".results");
let countdowenElement = document.querySelector(".count-down");


// Set Option
let currentIndex = 0;
let currentQuetion = [];
let theRightAnsewrs = 0;
let numOfQuestions = 0;
let countDowenInterval;

// Fetch Questions
function getQuestion() {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(response => response.json())
        .then(data => {
            // تحقق مما إذا كان `results` موجودًا في البيانات المسترجعة
            if (!data.results || data.results.length === 0) {
                throw new Error("No questions found in API response.");
            }

            let quizData = data.results; // الحصول على الأسئلة

            // تعيين التصنيف الصحيح من أول سؤال
            categorySpan.textContent = quizData[0].category; 

            numOfQuestions = quizData.length; // عدد الأسئلة
            countSpan.textContent = numOfQuestions; // عرض العدد في الواجهة

            // بدء الاختبار بأول سؤال
            addQutionData(quizData[currentIndex], numOfQuestions);
            creatBullets(numOfQuestions);
            countDowen(15, numOfQuestions);

            // عند الضغط على زر الإجابة
            submitButton.onclick = function () {
                let rightAnswer = quizData[currentIndex].correct_answer;
                checkAnswer(rightAnswer, numOfQuestions);

                currentIndex++;
                quizArea.innerHTML = "";
                answersArea.innerHTML = "";

                if (currentIndex < numOfQuestions) {
                    addQutionData(quizData[currentIndex], numOfQuestions);
                    handelBullets();
                    clearInterval(countDowenInterval);
                    countDowen(15, numOfQuestions);
                } else {
                    showResults();
                }
            };
        })
        .catch(error => console.error("Error fetching data:", error));
}


// دالة إنشاء النقاط (Bullets)
function creatBullets(num) {
    spansContainar.innerHTML = ""; // تنظيف الـ div قبل الإضافة

    for (let i = 1; i <= num; i++) {
        let theBullets = document.createElement("span");
        if (i === 1) {
            theBullets.className = 'on';
        }
        spansContainar.appendChild(theBullets);
    }
}

// تشغيل الدالة عند تحميل الصفحة
getQuestion();

function addQutionData(obj, count) {
    if (currentIndex < count) {
        quizArea.innerHTML = "";
        answersArea.innerHTML = "";

        let questionTitle = document.createElement("h2");
        questionTitle.textContent = obj.question;
        quizArea.appendChild(questionTitle);

        // دمج الإجابات الصحيحة والخاطئة ثم ترتيبها عشوائيًا
        let answers = [...obj.incorrect_answers, obj.correct_answer].sort(() => Math.random() - 0.5);

        answers.forEach((option, index) => {
            let mainDiv = document.createElement("div");
            mainDiv.className = "answer";

            let radioInput = document.createElement("input");
            radioInput.name = "question";
            radioInput.type = "radio";
            radioInput.id = `answer_${index}`;
            radioInput.value = option;
            radioInput.dataset.answer = option;

            if (index === 0) {
                radioInput.checked = true;
            }

            let theLabel = document.createElement("label");
            theLabel.htmlFor = `answer_${index}`;
            theLabel.textContent = option;

            mainDiv.appendChild(radioInput);
            mainDiv.appendChild(theLabel);
            answersArea.appendChild(mainDiv);
        });
    }
}


function checkAnswer(aAnswer , count) { // count ده عدد الاسئله
    let answers = document.getElementsByName("question"); // بنستدعي كل inputs عن طريق الاسم الي احنا ادنهوله
    let choosenAnswer;

    for (let i =0; i < answers.length; i++) {
        if (answers[i].checked) {
            choosenAnswer = answers[i].dataset.answer;
        }
    }
    
    if (aAnswer === choosenAnswer) {
        theRightAnsewrs++;
    }
}

function handelBullets() {
    let bulletsSpans = document.querySelectorAll(".bullets .spans span");
    let arreyFromSpans = Array.from(bulletsSpans);

    arreyFromSpans.forEach((span , index) => {
        if (currentIndex === index) {
            span.className = "on";
        }
    });
}

function showResults() {
    quizArea.innerHTML = "";
    answersArea.innerHTML = "";
    submitButton.remove(); // حذف زر الإرسال عند انتهاء الاختبار
    answersArea.remove();
    quizArea.remove();

    let resultMessage;
    if (theRightAnsewrs === numOfQuestions) {
        resultMessage = `<span class="perfect">excellent! 🎉 You answered all the questions correctly.</span>`;
    } else if (theRightAnsewrs >= numOfQuestions / 2) {
        resultMessage = `<span class="good">good! I have answered ${theRightAnsewrs} From ${numOfQuestions} correctly.</span>`;
    } else {
        resultMessage = `<span class="bad">I have answered ${theRightAnsewrs} From ${numOfQuestions}. Try again! 😢</span>`;
    }

    result.innerHTML = `<h2>Result: ${theRightAnsewrs} From ${numOfQuestions}</h2>${resultMessage}`;
}

function countDowen(duration, count) {
    clearInterval(countDowenInterval);
    
    function updateCountDowen() {
        let minutes = Math.floor(duration / 60);
        let seconds = duration % 60;

        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        countdowenElement.innerHTML = `${minutes}:${seconds}`;

        if (duration === 0) {
            clearInterval(countDowenInterval);
            submitButton.click();
        }
        duration--;
    }

    updateCountDowen();
    countDowenInterval = setInterval(updateCountDowen, 1000);
}

