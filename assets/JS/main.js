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

function showModal() {
    model.classList.add('open')
}


function closeModal() {
    model.classList.remove('open')
}


for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showModal)
}

modelClose.addEventListener('click', closeModal)

model.addEventListener('click', closeModal)


// event là một sự kiện, stopPropagation là dửng nổi bọt đến các phần tử bên trong
modelContaniner.addEventListener('click', function(e) {
        e.stopPropagation()
    })
    /**
     * Truy suất vào nơi cần nhận sự kiện sau đó tạo vòng lập để lấy từng element Node
     * riêng lẽ và gán vào giá trị mới, sau đó dùng giá trị mới với từng element
     * riêng lẽ để dùng  hàm addEventListener.
     * -
     */
    // console.log(buyBtns);

var headerElement = document.getElementById('header')
var mobileMenu = document.getElementById('mobile-menu')
var headerHeight = headerElement.clientHeight


// dong mo menu
mobileMenu.onclick = function() {
    var isClosed = headerElement.clientHeight === headerHeight;
    if (isClosed) {
        headerElement.style.height = "auto";
    } else {
        headerElement.style.height = null
    }
}

// Tu dong dong khi mo menu

var menuItems = document.querySelectorAll('#nav li a[href*="#"]')

for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    console.log(menuItem.nextElementSibling);

    menuItem.onclick = function() {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if (isParentMenu) {
            event.preventDefault()
        } else {
            headerElement.style.height = null

        }
    }
}