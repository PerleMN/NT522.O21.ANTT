// Lấy các phần tử cần thiết từ DOM
const minusBtn = document.querySelectorAll('.minus-btn');
const plusBtn = document.querySelectorAll('.plus-btn');
const amountInput = document.querySelectorAll('.amount');
/*console.log(minusBtn)
console.log(plusBtn)
console.log(amountInput)*/
// Xử lý sự kiện khi nhấn vào nút "-"
    minusBtn.forEach((min) => {
        min.addEventListener('click', (event) => {
        let currentValue = parseInt(event.currentTarget.parentElement.querySelector('.amount').value);
        // Chỉ cho phép giảm khi số lượng hiện tại lớn hơn 1
            if (currentValue > 1) {
                event.currentTarget.parentElement.querySelector('.amount').value = currentValue - 1;
            }
        });
    });

// Xử lý sự kiện khi nhấn vào nút "+"
    plusBtn.forEach((plu) => {
        plu.addEventListener('click', (event) => {
            let currentValue = parseInt(event.currentTarget.parentElement.querySelector('.amount').value);
            event.currentTarget.parentElement.querySelector('.amount').value = currentValue + 1;
        });
    });

// Lắng nghe sự kiện khi trang đã được tải hoàn toàn
document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.querySelectorAll('.amount');
    inputElement.forEach((inputEl) => {
        inputEl.addEventListener('input', function(event) {
            let inputValue = event.target.value;
            // Loại bỏ mọi ký tự không phải là số
            inputValue = inputValue.replace(/[^0-9]/g, ''); // Chỉ cho phép số

            // Kiểm tra xem giá trị có là số âm không, nếu có thì đặt lại giá trị là ''
            /*if (parseInt(inputValue) < 0) {
                inputValue = '';
            }*/
            if (inputValue == ''){
                inputValue = 1;
            }

            // Cập nhật giá trị của input
            event.target.value = inputValue;
        });
    });
});

//Xử lý slideshow
let slider = document.querySelector('.container .wrapper');
let items = document.querySelectorAll('.container .wrapper .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dot = document.querySelectorAll('.container .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.container .dots li.active');
    last_active_dot.classList.remove('active');
    dot[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);
}

dot.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};
