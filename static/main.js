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

document.addEventListener('DOMContentLoaded', () => {
    const perspectiveLines = document.querySelectorAll('.perspective-line');

    if (perspectiveLines.length > 0) {
        const updateWidths = () => {
            let maxWidth = 0;

            perspectiveLines.forEach(line => {
                const paragraphs = line.querySelectorAll('p');
                paragraphs.forEach(p => {
                    const textWidth = Math.ceil(p.scrollWidth);
                    if (textWidth > maxWidth) {
                        maxWidth = textWidth;
                    }
                });
            });

            perspectiveLines.forEach(line => {
                line.style.width = `${maxWidth}px`;
            });
        }

        if (document.fonts) {
            document.fonts.ready.then(updateWidths); // Wait for fonts to load
        } else {
            updateWidths(); // Fallback for older browsers
        }

        let resizeTimeout;
        window.addEventListener('onresize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                updateWidths(); // Debounce to improve performance
            }, 100);
        });
    }
});