export default function animateSmiley() {

    // elements
    const SURVEYENGINEBODY = document.querySelector("#SurveyEngineBody");
    const INNERINNER = document.querySelector(".InnerInner");
    const QUESTIONTEXT = document.querySelector(".InnerInner .QuestionText");

      // build views
      const buildSpeechBubble = () => {
        
        let speechBubble = createEl("div");
        speechBubble.className = "speechBubble";

        let topAboveSpeechBubble = createEl("div");
        topAboveSpeechBubble.className = "topAboveSpeechBubble";

        let centerAboveSpeechBubble = createEl("div");
        centerAboveSpeechBubble.className = "centerAboveSpeechBubble";

        let bottomAboveSpeechBubble = createEl("div");
        bottomAboveSpeechBubble.className = "bottomAboveSpeechBubble";

        centerAboveSpeechBubble.appendChild(QUESTIONTEXT);
        speechBubble.append(topAboveSpeechBubble,centerAboveSpeechBubble,bottomAboveSpeechBubble);
        INNERINNER.appendChild(speechBubble);
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