document.addEventListener("DOMContentLoaded", () => {
 let form = document.querySelector('#create-task-form');
 form.addEventListener('submit', buildTask)
});

function buildTask(task) {
  task.preventDefault()
  let input = task.target['new-task-description'].value
  appendTask(input)
  task.target['new-task-description'].value = ""
}

function appendTask(input){
  let ul = document.querySelector('#tasks')
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'

  li.textContent = `${input} `
  li.appendChild(btn)

  ul.appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove()
}