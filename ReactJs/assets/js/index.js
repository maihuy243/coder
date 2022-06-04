const root = document.getElementById('root')
let h1 = document.createElement('h1')
h1.title = "Hello"
h1.className = "heading"
h1.innerText = "Hello Guys !"

root.appendChild(h1);


// 
let h1react = React.createElement('h1', {
    title: "hello",
    className: "heading",

}, 'Hello guys !')

console.log(h1react);
console.dir(h1);