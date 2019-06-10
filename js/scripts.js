let hours = new Date().getHours(); 
let string = "Good Morning!";
if(hours > 12 && hours < 18) {
    string = "Good Afternoon!";
} else if(hours > 17 && hours < 24) {
    string = "Good Evening!";
}

let greetings  = [
    "It is a pleasure to meet you!",
   string,
   "It's nice to meet you!",
   "How do you do?",
   "It's great to see you!",
   "How do you do?",
];


setTimeout(()=>{
    $("p.text").addClass("shake");
}, 1000);

$("p.text").typeIt({
    strings: [greetings[Math.floor(Math.random() * 6)],
                "I am a freshman at the University Of Washington.",
                "I am a passionate software developer, risk taker, and overall enthusiast for life.",
                "I would love the opportunity to work along side your team.",
                "To find more about me click the links above.",
                "I'm excited! Let's get started.",
    ],
    speed: 150,
    deleteSpeed: 100,
    breakLines: false,
    startDelay: 1500,
    waitUntilVisible: true,
    loop: false,
});