let count=0;
let countEl=document.getElementById("count-el")// here we use dom document object model it is real world model of html things basically use javascript for modifying website
let saveEl=document.getElementById("save-el")
function increment()
{
count=count+1
countEl.innerText=count
console.log(count)

}
let tree="you have tree new notifications"
console.log(tree)

function save()
{
    let countstr=count+" - "
    saveEl.textContent+=countstr
    countEl.textContent=0
    count=0
    console.log(count)
}