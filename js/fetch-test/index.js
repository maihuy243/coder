// link api
let api = 'http://localhost:3000/khoahoc';

let X = '1321'

// render data từ api
const render = () => {
        fetch(api)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                let listCourses = document.querySelector('.courses');
                let html = data.map((item) => {
                    return `
                <div class="course course-item-${item.id}">
                                 <div class="logo">
                                 </div>
                                 <div class="name">${item.name}</div>
                                 <div class="price"><i class="fa-solid fa-hand-holding-dollar"></i> Học Phí : ${item.price} đ</div>
                                 <button onclick="handleDeleteCourse(${item.id})"> Delete </button>
                                 <button onclick="handleEditCourse(${item.id})"> Edit </button>

                       </div>
                `;
                })
                listCourses.innerHTML += html.join('');
            })


    }
    // handle button
const handleCreateForm = () => {
        let creates = document.querySelector('#btn');

        creates.addEventListener('click', () => {
            console.log('addEvent')
            let namevalue = document.getElementById('name').value;
            let pricevalue = document.getElementById('price').value;
            let course = {
                name: namevalue,
                price: pricevalue
            }
            create(course, render);
        });

    }
    // Create course
const create = (course, callback) => {
    console.log('create')
    option = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course)
    }
    fetch(api, option)
        .then((response) => {
            return response.json();
        })
        .then(callback);
}

const handleDeleteCourse = (id) => {
    option = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    }
    fetch(api + '/' + id, option)
        .then((response) => {
            return response.json();
        })
        .then(() => {
            let courseItem = document.querySelector('.course-item-' + id);
            if (courseItem) courseItem.remove();
            render();

        })
}

// Edit






const handleEditCourse = (id, course) => {
    option = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course)
    }
    fetch(api + '/' + id, option)
        .then((response) => {
            return response.json();
        })
        .then((course) => {

        })
}



const start = () => {
    handleCreateForm();
}
start();