const hello = localStorage.getItem('hello');
console.log(hello);

const setAge = () => {
    localStorage.setItem('age', 31);
}

const removeAge = () => {
    localStorage.removeItem('age', 31);
}