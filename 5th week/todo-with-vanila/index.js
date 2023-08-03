/**
 * 할 일
 * - id   -> 같은 라벨일 때 대비
 * - label
 * - completed
 */

let todoList=[
    {
        id:1,
        label:"Wake up",
        completed:false,
        modifying:false
    },
    {
        id:2,
        label:"Breakfast",
        completed:false,
        modifying:false
    },
    {
        id:3,
        label:"College",
        completed:false,
        modifying:false
    },

];
const addTodo=(label)=>{
    const todo = {
        id: new Date().getMilliseconds(),
        label,
        completed:false,
        modifying:false
    }
    todoList=[...todoList, todo]

};
const deleteTodo=(targetId)=>{
    // const newTodoList=todoList.filter(todo=>todo.id!==id);

    const newTodoList=todoList.filter(({id})=>{
        console.log(id);
        console.log(targetId);
        return id!==targetId});
    todoList = newTodoList;
    // console.log(todoList);
    
    
};
const modifyTodo = (targetId,value)=>{
    console.log(value);
    const newTodoList = todoList.map((todo)=>{
        if(todo.id===targetId){
            const nextModifying = todo.modifying?false:true;
            return {...todo, modifying:nextModifying, label:value};
        }
        return todo;
    });
    todoList = newTodoList;
    
}
const completeTodo=(targetId)=>{

    const newTodoList=todoList.map((todo)=>{
        if (todo.id === targetId){
            const nextCompleted = todo.completed?false:true;
            return {...todo, completed:nextCompleted};
            
            
        }
        return todo;
        
    })

    todoList = newTodoList;
}

const renderTodo=(todo)=>{
    

    const todoLabel = todo.modifying? document.createElement('input'):document.createElement('p');
    todo.modifying?todoLabel.className = "todo-label-input":todoLabel.className="todo-label";
    todoLabel.innerText=todo.label;

    
    const modifyButton = document.createElement('button');
    modifyButton.classList.add('todo-action');
    todo.modifying?modifyButton.innerText="Done":modifyButton.innerText="Modi";
    modifyButton.onclick=()=>{
        modifyTodo(todo.id, todoLabel.value);
        renderTodoList();
    }
    //  todoLabel.value = todo.label;
    


    const completeButton = document.createElement('button');
    completeButton.classList.add('todo-action');
    
    if (todo.completed){
        completeButton.classList.remove('uncompleted');
        completeButton.classList.add('completed');    
        completeButton.innerText="";
        todoLabel.classList.add("cancelline");
    }else{
        completeButton.classList.remove('completed');
        completeButton.classList.add('uncompleted');    
        completeButton.innerText="Cmplt";
        todoLabel.classList.remove("cancelline");
    }
    
    completeButton.onclick=()=>{
        completeTodo(todo.id);
        renderTodoList();};

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('todo-action');
    deleteButton.classList.add('delete');
    deleteButton.innerText="Del";
    deleteButton.onclick=()=>{deleteTodo(todo.id);renderTodoList();};

    const todoActionWrapper = document.createElement('div');
    todoActionWrapper.className="todo-action-wrapper";

    todo.completed?null:todoActionWrapper.appendChild(modifyButton);
    todoActionWrapper.appendChild(completeButton);
    todoActionWrapper.appendChild(deleteButton);


    

    const todoWrapper = document.createElement('div');
    todoWrapper.className="todo-wrapper";
    todoWrapper.appendChild(todoLabel);
    todoWrapper.appendChild(todoActionWrapper);

    



    const content = document.getElementById("content");
    content.appendChild(todoWrapper);
    

};

const renderAddButton=()=>{

    const addText = document.createElement('input');
    addText.id="add-text";
    addText.placeholder="Todo";

    
    
    const addAction = document.createElement('button');
    addAction.id="add-action";
    addAction.innerText="+";
    addAction.onclick = ()=>{
        console.log(addText.value);
        addTodo(addText.value);
        renderTodoList();
    };

    const addActionWrapper  = document.getElementById("add-action-wrapper");
    addActionWrapper.appendChild(addText);
    addActionWrapper.appendChild(addAction);
    // const addActionWrapper = document.createElement('div');
    // addActionWrapper.className = "add-action-wrapper";
    
    


}


const renderTodoList=()=>{
    const content = document.getElementById("content");
    content.innerHTML="";
    todoList.forEach((todo)=>{
        renderTodo(todo);
        
    });
    const addActionWrapper = document.getElementById("add-action-wrapper");
    addActionWrapper.innerHTML="";
    renderAddButton();
}

renderTodoList();