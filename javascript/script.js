
// ===== nav高度縮放 ====
window.onscroll = () => {
    const navBar = document.querySelector(".nav-bar");

    if(document.documentElement.scrollTop > 180){
        navBar.classList.add("scrolled");
    }else{
        navBar.classList.remove("scrolled");
    }
}


// ===== swiper ====
document.addEventListener('DOMContentLoaded', function() {
    
    // swiper1.Hero Section Swiper
    const heroSwiper = new Swiper('#hero-swiper', {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false, // 使用者手動操作後不停止自動播放
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'slide', 
        speed: 800,
        watchOverflow: true, 
    });

    // swiper2.Hot Activity Swiper
    


    // ==== 滾動動畫 ==== //
    const sr = ScrollReveal({
    distance: '60px',
    duration: 1000,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)', // 動畫曲線
    interval: 1000,
    reset: false
    });

    sr.reveal('.reveal-item', { 
        origin: 'bottom', 
        delay: 200,
        interval: 300
    });
    // 針對 .reveal-special 元素應用不同的動畫
    sr.reveal('.reveal-left', {
        origin: 'left',
        distance: '100px',
        duration: 800,
        delay: 500 ,
        interval: 300
    });
    sr.reveal('.reveal-right', {
        origin: 'right',
        distance: '100px',
        duration: 800,
        delay: 500,
        interval: 300
    });
    sr.reveal('.reveal-fadein', {
        distance: '0',
        duration: 800,
        opacity: 0,
        delay: 500 ,
        interval: 500
    });


    // ==== switch page ==== //
    const labelButtons = document.querySelectorAll('.label-btn');
    const contentSections = document.querySelectorAll('.content-wrapper .outer-frame');

    //找到當前active索引
    let activeIndex = 0;
    labelButtons.forEach((btn, index) => {
        if(btn.classList.contains('active')){
            activeIndex = index;
        }
    });

    //初始化內容顯示
    contentSections.forEach((section, index) => {
        if(index === activeIndex){
            section.classList.remove('hidden');
        }else{
            section.classList.add('hidden');
        }
    });
    //為每個按鈕添加點擊事件
    labelButtons.forEach((button, index) => {
        button.addEventListener('click', () => {

            // 切換與移除active狀態
            labelButtons.forEach(btn => btn.classList.remove('active'));
            if(labelButtons[index]){
                labelButtons[index].classList.add('active');
            }
            // 切換與移除hidden狀態
            contentSections.forEach(section => section.classList.add('hidden'));

            //顯示當前按鈕索引相對應內容區域
            if(contentSections[index]){
                contentSections[index].classList.remove('hidden');
                sr.sync();
                
            }
        });
    })
});

