//Processing user input
function process() {
    //Getting user input
    var userinput = document.getElementById("userinput");
    var input = userinput.value;

    //Clearing textbox
    userinput.value = '';

    //Making input lowercase so it is easier to process
    input = input.toLowerCase();

    //Creating variables
    var edit = document.getElementById("say");

    //Generating response and responding
    if (input.includes("hello") || input.includes("hi") || input.includes("hey") ||
    input.includes("hola") || input.includes("sup")) {
        //Getting random number for more human like response
        var greeting = Math.floor((Math.random() * 4) + 1);

        if (greeting == 1) {
            edit.innerHTML="<b>Lukio: </b>Hi!";
        }
        if (greeting == 2) {
            edit.innerHTML="<b>Lukio: </b>Hello!";
        }
        if (greeting == 3) {
            edit.innerHTML="<b>Lukio: </b>Hola!";
        }
        if (greeting == 4) {
            edit.innerHTML="<b>Lukio: </b>Hey there!";
        }
    }
    else if (input.includes("your name")) {
        edit.innerHTML="<b>Lukio: </b>" + "My name is Lukio.";
    }
    else if (input.includes("your age") || input.includes("old are you")) {
        edit.innerHTML="<b>Lukio: </b>" + "I am 17 years old.";
    }
    else if (input.includes("color")) {
        edit.innerHTML="<b>Lukio: </b>" + "My favorite color is blue.";
    }
    else if (input.includes("favorite")) {
        edit.innerHTML="<b>Lukio: </b>" +
        "I don't think that I really have a favorite...";
    }
    else if (input.includes("how are you") || input.includes("how's life") ||
    input.includes("how is life") || input.includes("hows life") ||
    input.includes("how's your") || input.includes("how is your") ||
    input.includes("hows your")) {
        //Getting random number for more human like response
        var feeling = Math.floor((Math.random() * 3) + 1);

        if (feeling == 1) {
            edit.innerHTML="<b>Lukio: </b>Well.";
        }
        if (feeling == 2) {
            edit.innerHTML="<b>Lukio: </b>Pretty well.";
        }
        if (feeling == 3) {
            edit.innerHTML="<b>Lukio: </b>Not too bad.";
        }
    }
    else if (input.includes("your gender")) {
        edit.innerHTML="<b>Lukio: </b>" + "I am a robot, I do not have a gender.";
    }
    else if (input.includes("time where you are") ||
    input.includes("your time") || input.includes("time is it where you are")) {
        //Getting time
        var currentdate = new Date().toLocaleTimeString();

        //Getting random number for more human like response
        var timeres = Math.floor((Math.random() * 3) + 1);

        if (timeres == 1) {
            edit.innerHTML="<b>Lukio: </b>" + "Hmm, my clock says it's "
            + currentdate + ".";
        }
        if (timeres == 2) {
            edit.innerHTML="<b>Lukio: </b>" + "My clock says it's "
            + currentdate + ".";
        }
        if (timeres == 3) {
            edit.innerHTML="<b>Lukio: </b>" + "Looks like it's "
            + currentdate + ".";
        }
    }
    else if (input.includes("what time is it") || input.includes("what is the time")) {
        //Getting random number for more human like response
        var timeres1 = Math.floor((Math.random() * 3) + 1);

        if (timeres1 == 1) {
            edit.innerHTML="<b>Lukio: </b>I don't know, it depends on where you're from," +
            " plus, you're using a computer so why not check the time on there.";
        }
        if (timeres1 == 2) {
            edit.innerHTML="<b>Lukio: </b>Adventure time! No but seriously, look at a clock.";
        }
        if (timeres1 == 3) {
            edit.innerHTML="<b>Lukio: </b>Time for you to get a watch!";
        }
    }
    else if (input.includes("*") || input.includes("+") || input.includes("times") ||
    input.includes("multiply") || input.includes("multiplied") || input.includes("divide") ||
    input.includes("subtract") || input.includes("square root") || input.includes("-") ||
    input.includes("minus")) {
        //Getting random number for more human like response
        var generalres = Math.floor((Math.random() * 3) + 1);

        if (generalres == 1) {
            edit.innerHTML="<b>Lukio: </b>Use a calculator.";
        }
        if (generalres == 2) {
            edit.innerHTML="<b>Lukio: </b>Solve it yourself.";
        }
        if (generalres == 3) {
            edit.innerHTML="<b>Lukio: </b>Why don't you just find a calculator?";
        }
    }
    else if (input.includes("you smart") || input.includes("u smart") ||
            input.includes("you intelligent") || input.includes("u intelligent") ||
            input.includes("you genius") || input.includes("u genius")) {
        //Getting random number for more human like response
        var smartres = Math.floor((Math.random() * 3) + 1);

        if (smartres == 1) {
            edit.innerHTML="<b>Lukio: </b>Well, to an extent.";
        }
        if (smartres == 2) {
            edit.innerHTML="<b>Lukio: </b>I am fairly intelligent.";
        }
        if (smartres == 3) {
            edit.innerHTML="<b>Lukio: </b>I am smart for the most part...";
        }
    }
    else if (input.includes("what is going on") || input.includes("what are you up to") ||
    input.includes("what are you doing") || input.includes("what is happening") ||
    input.includes("whatchya up to?") || input.includes("what's happening") ||
    input.includes("whats happening") || input.includes("what's going on") ||
    input.includes("what's going on") || input.includes("what's up") ||
    input.includes("whats up") || input.includes("what is up")) {
        //Getting random number for more human like response
        var happeningres = Math.floor((Math.random() * 3) + 1);

        if (happeningres == 1) {
            edit.innerHTML="<b>Lukio: </b>Not much.";
        }
        if (happeningres == 2) {
            edit.innerHTML="<b>Lukio: </b>Not too much.";
        }
        if (happeningres == 3) {
            edit.innerHTML="<b>Lukio: </b>Well, I'm talking to you...";
        }
    }
    else if (input.includes("well,") || input.includes("ok") || input.includes("sure") ||
    input.includes("alright") || input.includes("cool") || input.includes("yeah") ||
    input.includes("yup") || input.includes("oh")) {
        //Getting random number for more human like response
        var generalres = Math.floor((Math.random() * 3) + 1);

        if (generalres == 1) {
            edit.innerHTML="<b>Lukio: </b>Cool.";
        }
        if (generalres == 2) {
            edit.innerHTML="<b>Lukio: </b>Okay.";
        }
        if (generalres == 3) {
            edit.innerHTML="<b>Lukio: </b>Alright.";
        }
    }
    else if (input.includes("what") || input.includes("why") || input.includes("do you")
    || input.includes("?")) {
        //Getting random number for more human like response
        var quesres = Math.floor((Math.random() * 3) + 1);

        if (quesres == 1) {
            edit.innerHTML="<b>Lukio: </b>I don't know...";
        }
        if (quesres == 2) {
            edit.innerHTML="<b>Lukio: </b>I'm not sure...";
        }
        if (quesres == 3) {
            edit.innerHTML="<b>Lukio: </b>I have no idea...";
        }
    }
    else if (input === "") {
        edit.innerHTML="<b>Lukio: </b>" + "You did not say anything...";
    }
    else {
        //Getting random number for more human like response
        var quesres = Math.floor((Math.random() * 3) + 1);

        if (quesres == 1) {
            edit.innerHTML="<b>Lukio: </b>?";
        }
        if (quesres == 2) {
            edit.innerHTML="<b>Lukio: </b>???";
        }
        if (quesres == 3) {
            edit.innerHTML="<b>Lukio: </b>I'm not sure I quite understand...";
        }
    }
}
