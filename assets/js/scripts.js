var cont = 0;
document.getElementById('btn').addEventListener("click",function add(){
    var input = document.getElementById('tarefa').value;
    if(input == ""){
        alert("Campo vazio! Digite a tarefa!");
    }else{
        cont = cont+1;
        var lista = document.getElementById('tarefas');
        lista.innerHTML += "<div class='itens'><input class='check' type='checkbox' id='tarefa"+cont+"'> <label for='tarefa"+cont+"'>"+input+"</label><div>";
    }
})