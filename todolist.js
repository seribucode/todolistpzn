    const todolist = [
      'Turuuuu',
      'Bobokkk',
      'Mangan',
      'Rebahannn'
    ]
    
    function clearTodo(){
      const todolistBody = document.getElementById('todolistBody');
      while(todolistBody.firstChild){
        todolistBody.removeChild(todolistBody.firstChild)
      }
    }  

    //menghapus todolist dgn tombol done
    function removeTodolist(index){
      todolist.splice(index, 1)
      displayTodo()
    }

    //menambahkan todo
    function addTodolist(index, todo){
        const tr = document.createElement('tr');
        const tbutton = document.createElement('td');
        tr.appendChild(tbutton);

        const buttonDone = document.createElement('input')
        buttonDone.type = 'button'
        buttonDone.value = 'Done'
        buttonDone.onclick = function(){
          removeTodolist(index)
        }
        tbutton.appendChild(buttonDone)

        const tdTodo = document.createElement('td');
        tdTodo.textContent = todo;
        tr.appendChild(tdTodo);

        const todolistBody = document.getElementById('todolistBody');
        todolistBody.appendChild(tr);
    }

    //Menampilkan Todolist dgn mengompare filter
    function displayTodo(){
      clearTodo()

      for (let i = 0; i< todolist.length; i++){
        const todo = todolist[i]
      
        const searchText = document.getElementById('search').value.toLowerCase()

        if (todo.toLowerCase().includes(searchText)){
          addTodolist(i, todo)
        }        
      }
    }

    //ambil nilai array
    document.forms['todoForm'].onsubmit = function (event){
      event.preventDefault()

      const todo = document.forms['todoForm']['todo'].value;
      todolist.push(todo)

      document.forms['todoForm'].reset();

      console.info(todolist)
      displayTodo()
    }

    //Filter todo
    const inputSearch = document.getElementById('search')    
    inputSearch.onkeyup = function (){
      displayTodo()
    }
    
    inputSearch.onkeydown = function (){
      displayTodo()
    }

    displayTodo()
