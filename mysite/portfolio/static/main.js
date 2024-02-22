const roles = ['Full-stack Software Developer', 'Machine Learning Developer', 'Software Engineer'];
const animationDelay = 100;
const roleDelay = 1000;
let roleIndex = 0;
let charIndex = 0;

const animatedTextElm = document.getElementById("animatedText");

function typeText() {
    if (charIndex < roles[roleIndex].length) {
        animatedTextElm.textContent += roles[roleIndex].charAt(charIndex);
        charIndex ++;
        setTimeout(typeText, animationDelay);
    }
    else {
        setTimeout(deleteText, roleDelay);
    }
}

function deleteText() {
    if (charIndex > 0) {
        animatedTextElm.textContent = roles[roleIndex].substring(0, charIndex-1);
        charIndex --;
        setTimeout(deleteText, animationDelay);
    }
    else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeText, roleDelay);
    }
}

typeText()