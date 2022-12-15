export default function animateSmiley(page) {

    // elements
    const QUESTIONS = document.querySelector("#Questions");
    const SKINCONTENT = document.querySelector("#SkinContent");
    const BUTTONS = document.querySelector("#Buttons");
    const START = document.querySelector("#Questions.start");
    const END = document.querySelector("#Questions.end");

    // build views
    const buildSpeechBubble = () => {

        const topSpeechBubble = createEl("div");
        topSpeechBubble.className = "topSpeechBubble";

        QUESTIONS.className = "centerSpeechBubble";

        const bottomSpeechBubble = createEl("div");
        bottomSpeechBubble.className = "bottomSpeechBubble";

        SKINCONTENT.prepend(topSpeechBubble);
        BUTTONS.insertAdjacentElement("beforebegin", bottomSpeechBubble);

    }
    buildSpeechBubble();

    const buildWinkEWA = () => {
        QUESTIONS.classList.add(page);
    }
    buildWinkEWA();

    const buildBlinkingEye = () => {

        const leftEye = createEl("div");
        leftEye.className = "leftEye";

        const eyeLid = createEl("div");
        eyeLid.className = "eyeLid";

        leftEye.appendChild(eyeLid);
        QUESTIONS.appendChild(leftEye);
    }
    buildBlinkingEye();

    // helper functions
    function createEl(tag, txt) {
        let el = document.createElement(tag);
        if (txt) {
            txt = document.createTextNode(txt);
            el.appendChild(txt);
        }
        return el;
    }
}