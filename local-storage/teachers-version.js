const buildHTML =()=> {
    document.querySelector('#local-storage').innerHTML = `
        <input id="name" placeholder="name" />
        <input id="surname" placeholder="surname" />
        <button>save</button>
    `;
}

buildHTML();

// check if data exist localstorage
const user = JSON.parse(localStorage.getItem('user'));
console.log(user);

// if yes 
if (user) {
    document.querySelector('#name').value = user.name;
    document.querySelector('#surname').value = user.surname;
}

document.querySelector('button').addEventListener('click', ()=> {
    const user = {
        name: document.querySelector('#name').value,
        surname: document.querySelector('#surname').value
    };
    localStorage.setItem('user', JSON.stringify(user));
});