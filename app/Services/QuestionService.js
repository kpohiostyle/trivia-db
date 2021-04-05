import { ProxyState } from "../AppState.js";
import Question from "../Models/Question.js";
import { api } from "./AxiousService.js"


class QuestionService {
    async getAllQuestions(url) {
        let results = await api.get(url)

        console.log(results.data.results)

        let question = results.data.results.map(q => new Question(q))
        ProxyState.question = question

    }



}
let arr = incorrectAnswer.push(correctAnswer)
function shuffle(arr) {

    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [arr[i], array[j]] = [array[j], arr[i]];
    }
}

export const questionService = new QuestionService();

