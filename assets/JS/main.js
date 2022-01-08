// var listMenuNode = document.getElementById('nav')
// console.log(listMenuNode.querySelectorAll('li>a')[2]);

// querySelector và ByID trả về element

// var element = document.getElementById('main')
// console.log(element);
// var element2 = document.querySelector('div>ul>li')
// console.log(element2);

/* querySelectorAll sẽ cho ra một NoteList, 
 chúng ta có thể lấy đc elenment từ chỉ mục index */

//  var boxElement = document.querySelectorAll('div')[]
//  console.log(boxElement);

/*ByClassName thì cho ra một HTMLCollection,
ta có thể lấy ra element bằng cách truyền giá trị index.
*/
// var boxElement2 = document.getElementsByClassName('box')
// console.log(boxElement2);




// var boxElement = document.getElementsByClassName('box')[0]
// console.log(boxElement);

// // var childrenElements =
// console.log(boxElement.getElementsByClassName('children')[1]);

const buyBtns = document.querySelectorAll('.js-buy-btn');
const model = document.querySelector('.js-modal')
const modelClose = document.querySelector('.js-close-modal')
const modelContaniner = document.querySelector('.js-modal-contaniner')

function showModal(){
    model.classList.add('open')
}

function closeModal() {
    model.classList.remove('open')
}


for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showModal)
}

modelClose.addEventListener('click', closeModal)

model.addEventListener('click', closeModal)


// event là một sự kiện, stopPropagation là dửng nổi bọt đến các phần tử bên trong
modelContaniner.addEventListener('click', function(event){
    event.stopPropagation()
})
/**
 * Truy suất vào nơi cần nhận sự kiện sau đó tạo vòng lập để lấy từng element Node
 * riêng lẽ và gán vào giá trị mới, sau đó dùng giá trị mới với từng element
 * riêng lẽ để dùng  hàm addEventListener.
 * -
 */
// console.log(buyBtns);