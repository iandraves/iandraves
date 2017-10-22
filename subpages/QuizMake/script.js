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
    document.getElementById('creator').style = 'display: none';
    document.getElementById('info').style = 'display: none';

    //Showing elements
    title1.innerHTML += "<b>Quiz Name: </b>";
    title2.innerHTML += "<br /><input type='text' class='form-control input-sm' id='title3' style='width: 30%;'><br />";
    mainui.appendChild(title1);
    mainui.appendChild(title2);
    ques.innerHTML += "<br /><b>Question: " + quesnum + " </b>";
    usrinput.innerHTML += "<br /><input type='text' class='form-control input-sm' id='" + inputval + "'style='width: 30%;'><br />";
    mainui.appendChild(ques);
    mainui.appendChild(usrinput);
    document.getElementById('nodisp').style = 'display: block';
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
    usrinput.innerHTML += "<br /><input type='text' class='form-control input-sm' id='" + inputval + "'style='width: 30%;'><br />";
    mainui.appendChild(ques);
    mainui.appendChild(usrinput);
}

//Function that writes quiz to document
function finish() {
    //Showing elements
    document.getElementById('print').style = 'display: block';

    //Hiding elements
    document.getElementById('nodisp').style = 'display: none';
    document.getElementById('mainui').style = 'display: none';
    document.getElementById('otherprograms').style = 'display: none';
    document.getElementById('copyRight').style = 'display: none';

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
    document.getElementById('print').style = 'alignment';
}

//Function that prints the quiz
function printpage() {
    //Hiding print page element
    document.getElementById('print').style = 'display: none';

    //Pressing ctrl+p
    window.print();

    //Showing print page element
    document.getElementById('print').style = 'alignment';
}
