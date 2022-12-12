export default function animateSmiley() {

    // elements
    const QUESTIONS = document.querySelector("#Questions");
    const SKINCONTENT = document.querySelector("#SkinContent");

      // build views
      const buildSpeechBubble = () => {

        let topSpeechBubble = createEl("div");
        topSpeechBubble.className = "topSpeechBubble";

        QUESTIONS.className = "centerSpeechBubble";

        let bottomSpeechBubble = createEl("div");
        bottomSpeechBubble.className = "bottomSpeechBubble";
        
        SKINCONTENT.prepend(topSpeechBubble);
        Buttons.insertAdjacentElement("beforebegin", bottomSpeechBubble);

    }
    buildSpeechBubble();


    // helper functions
    function createEl(tag, txt){
        let el = document.createElement(tag);
        if (txt) {
            txt = document.createTextNode(txt);
            el.appendChild(txt);
        }
        return el;
    }
}