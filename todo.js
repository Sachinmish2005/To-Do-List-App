let todoList=[{
  item:'java',
  dueDate:'2025-07-25'

},{
item:'python',
dueDate:'2025-07-26'
}];
displayItem();
function addtodo(){
  let inputElement=document.querySelector('#input_todo');
  let inputDate=document.querySelector('#todo-date');
  let todoValue=inputElement.value;
  let todoDate=inputDate.value;
 todoList.push({item:todoValue,dueDate:todoDate});

inputElement.value='';
inputDate.value='';
displayItem();
}   

function displayItem(){
  let containerElement=document.querySelector('.todo_container');
  let newHtml='';
  for(let i=0;i<todoList.length;i++){
    let {item,dueDate}=todoList[i];
    newHtml+=`
    
    
    <span>${item}</span>
    <span>${dueDate}</span>
    <button id="todo-delete" onclick="
    todoList.splice(${i},1);
    displayItem();
    " >Delete</button>
    
    
    `;

  }
  containerElement.innerHTML=newHtml;
 
}