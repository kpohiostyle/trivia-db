import { ProxyState } from "../AppState.js";
import { questionService } from "../Services/QuestionService.js";


//Private
function _draw() {
    let question = ProxyState.question;
    let template = ''
    question.forEach(v => template += v.Template)
    document.getElementById("app").innerHTML = /*html*/`
      ${template}
  </div>
  `
}

//Public
export default class ValuesController {
    constructor() {
        ProxyState.on("question", _draw);


        questionService.getAllQuestions()
    }



    getAll(url) {
        questionService.getAllQuestions(url)
    }

}
