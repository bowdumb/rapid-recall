const questionContainer = document.getElementById("flash-card-question");
const questionOptions = document.getElementById("question-options");
const startButton = document.getElementById("submit-btn");
let questionText = "";

const cardArr = [
    {
        question: "What are the three components of a traditional for loop?",
        
        options: 
            [
                { label: "A", text: "The Initialization Expression, the Termination Condition, and the Final Expression" },
                { label: "B", text: "The Declaration Statement, the Execution Block, and the Iteration Variable" },
                { label: "C", text: "The Start Condition, the Loop Body, and the End Condition" },
                { label: "D", text: "The Initialization Phase, the Processing Phase, and the Termination Phase" }
            ],
        
        correctAnswerIndex: 0
    },
    {
        question: "What does Array.prototype.push() do?",

        options:
            [
                { label: "A", text: "It removes the last element from an array and returns that element." }, 
                { label: "B", text: "It adds one or more elements to the beginning of an array and returns the new length of the array." },
                { label: "C", text: "It adds one or more elements to the end of an array and returns the new length of the array." },
                { label: "D", text: "It merges two or more arrays into a single array and returns the new combined array." }
        ],

        correctAnswerIndex: 2
    }
];

const { question, options, correctAnswerIndex } = cardArr;


startButton.addEventListener('click', () => {
    questionContainer.style.display = 'none';
    if (questionContainer.style.display === 'none') {
        questionContainer.style.display = 'block';
        randomQuestion(cardArr);
    }

});


const randomQuestion = (cardArr) => {
    randomIndex = Math.floor(Math.random() * cardArr.length);
    cardQuestion = cardArr[randomIndex].question;
    cardOptions = cardArr[randomIndex].options;
    

    questionContainer.textContent = cardQuestion;
    questionOptions.innerHTML = `${cardOptions}`;
    console.log(cardOptions);


    questionOptions.innerHTML = '';

    // forEach loop iterates through the cardOptions array of answers for the user to choose from.
    cardOptions.forEach((option) => {
        // Create a new <div> element to render the options within.
        const optionContainer = document.createElement('div');
        // Create the <li> element that will accompany each option.
        const optionText = document.createElement('p');
        // Sets the content of optionText to display the label and text from the current option using string interpolation.
        optionText.textContent = `${option.label}: ${option.text}`;
        //Appends the optionText to the optionContainer <div>, and the optionContainer within the questionContainer element.

        const answerInput = document.createElement('input');
        answerInput.type = 'radio';
        answerInput.name = 'answer-option';
        answerInput.value = option.label;
        answerInput.id = `option-${option.label}`;

        optionContainer.appendChild(optionText);
        questionContainer.appendChild(optionContainer);
        questionContainer.appendChild(answerInput);


    })


   
}

 // cardOptions.forEach(({ label, text  }) => {
    //     const optionEl = document.createElement('div');
    //     optionEl.classList.add('option');
    // });