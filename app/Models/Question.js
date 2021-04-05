import { ProxyState } from "../AppState.js"

export default class Value {
    constructor({ category, type, difficulty, question, correct_answer, incorrect_answers }) {
        this.category = category
        this.type = type
        this.difficulty = difficulty
        this.question = question
        this.correctAnswer = correct_answer
        this.incorrectAnswer = incorrect_answers
    }

    get Template() {

        return /*html*/`
        <div class="card col--md-4 p-2 value">
           <h5> ${this.category}</h5>
           <h4>${this.question}</h4
           
        </div>
        `
    }
    //    <button class="btn btn-primary" onclick="app.questionController.isCorrect('')">${this.correctAnswer}</ul>
    //    <button class="btn btn-primary" onclick="app.questionController.isCorrect('')">${this.incorrectAnswer[0]}</ul>
    //    <button class="btn btn-primary" onclick="app.questionController.isCorrect('')">${this.incorrectAnswer[1]}</ul>
    //    <button class="btn btn-primary" onclick="app.questionController.isCorrect('')">${this.incorrectAnswer[2]}</ul>
    //    <div class="col-12 input-group-text text-wrap p-3">
    //             <input type="checkbox" id = 'checkbox' onclick="app.tasksController.checkedBox(this.checked, '${this.id}')" ${this.checked ? 'checked' : ''} aria-label="Checkbox for following text input">
    //             <li class="pr-5">${this.name} <i class="fas fa-times ml-2" onclick="app.tasksController.deleteTask
    //             ('${this.id}')"></i></li>
    //         </div>
    get Array(arr) {
        let answers = arr.forEach(element => {

        });
    }
}