const p = document.querySelector('.count')

const url = 'http://localhost:3000/allcount'

fetch(url,{
    mode: 'cors',
    headers: {
        'authorization': 'bearer ' + localStorage.getItem('token')
    }
})
.then(res => res.json())
.then(data => {
    console.log('total de prontuarios cadastrados', data)
    data.forEach(allCount => {
        p.innerHTML = allCount.count
    });
})

// const token = localStorage.getItem('token')
// console.log(token, 'to aqui')