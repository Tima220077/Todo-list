const inputEl = document.getElementById("input-todo")
const btnAdd = document.getElementById("btn-add")
const ulEl = document.getElementById("ul-el")
const liClass = document.getElementsByTagName("li")
const textEl = document.getElementById("left-el")
const clearBtn = document.getElementById("btn-clear")
textEl.style.display = "none"
clearBtn.style.display = "none"
let arrTodo = 0
btnAdd.addEventListener("click", getBoard)
function getBoard(){
    if (!inputEl.value == "") {
        textEl.style.display = "block"
        clearBtn.style.display = "block"
        let liEl = document.createElement("li")
        ulEl.appendChild(liEl)
        liEl.textContent = inputEl.value
        arrTodo++
        if (arrTodo == 1) {
            textEl.textContent = `You have ${arrTodo} todo left`
        }
        else {
            textEl.textContent = `You have ${arrTodo} todos left`
        }
        inputEl.value = ""
        //creating li
        for (const got of liClass) {
            got.addEventListener("click", deleteTodo)
            //why works i don't know
        }
        
    }
    
}

function deleteTodo(e){
    let newLi = e.target
    newLi.remove()
    arrTodo--
    textEl.textContent = `You have ${arrTodo} todos left`
    //deleting li.target
}
clearBtn.addEventListener("click", clearFunc)

function clearFunc(){
    textEl.style.display = "none"
clearBtn.style.display = "none"
    arrTodo = 0
    ulEl.textContent = ""
  
}