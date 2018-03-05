var allQuestions = [{
        question: "What is the largest organ in the human body?",
        choices: ["Skin","Heart","Liver","Large intestine"
        ],
        correct: 0
    },
    {
        question: "Which is the longest bone in the human body? ",
        choices: ["Femur","Scapula","Fibula","Ulna"
        ],
        correct: 0   
    },
    
    {
        question: "Alzheimer disease primarily affects which part of the human body?",
        choices: ["Lungs","Brain","Skin","Heart"
        ],
        correct: 1   
    },
    
    {
        question: "What do you call a baby bat?",
        choices: ["Kid","Cub","Pup","Chick"
        ],
        correct: 2   
    },
    
        {
        question: "What are rhinos horn made of?",
        choices: ["Keratin","Bone","Ivory","Skin"
        ],
        correct: 0   
    }
];

var questionNumber = 0;
var selected = [];


//Wyświetlenie nowego pytania po kliknięciu
var next = document.querySelector(".quiz__next");
next.addEventListener('click',function(){
    addNewQuestion(allQuestions,questionNumber);
    questionNumber++;
    selectAnswer();
});


//Dodanie nowego pytania z tablicy do DOM

function addNewQuestion(arr,i){
    var question, answer1, answer2, answer3, answer4
    question = document.querySelector('.quiz__question')
    if(i<arr.length){
    question.innerText = arr[i].question;
    answer1 = document.getElementById('a1').innerHTML= '<span>' + arr[i].choices[0] + '</span>';
    answer2 = document.getElementById('a2').innerHTML= '<span>' + arr[i].choices[1] + '</span>';
    answer3 = document.getElementById('a3').innerHTML= '<span>' + arr[i].choices[2] + '</span>';
    answer4 = document.getElementById('a4').innerHTML= '<span>' + arr[i].choices[3] + '</span>';
        
    } else {
    var removeAnswers = document.querySelector('.quiz__answers');
    var container = document.querySelector(".quiz__container");
    container = removeAnswers.parentNode;
    container.removeChild(removeAnswers);
    question.innerText = 'Your score is: ';
        sumScore();
    }
    
    return answer1;
}


//MOŻLIWOŚĆ ZAZNACZENIA PYTANIA
function selectAnswer(){
var answers, choice

answers = document.getElementsByClassName("quiz__answers--item");
choice = document.getElementsByTagName('span');
    
var newArr = Array.prototype.slice.call(choice);


    for(var i=0; i< choice.length; i++){
    choice[i].addEventListener('click', function(){
        this.classList.toggle("selected");
        //sprawdzamy index elementu z klasa selected i dodajemy go do tablicy z odpowiedziami
        //jezeli index selected === correct dla danego pytania, to dodajemy punkt, jezeli nie to nie dodajemy
        if(this.hasAttribute('class')){
            selected.push(newArr.indexOf(this));
           }
            return selected;
         });
        }
}


//SUMOWANIE WYNIKÓW
function sumScore(){
    var score =0;
    for(var i=0; i<selected.length; i++){
        if(selected[i] === allQuestions[i].correct){
            score++;
        }
    }
        var scoreDisplay = document.createElement('p');
        var scoreNumber = document.createTextNode(score);
        scoreDisplay.appendChild(scoreNumber);
        var position = document.querySelector(".quiz__container");
        position.appendChild(scoreDisplay);
        console.log(score)
}