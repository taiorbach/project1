
const tasks = []
const properties = ['taskDetails' , 'taskDate' , 'taskTime']

function addTask(){
    event.preventDefault()
    const form = document.querySelector('form')
    const task = {}
    for(let prop of properties){
        task[prop] = form.elements[prop].value
    }
    
    tasks.push(task)
    console.log(tasks)
    createNote(tasks.length -1, task);
}


function createNote(noteId, task) {
    const noteContainerDiv = createNoteContainerDiv(noteId);
    const noteDiv = createTaskNoteDiv(noteId, task);
    const dateTimeDiv = createTaskDateTimeDiv(noteId, task);
    const deleteButton = document.createElement('button')
    const button = document.createElement('button');
    button.setAttribute('id', 'task_'+noteId);
    button.setAttribute('class' , 'deleteButton')
    button.innerHTML = 'X'
    noteContainerDiv.addEventListener('mouseenter', function() {
        noteContainerDiv.appendChild(button);
   });
    noteContainerDiv.addEventListener('mouseleave', function() {
        noteContainerDiv.removeChild(button);
   });
    button.setAttribute('onclick' , deleteTask(noteId , task))
    noteContainerDiv.appendChild(noteDiv)
    noteContainerDiv.appendChild(dateTimeDiv);
    const divTasks = document.getElementById('divTasks');
    divTasks.appendChild(noteContainerDiv);
    
}

function createNoteContainerDiv(noteId) {
    const noteContainerDiv = document.createElement('div');
    noteContainerDiv.setAttribute('class', 'taskOne fadeIn')
    noteContainerDiv.setAttribute('id', 'task' + noteId)
    return noteContainerDiv;
}

function createTaskNoteDiv(noteId, task) {
    const noteDiv = document.createElement('div')
    noteDiv.setAttribute('class', 'taskNote')
    noteDiv.innerHTML = task.taskDetails;
    return noteDiv;
}

function createTaskDateTimeDiv(noteId, task) {
    const dateTimeDiv = document.createElement('div')
    dateTimeDiv.setAttribute('class', 'taskTimeAndDate')
    dateTimeDiv.innerHTML = task.taskDate + ' <br/> ' + task.taskTime
    return dateTimeDiv;
}

function deleteTask(noteId){
    for(let index in tasks){
        console.log(noteId)
        if(tasks[index] === 'task'+noteId){
             tasks[index].remove()
          
        }
        
    }
    
}