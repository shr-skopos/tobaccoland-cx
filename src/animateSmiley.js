export default function animateSmiley() {

    // elements
    const SURVEYENGINEBODY = document.querySelector("#SurveyEngineBody");
    const QUESTIONS = document.querySelector("#Questions");
    const SKINCONTENT = document.querySelector("#SkinContent");

      // build views
      const buildSpeechBubble = () => {
        
        let speechBubble = createEl("div");
        speechBubble.className = "speechBubble";

        let topSpeechBubble = createEl("div");
        topSpeechBubble.className = "topSpeechBubble";

        QUESTIONS.className = "centerSpeechBubble";

        let bottomSpeechBubble = createEl("div");
        bottomSpeechBubble.className = "bottomSpeechBubble";

        SKINCONTENT.prepend(topSpeechBubble);
        SKINCONTENT.appendChild(bottomSpeechBubble);
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