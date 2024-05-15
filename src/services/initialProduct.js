export const initialProduct = {
    id:0,
    title:'',
    price:'',
    category:'',
    description:'',
    image:'https://cdn-icons-png.flaticon.com/512/18/18505.png'
}

export const getStoredCart = (user) => {
    return (window.localStorage.getItem(user+"cart")?JSON.parse(window.localStorage.getItem(user+"cart")):[])
}
