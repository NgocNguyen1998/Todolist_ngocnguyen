class TaskToDo {
    constructor() { }
    taskList = [];
    addTask(a) {
        return this.taskList = [...this.taskList, a]
    }
    removeTask(name) {
        this.taskList = this.taskList.filter(taskk => taskk.taskName !== name)
    }
    completeTask(name) {
        let taskCheck = this.taskList.find(taskk => taskk.taskName === name)
        return taskCheck
    }
    checkTask(name) {
        this.taskList = this.taskList.filter(taskk => taskk.taskName !== name)
    }
    
}

class Task {
    constructor() { }
    taskName = ''
}

const taskToDo = new TaskToDo()
const renderTask = (a, inner) => {
    const content = a.reduce((value, task) => {
        return value += `
        <li>
            <span>${task.taskName}</span>
            <div>
               <i class="fa-solid fa-trash-can" onclick = "remove('${task.taskName}')"></i>
               <i class="fa-solid fa-circle-check" id="check" onclick = "checkTask('${task.taskName}')"></i>
           </div>
        </li>`

    }, '')
    getElement(inner).innerHTML = content
}

const getElement = (id) => document.getElementById(id);

//add
getElement('addItem').onclick = () => {

    const task = new Task()
    task.taskName = getElement('newTask').value;
    taskToDo.addTask(task)
    console.log(taskToDo)
    renderTask(taskToDo.taskList, 'todo')

}

//checkTask
let arr = []
const checkTask = (name) => {

    taskToDo.completeTask(name)
    arr.push(taskToDo.completeTask(name))
    renderTask(arr, 'completed')

    taskToDo.checkTask(name)
    renderTask(taskToDo.taskList, 'todo')
}


//Remove
const remove = (name) => {
    taskToDo.removeTask(name)
    renderTask(taskToDo.taskList, 'todo')
}

//Sort a-z
getElement('two').onclick = () => {
let arrSort =  taskToDo.taskList.sort((value2, value1)=> {
    let namevalue2 = value2.taskName.toLowerCase()
    let namevalue1 = value1.taskName.toLocaleLowerCase()
    if (namevalue2 > namevalue1) {
        return 1 
    }
    if (namevalue2 < namevalue1) {
        return -1
    }
    return 1
})
renderTask(arrSort,'todo')
}

//sort z-a
getElement('three').onclick = ()=>{
    let arrSort =  taskToDo.taskList.sort((value2, value1)=> {
        let namevalue2 = value2.taskName.toLowerCase()
        let namevalue1 = value1.taskName.toLocaleLowerCase()
        if (namevalue2 > namevalue1) {
            return -1 
        }
        if (namevalue2 < namevalue1) {
            return 1
        }
        return -1
    })
    // arrSort.reverse()
    renderTask(arrSort,'todo')
}

