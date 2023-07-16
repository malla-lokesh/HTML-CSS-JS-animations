const myName = document.querySelectorAll('#name path');

for (let i=0; i<myName.length; i++) {
    console.log(`letter is ${i} is ${myName[i].getTotalLength()}`)
}