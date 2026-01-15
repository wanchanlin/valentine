const messages = [
    "Are you sure? 🤨",
    "Wait... really sure?? 😭",
    "Are you being positive right now? 💔",
    "Pookie please... look into my eyes! 🥺",
    "Just think about the snacks we could have! 🍕",
    "If you say no, a kitten somewhere gets a tiny bit sad... 🐱",
    "I'm actually crying. Real tears. Typing is hard now. 💧",
    "My heart is literally breaking into 1,000 pieces... 🧩",
    "Ok fine, I’ll stop. I’ll go live in a cave. Alone. 🏔️",
    "Just kidding! I'm not leaving until you say YES! ❤️"
];

let messageIndex = 0;
let noCount = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    // noButton.textContent = messages[messageIndex];
    // messageIndex = (messageIndex + 1) % messages.length;
    // const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    // yesButton.style.fontSize = `${currentSize * 1.5}px`;
    noCount++;
    localStorage.setItem('rejectionCount', noCount);

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
