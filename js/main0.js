
// (function(i, s, o, g, r, a, m) {
//     i['GoogleAnalyticsObject'] = r;
//     i[r] = i[r] || function() {
//         (i[r].q = i[r].q || []).push(arguments)
//     }, i[r].l = 1 * new Date();
//     a = s.createElement(o),
//         m = s.getElementsByTagName(o)[0];
//     a.async = 1;
//     a.src = g;
//     m.parentNode.insertBefore(a, m)
// })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-11206621-10', 'auto');
ga('send', 'pageview');

//<!-- End Google Analytics -->
var input = {
    pageData: [
    {
        question: "Do you remember any of the ads you have seen here before?",
        options: ["Very High", "Well", "Kind of", "Not really", "Not at all"]
    },
    {
        question: "How do you view the brands advertised?",
        //options: ["yes", "no", "IDK", "!!"]
        options: ["Very Favorably", "Favorably", "Neutral", "Unfavorably", "Very Unfavorably"]
    },
    {
        question: "How likely are you to buy a product shown here in the next 2 months?",
        options: ["Definitely will","Probably will", "May or may not", "Probably will not", "Definitely will not"]
    }
    ]
}

console.log("@ START ");

// Define the card type.
// type C2 with 2 columns.
// type C4 with 4 columns.

var DBG = true;
var numberOfCards = input.pageData.length;
if (DBG) console.log("Nubmer of cards: ", numberOfCards);

var endOfCardArea = document.getElementById("end_of_card");

var lineOneArea = document.getElementById("line_one");
var lineTwoArea = document.getElementById("line_two");

var qustion = document.getElementById("question");
var optionOne = document.getElementById("option_one");
var optionTwo = document.getElementById("option_two");
var optionThree = document.getElementById("option_three");
var optionFour = document.getElementById("option_four");
var optionFive = document.getElementById("option_five");
var optionSix = document.getElementById("option_six");

function sendEvent() {

    // ga('send', {
    //     hitType: 'event',
    //     eventCategory: 'Video',
    //     eventAction: 'play',
    //     eventLabel: 'cats.mp4'
    // });
    //ga('send', 'event', 'Q and A', question.innerHTML, this.innerHTML);
    ga('send', {
        hitType: 'event',
        eventCategory: 'Q and A',
        eventAction: "" + question.innerHTML + " : " + this.innerHTML,
        eventLabel: question.innerHTML
    });
    if (DBG) console.log("Get Click Event: Question ", question.innerHTML, "Answer ", this.innerHTML);
    if (index + 1 < numberOfCards) {
        index += 1;
        setupContent(index);
    } else {
        if (DBG) console.log("--> END of Cards");
        endOfCardArea.style.visibility = "visible";
    }
}
optionOne.onclick = sendEvent;
optionTwo.onclick = sendEvent;
optionThree.onclick = sendEvent;
optionFour.onclick = sendEvent;
optionFive.onclick = sendEvent;

var index = 0;

// Try to show conent on card.
function setupContent(i) {
    // fill content into columns.
    qustion.innerHTML = input.pageData[i].question;
    var options = input.pageData[i].options;

    optionOne.innerHTML = options[0];
    optionTwo.innerHTML = options[1];
    if (options[2] != null) {
        optionThree.innerHTML = options[2];
    }
    if (options[3] != null) {
        optionFour.innerHTML = options[3];
    }
    if (options[4] != null) {
        optionFive.innerHTML = options[4];
    }
    if (options[5] != null) {
        optionSix.innerHTML = options[5];
    }
}

setupContent(index);

console.log("@ END ");
