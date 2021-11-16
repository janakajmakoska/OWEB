let likeBtn1 = document.querySelector(".like_btn1");
let likeIcon1 = document.querySelector("#icon1");
let count1 = document.querySelector("#count1");
let clicked1 = false;

let likeBtn2 = document.querySelector(".like_btn2");
let likeIcon2 = document.querySelector("#icon2");
let count2 = document.querySelector("#count2");
let clicked2 = false;

let likeBtn3 = document.querySelector(".like_btn321");
let likeIcon3 = document.querySelector("#icon3");
let count3 = document.querySelector("#count3");
let clicked3 = false;

let likeBtn4 = document.querySelector(".like_btnsnow");
let likeIcon4 = document.querySelector("#icon4");
let count4 = document.querySelector("#count4");
let clicked4 = false;

likeBtn1.addEventListener("click" , () => {
    if(!clicked1){
        clicked1 = true;
        likeIcon1.innerHTML = `<i class = "fas fa-thumbs-up"></i>`;
        count1.textContent++;
    }else {
        clicked1 = false;
        likeIcon1.innerHTML = `<i class = "far fa-thumbs-up"></i>`;
        count1.textContent--;
    }
});

likeBtn2.addEventListener("click" , () => {
    if(!clicked2){
        clicked2 = true;
        likeIcon2.innerHTML = `<i class = "fas fa-thumbs-up"></i>`;
        count2.textContent++;
    }else {
        clicked2 = false;
        likeIcon2.innerHTML = `<i class = "far fa-thumbs-up"></i>`;
        count2.textContent--;
    }
});

likeBtn3.addEventListener("click" , () => {
    if(!clicked3){
        clicked3 = true;
        likeIcon3.innerHTML = `<i class = "fas fa-thumbs-up"></i>`;
        count3.textContent++;
    }else {
        clicked3 = false;
        likeIcon3.innerHTML = `<i class = "far fa-thumbs-up"></i>`;
        count3.textContent--;
    }
});

likeBtn4.addEventListener("click" , () => {
    if(!clicked4){
        clicked4 = true;
        likeIcon4.innerHTML = `<i class = "fas fa-thumbs-up"></i>`;
        count4.textContent++;
    }else {
        clicked4 = false;
        likeIcon4.innerHTML = `<i class = "far fa-thumbs-up"></i>`;
        count4.textContent--;
    }
});


let comment = document.querySelector("#input").value;
let commentBtn = document.querySelector("#comment");
let content = document.querySelector(".content");

commentBtn.addEventListener("click" , () => {
    document.getElementById("content").value = document.getElementById("input").value;
    document.getElementById("input").value = "";
});

let comment1 = document.querySelector("#input1").value;
let commentBtn1 = document.querySelector("#comment1");
let content1 = document.querySelector(".content1");

commentBtn1.addEventListener("click" , () => {
    document.getElementById("content1").value = document.getElementById("input1").value;
    document.getElementById("input1").value = "";
});

let comment2 = document.querySelector("#input2").value;
let commentBtn2 = document.querySelector("#comment2");
let content2 = document.querySelector(".content2");

commentBtn2.addEventListener("click" , () => {
    document.getElementById("content2").value = document.getElementById("input2").value;
    document.getElementById("input2").value = "";
});

let comment3 = document.querySelector("#input3").value;
let commentBtn3 = document.querySelector("#comment3");
let content3 = document.querySelector(".content3");

commentBtn3.addEventListener("click" , () => {
    document.getElementById("content3").value = document.getElementById("input3").value;
    document.getElementById("input3").value = "";
});
let comment4 = document.querySelector("#input4").value;
let commentBtn4 = document.querySelector("#comment4");
let content4 = document.querySelector(".content4");

commentBtn4.addEventListener("click" , () => {
    document.getElementById("content4").value = document.getElementById("input4").value;
    document.getElementById("input4").value = "";
});