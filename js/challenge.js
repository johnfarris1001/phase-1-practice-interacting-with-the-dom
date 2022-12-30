let count = 0;
const counter = document.getElementById("counter");
const incr = document.getElementById("plus");
const decr = document.getElementById("minus");
const heart = document.getElementById("heart");
const likesObj = {};
const likes = document.querySelector("ul");
const pause = document.getElementById("pause");
let intervalID = null;
const form = document.querySelector("form");
const comment = document.getElementById("list");

let startInterval = function () {
    intervalID = setInterval(() => {
        count++;
        counter.innerText = count;
    }, 1000)
}

startInterval();

//Event Handlers
incr.addEventListener('click', () => {
    count++;
    counter.innerText = count;
})

decr.addEventListener('click', () => {
    count--;
    counter.innerText = count;
})

heart.addEventListener('click', () => {
    if (likesObj[count]) {
        likesObj[count]++;
        document.getElementById(count).innerText = `${count} has been liked ${likesObj[count]} times!`
    } else {
        likesObj[count] = 1;
        const li = document.createElement("li");
        li.id = count;
        li.innerText = `${count} has been liked 1 time!`;
        likes.appendChild(li)
    }
})

pause.addEventListener('click', () => {
    if (pause.innerText === 'pause') {
        clearInterval(intervalID);
        pause.innerText = 'resume'
        incr.setAttribute('disabled', '');
        decr.setAttribute('disabled', '');
        heart.setAttribute('disabled', '');
    } else {
        pause.innerText = 'pause';
        incr.removeAttribute('disabled');
        decr.removeAttribute('disabled');
        heart.removeAttribute('disabled');
        startInterval();
    }
})

form.addEventListener('submit', text => {
    text.preventDefault();
    newComment(text.target[0].value);
    form.reset();
})

function newComment(text) {
    let p = document.createElement('p');
    p.innerText = text;
    comment.appendChild(p);
}