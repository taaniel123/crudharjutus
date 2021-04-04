var app = new function(){
    this.el=document.getElementById('tasks');
    this.tasks=[]

    this.FetchAll = function(){
        var data='';

        if(this.tasks.length>0){
            for(i=0;i<this.tasks.length;i++){
                data+='<tr>';
                data+='<td>'+(i+1)+'. '+this.tasks[i]+'</td>';
                data+='<td><button onclick="app.Edit('+i+')" class="btn btn-info">Muuda</button></td>';
                data+='<td><button onclick="app.Delete('+i+')" class="btn btn-danger">Kustuta</button></td>';
                data+='</tr>';
            }
        }
        this.Count(this.tasks.length);
        return this.el.innerHTML = data

    };

    this.Add = function(){
        el = document.getElementById('add-todo');
        var task = el.value;
        if(task){
            this.tasks.push(task.trim());
            el.value='';
            this.FetchAll();
        }

    };

    this.Edit = function(item){
        el = document.getElementById('edit-todo');
        el.value = this.tasks[item]
        document.getElementById('edit-box').style.display = 'block';
        self=this;

        document.getElementById('save-edit').onsubmit = function(){
            var task = el.value;
            if(task){
                self.tasks.splice(item, 1, task.trim());
                self.FetchAll();
                CloseInput();
            }
        }

    };

    this.Delete = function(item){
        this.tasks.splice(item,1)
        this.FetchAll();

    };

    this.Count = function(data){
        var el = document.getElementById('counter');
        var name = 'asja';
        if(data){
            if(data == 1){
                name = 'asi';
            }
            el.innerHTML = data + ' ' + name;
        }
        else{
            el.innerHTML = "Mitte ühtegi " + name.toLowerCase();
        }

    };

}

app.FetchAll();

function CloseInput(){
    document.getElementById('edit-box').style.display = 'none';
}