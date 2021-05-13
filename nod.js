console.log("Welcome to this Magic note app")
show()
let a = document.getElementById('addbtn')
a.addEventListener('click', function (e) {
    let t = document.getElementById('addTxt')
    let n = localStorage.getItem('notes')
    if (n == null) {
        noj = [];
    }
    else {
        noj = JSON.parse(n)
    }
    console.log(noj)
    noj = Array.from(noj)
    noj.push(t.value);
    localStorage.setItem('notes', JSON.stringify(noj))
    console.log(noj)
    t.value = '';
    show();
})
function show() {
    let n = localStorage.getItem('notes')
    if (n == null) {
        noj = [];
    }
    else {
        noj = JSON.parse(n)
    }
    let html = '';
    noj.forEach(function (element, index) {
        html += `
        <div class="mynotes my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Note ${index + 1}</h5>
                  <p class="card-text">${element}</p>
                  <button class="btn btn-primary" id='${index}' onclick='deleteNode(this.is)'>Delete Note</button>
                </div>
              </div>
        `});
    let n2 = document.getElementById('notes')
    if (noj.length != 0) {
        n2.innerHTML = html
    }
    else {
        n2.innerText = `Nothing to show! Use "Add a Note" above section to add note`
    }

}
function deleteNode(index) {
    console.log(`I am deleting a note `);
    let n = localStorage.getItem('notes')
    if (n == null) {
        noj = [];
    }
    else {
        noj = JSON.parse(n)
    }
    noj.splice(index, 1)
    localStorage.setItem('notes', JSON.stringify(noj))
    show();
}
let s = document.getElementById('search')
console.log('hi         hi')

console.log(s.value,' line 1 ji')
// let sb=document.getElementById('sb')
// s.addEventListener('input',function(){
//     console.log("'search button clicked")
//     let d=s.value.toLowerCase();
//     console.log(d,'d ki value')
//     let n=localStorage.getItem('notes')
//     n=JSON.parse(n)
//     console.log(n,typeof n)
//     if (n.length==0){
//         show();
//     }
//     else{
//         n.forEach(function(element){
//             console.log(element)
//             if (element.includes(d)){
//                 console.log(element,' is block')
//                 element.style.display='block';
//             }
//             else{
//                 console.log(element, '  is none display')
//                 element.style.display='none';
//             }
//         })
//     }
//     s.value=s.value;
// })





s.addEventListener("input",function(){
    console.log("'search button clicked")
    let d=s.value.toLowerCase();
    console.log(d,'  is d  value')
    let n=document.getElementsByClassName('mynotes')
    console.log(Array.from(n),'is array')
    Array.from(n).forEach(function (element) {
        console.log(element, 'element')
        let c=element.getElementsByTagName('p')[0].innerText
        console.log('c      ** ',c)
        if(c.includes(s.value)){
            console.log("block")
            element.style.display='block'
        }
        else{
            console.log('none')
            element.style.display='none'
        }
    })
});
