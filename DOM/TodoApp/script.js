const txtTaskName = document.querySelector('#txtTaskName');
const btnAddNewTask = document.querySelector('#btnAddNewTask');
const taskList = document.querySelector('#task-list'); 
const btnDeleteAll = document.querySelector('#btnDeleteAll');

let items;
btnAddNewTask.addEventListener('click', function(e){
    if(txtTaskName.value == ''){
        alert('add new task')
    }else{
        let html = '';
        html=`<li class="list-group-item bg-secondary bg-opacity-50">
                ${txtTaskName.value}
                <a class="float-end text-white btnDeleteItem">
                    <i class="fas fa-times"></i>
                </a>
            </li>`;

        taskList.innerHTML += html;
        txtTaskName.value = '';
    }    
    e.preventDefault();
});

btnDeleteAll.addEventListener('click', function(){
   if(confirm('are you sure?')){
    taskList.childNodes.forEach(function(item){
        if(item.nodeType == 1 ){
            item.remove();
        }
    });
   }
});

taskList.addEventListener('click', function(e){
    // console.log(e.target);
    if(e.target.className == 'fas fa-times'){
        if(confirm('are you sure?')){
            e.target.parentNode.parentNode.remove();
        } 
    }
    e.preventDefault();
});