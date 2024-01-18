const users = document.querySelector('.user-list');
const userName = document.querySelector("#user");

const userArr = [];

const getUserData = async() => {
    try {
        const res = await fetch('https://api.github.com/users');
        const data = await res.json();

        if(data){
            users.innerHTML = ""
        }

        data.map((user) => {
            const li = document.createElement('li');

            userArr.push(li);

            li.insertAdjacentHTML('afterbegin', 
                `
                <div class="user-data">
                    <img src=${user.avatar_url} alt=${user.avatar_url} srcset="">
                    <div>
                        <p>${user.login}</p>
                        <a href=${user.html_url} target="_blank">${user.html_url}</a>
                    </div>
                 </div>
                `
            )
            users.appendChild(li);
        })
        
    } catch (error) {
        console.log(error);
    }
}

userName.addEventListener('input', (e) => {
    const val = e.target.value;
    console.log(val);

    userArr.filter((curElem) => {
       curElem.innerText.toLowerCase().includes(val.toLowerCase()) ?
        curElem.classList.remove('hide') :
        curElem.classList.add('hide')
    })
})

getUserData();
