const showAlert = () => {
   alert('Dost kicu taka dhar de');
}

const lendMoney = () => { 
    const result = confirm('Will you lend me 500 tk?');
    console.log(result);
    if(result === true){
        alert('Tui amar Jan er dosto')
    }
    else{
        console.log('Dure GIya Mor')
    }
}

const getInfo = () =>{
    const name = prompt('Tell me your name')
    console.log(name);
    if(name === null){
        alert('nam na dile kam nai');
    }
    else{
        console.log('amar jan er bondhu')
    }
}