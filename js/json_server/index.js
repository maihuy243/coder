lilet API = "http://localhost:3000/users";


const start = () => {
    getUsers((users) => {
        renderUsers(users);
    });
    // có thể viết như dưới 
    // getUsers(renderUsers);
    click();
}
start();

// Function

// Lấy data user từ api về 
function getUsers(callback) {
    fetch(API)
        .then((response) => {
            return response.json()
        })
        .then(callback)
}

// render data ra html
function renderUsers(users) {

    var listUser = document.querySelector('ul');
    let html = users.map((user) => {
        return `
    <li>
      <h3>${user.name}</h3>
      <p>${user.description}</p>
      <button onclick = "deleteUser(${user.id})">Xóa</button>
    </li>

    `;
    });
    listUser.innerHTML = html.join('');
}

// thêm data

function createUser(data, callback) {
    var option = {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(API, option)
        .then((response) => {
            return response.json();
        })
        .then(callback);
}


// delete data
function deleteUser(id) {
    var option = {
        method: 'DELETE',
        header: {
            'Content-Type': 'application/json'
        },
    }
    fetch(API + "/" + id, option)
        .then((response) => [
            response.json()
        ])
        .then(() => {
            getUsers((users) => {
                renderUsers(users);
            });
        })
}


function click() {
    var getBtn = document.querySelector('button');
    getBtn.onclick = () => {
        let names = document.querySelector('input[name="name"]').value;
        let descriptions = document.querySelector('input[name="description"]').value;

        var formData = {
            name: names,
            description: descriptions
        }

        createUser(formData);

    }

}