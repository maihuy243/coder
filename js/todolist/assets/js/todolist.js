let api = "http://localhost:3000/todolist";


const edit = (id) => {
    let content = document.querySelector('.list-content-' + id);
    let listbtn = document.querySelector('.list-btn-' + id);
    let btnedit = document.querySelector('.edit-' + id);
    console.log(content, listbtn, btnedit);
    listbtn.classList.toggle('none');
    content.classList.toggle('none');
    btnedit.classList.toggle('none');
}

const save = (id) => {

}





// Render Todolist
const render = () => {
    fetch(api)
        .then((response) => {
            return response.json()
        })
        .then((lists) => {
            let todolist = document.querySelector('.lists');
            let html = lists.map((item) => {
                return `
                <div class="list list-${item.id}">
                <div class="list-content list-content-${item.id})">${item.content}</div>
                <div class="list-btn list-btn-${item.id}) ">
                    <div class="btn-del" onclick="deletee(${item.id})"><i class="fa-solid fa-circle-minus"></i></div>
                    <div class="btn-edit" onclick="edit(${item.id})"><i class="fa-solid fa-pen-to-square"></i></div>
                </div>
                <div class="edit edit-${item.id} none">
                    <input class="edittext" type="text" value="edit">
                    <button class="editbtn" value="save" onclick="save(${item.id})">Save</button>
                </div>
            </div>
      `
            })
            todolist.innerHTML += html.join('');
        })
}

//  Add todolist



const addlist = (data) => {
    option = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }
    fetch(api, option)
        .then((response) => {
            return response.json();

        })
        .then(() => {})

}
const create = () => {
    let input = document.querySelector('.text').value;
    let view = document.querySelector('.text');
    if (input) {
        let list = {
            content: input
        }
        addlist(list)
    } else view.setAttribute('placeholder', "EROR !")
}

// Delete 
const deletee = (id) => {
    option = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    }
    fetch(api + '/' + id, option)
        .then((res) => {
            return res.json();
        })
        .then(() => {
            let value = document.querySelector('.list-' + id);
            if (value) value.remove();
            render();
        })

}


// Start
const start = () => {}
render();
start();