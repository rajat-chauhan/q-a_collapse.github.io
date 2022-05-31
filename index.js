
let expand = document.querySelectorAll(".btn-toggle");

let ans = document.querySelectorAll(".qa-box");

// expand.forEach(value => {
//     value.addEventListener("click", function(){
//         let ans = document.querySelectorAll(".qa-box");
//         ans.forEach(value => {
//             value.classList.toggle("active");
//     } )
// })
// })


for(let i=0; i < expand.length; i++){
        expand[i].addEventListener("click", function () {
                   ans[i].classList.toggle("active");
})
}
