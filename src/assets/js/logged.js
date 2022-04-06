// VEREFICA SE USER ESTÁ LOGADO 

// const { default: axios } = require("axios")

const tokenStorage = localStorage.getItem('token')

if (!tokenStorage) {
    document.querySelector('body').remove()
    window.location.href = '/index.html'

}else if(tokenStorage === undefined){
    window.location.href = '/index.html'
}