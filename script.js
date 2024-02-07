const catImage = document.querySelector('#cat-image');
const question = document.querySelector('#question');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btnSingle = document.querySelector('#btnSingle');
const body = document.querySelector("#body");
const h3 = document.querySelector('h3');

let questions =  {
    0: {
        image: "cat-2",
        question: "Will you be my valentine?!",
        btnText1: "Naah!",
        btnText2: "Haanji!!"
    },
    1: {
        image: "cat-3",
        question: "Aaaaaaaaa...",
        btnText2: "*Blushing*",
    },
    2: {
        image: "cat-4",
        question: "Here keep this, a precious thing for precious girl.",
        btnText2: "Aww, Okay I'll keep it safe!"
    },
    3: {
        image: "cat-5",
        question: "...",
        btnText1: "What happened?"
    },
    4: {
        image: "cat-6",
        question: "I think of you everyday... And you rejected me...",
        btnText1: "But...",
    },
    5: {
        image: "cat-7",
        question: "*Listening Sad Songs*",
        btnText1: "Don't be so sad..."
    },
    6: {
        image: "cat-8",
        question: "Can I ask one more time?",
        btnText1: "Okay Ask..."
    },
    7: {
        image: "cat-9",
        question: "No But What, Me sad",
        btnText1: "..."
    }
}

let progress = 0

btnSingle.addEventListener('click', () => {
    console.log(questions[progress].question);
    catImage.src = `image/${questions[progress].image}.jpg`;
    question.textContent = questions[progress].question;
    btn1.textContent = questions[progress].btnText1;
    btn2.textContent = questions[progress].btnText2;
    btn1.style.display = "inline";
    btn2.style.display = "inline";
    btnSingle.style.display = "none";
    progress ++;
})

btn1.addEventListener('click', () => {
    let temp_progress = 0
    console.log(btn1.textContent);
    if (btn1.textContent == "Naah!") {
        temp_progress = 3;
        catImage.src = `image/${questions[temp_progress].image}.jpg`;
        question.textContent = questions[temp_progress].question;
        btn1.textContent = questions[temp_progress].btnText1;
        btn2.textContent = questions[temp_progress].btnText2;
        btn2.style.display = "none";
    }

    else if (btn1.textContent == "What happened?") {
        temp_progress = 4;
        catImage.src = `image/${questions[temp_progress].image}.jpg`;
        question.textContent = questions[temp_progress].question;
        btn1.textContent = questions[temp_progress].btnText1;
    }
    
    else if(btn1.textContent == "But...") {
        temp_progress = 7;
        catImage.src = `image/${questions[temp_progress].image}.jpg`;
        question.textContent = questions[temp_progress].question;
        btn1.textContent = questions[temp_progress].btnText1;
    }
    
    else if(btn1.textContent == "...") {
        temp_progress = 5;
        catImage.src = `image/${questions[temp_progress].image}.jpg`;
        question.textContent = questions[temp_progress].question;
        btn1.textContent = questions[temp_progress].btnText1;
    }

    else if(btn1.textContent == "Don't be so sad...") {
        temp_progress = 6;
        catImage.src = `image/${questions[temp_progress].image}.jpg`;
        question.textContent = questions[temp_progress].question;
        btn1.textContent = questions[temp_progress].btnText1;
    }

    else if (btn1.textContent == "Okay Ask...") {
        progress = 0;
        catImage.src = `image/${questions[progress].image}.jpg`;
        question.textContent = questions[progress].question;
        btn1.textContent = questions[progress].btnText1;
        btn2.textContent = questions[progress].btnText2;
        btn1.style.display = "none";
        btn2.style.display = "inline";
        btnSingle.style.display = "none";
    }
})

btn2.addEventListener('click', () => {
    let temp_progress;
    if (btn2.textContent == "Haanji!!") {
        temp_progress = 1;
        catImage.src = `image/${questions[temp_progress].image}.jpg`;
        question.textContent = questions[temp_progress].question;
        btn2.textContent = questions[temp_progress].btnText2;
        btn1.style.display = "none";
    }

    else if (btn2.textContent == "*Blushing*") {
        temp_progress = 2;
        catImage.src = `image/cat-2.jpg`;
        question.textContent = questions[temp_progress].question;
        btn2.style.width = "50%";
        btn2.textContent = questions[temp_progress].btnText2;
    }
    
    else if (btn2.textContent == "Aww, Okay I'll keep it safe!") {
        catImage.src = `image/headPat.jpg`;
        btn1.style.display = "none";
        btn2.style.display = "none";
        h3.style.fontSize = "15px";
        h3.textContent = "Happy valentine's day Cheeku, in advance. I want to tell you that, I am glad that you are in my life, and you are the best understanding girl ever, sometimes crazy but you are my crazy. That head pat is for you up there. :)";
    }

})