const flashCard = document.getElementById("flash-card");
const startButton = document.getElementById("start-button");
const cardText = document.getElementById("card-text");
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
                { label: "B", text: "It adds one or more elements to the end of an array and returns the new length of the array." },
                { label: "C", text: "It merges two or more arrays into a single array and returns the new combined array." }
        ]
    }
];



startButton.addEventListener('click', () => {
    flashCard.style.display = 'none';
    if (flashCard.style.display === 'none') {
        flashCard.style.display = 'block';
        randomQuestion(cardArr);
    }

});


const randomQuestion = (cardArr) => {
    randomIndex = Math.floor(Math.random() * cardArr.length);
    console.log(randomIndex);
    cardQuestion = cardArr[randomIndex].question;
    console.log(cardQuestion);
    cardText.textContent = cardQuestion;
}
