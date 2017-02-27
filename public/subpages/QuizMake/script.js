//Defining global variables
var quesnum = 1;
var inputval = 1;
var questions = [];

//Function that creates basic UI interaction
function createQuiz() {
    //Obtaining elements
    var ques = document.createElement("ques");
    var title1 = document.createElement("title1");
    var usrinput = document.createElement("quesinput");
    var title2 = document.createElement("title2");
    var mainui = document.getElementById('mainui');

    //Hiding elements
    document.getElementById('create').className = 'hidden';
    document.getElementById('info').className = 'hidden';

    //Showing elements
    title1.innerHTML += "<b>Quiz Name: </b>";
    title2.innerHTML += "<br /><input type='text' class='quesinput' id='title3' size='30'><br />";
    mainui.appendChild(title1);
    mainui.appendChild(title2);
    ques.innerHTML += "<br /><b>Question: " + quesnum + " </b>";
    usrinput.innerHTML += "<br /><input type='text' class='quesinput' id='" + inputval + "'size='30'><br />";
    mainui.appendChild(ques);
    mainui.appendChild(usrinput);
    document.getElementById('newques').className = 'unhidden';
    document.getElementById('finish').className = 'unhidden';
}

//Function that creates new question
function newQues() {
    //Obtaining elements
    var ques = document.createElement("ques");
    var usrinput = document.createElement("quesinput");
    var mainui = document.getElementById('mainui');

    //Increasing question number
    quesnum++;
    inputval++;

    //Editing looks of new question
    ques.innerHTML += "<br /><b>Question: " + quesnum + " </b>";
    usrinput.innerHTML += "<br /><input type='text' class='quesinput' id='" + inputval + "'size='30'><br />";
    mainui.appendChild(ques);
    mainui.appendChild(usrinput);
}

//Function that writes quiz to document
function finish() {
    //Showing elements
    document.getElementById('print').className = 'unhidden';

    //Hiding elements
    document.getElementById('newques').className = 'hidden';
    document.getElementById('finish').className = 'hidden';
    document.getElementById('mainui').className = 'hidden';
    document.getElementById('otherprograms').className = 'hidden';
    document.getElementById('copyRight').className = 'hidden';

    //Writing quiz
    for (var i = 1; i <= inputval; i++) {
        //Getting user input
        var quesinput = document.getElementById(i).value;

        //Pushing question value to array
        questions.push(quesinput);

        //Putting questions on page
        document.getElementById('test').innerHTML += "<p id='alignment'>" + "<b id='alignment'>" + i + "</b>" + ". " + quesinput + "</p><br /><br />";
    }
    console.log(questions);

    //Formatting page
    document.getElementById('name').innerHTML += "<p id='alignment'><b id='alignment'>Name: </b>_______________________</p><br />";
    document.getElementById('title').innerHTML = document.getElementById('title3').value;
    document.getElementById('title').id = 'alignment';
    document.getElementById('heading').innerHTML = document.getElementById('title3').value;
    document.getElementById('print').className = 'alignment';
}

//Function that prints the quiz
function printpage() {
    //Hiding print page element
    document.getElementById('print').className = 'hidden';

    //Pressing ctrl+p
    window.print();

    //Showing print page element
    document.getElementById('print').className = 'alignment';
}
