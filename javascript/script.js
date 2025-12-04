
// ===== nav高度縮放 ====
window.onscroll = () => {
    const navBar = document.querySelector(".nav-bar");
    if(document.documentElement.scrollTop > 50){
        navBar.classList.add("scrolled");
    }else{
        navBar.classList.remove("scrolled");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const bodyElement = document.body;
    //====hb選單開關====//
    const navBar = document.querySelector('.nav-bar');
    const hbBtn = document.querySelector('.hb');
    const menuOverlay = document.querySelector('.mobile-menu-overlay')
    
    function toggleMenu(){
        navBar.classList.toggle('menu-open');
        bodyElement.classList.toggle('open-fixed');
    }
    hbBtn.addEventListener('click', toggleMenu);

    menuOverlay.addEventListener('click', () => {
        navBar.classList.remove('menu-open');
        bodyElement.classList.remove('open-fixed');
    });

    // ==== modal圖片顯示 ==== //
    const signupImg = document.querySelector('#signup-panel img');
    const loginImg = document.querySelector('#login-panel img');
    const switchLogin = document.querySelector('#switch-login a');
    const switchSignUp = document.querySelector('#switch-signup a');
    

    switchLogin.addEventListener('click', (e) =>{
        e.preventDefault();
        signupImg.classList.add('imgHidden');
        loginImg.classList.remove('imgHidden');
    });
    switchSignUp.addEventListener('click', (e) => {
        e.preventDefault();
        loginImg.classList.add('imgHidden');
        signupImg.classList.remove('imgHidden');
    });
    

    // ==== 跳窗功能 ==== //
    const loginModal = document.querySelector('#account');
    const accountBtn = document.querySelector('.account-btn');
    const closeBtns = document.querySelectorAll('.close-btn');
    const tourGuideModal = document.querySelector('#tour-guide');
    const tourGuideBtn = document.querySelectorAll('.tour-guide-btn');
    const modalOverlay = document.querySelector('.modal-overlay');

    if(accountBtn){
        accountBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("click");
            loginModal.classList.remove('modalHidden');
            bodyElement.classList.add('open-fixed');
        });
    }
    if(tourGuideBtn){
        tourGuideBtn.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                tourGuideModal.classList.remove('modalHidden');
                bodyElement.classList.add('open-fixed');
            });
        });
    }
    closeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if(btn.closest('#tour-guide')){
                tourGuideModal.classList.add('modalHidden');
                bodyElement.classList.remove('open-fixed');
            }else if(btn.closest('#account')){
                loginModal.classList.add('modalHidden');
                bodyElement.classList.remove('open-fixed');
            }
        });
    });

    //==== font-scale 開闔 ====//
    const toggleButton = document.querySelector('.font-scale div');
    const fontScaleContainer = document.querySelector('.font-scale');
    const fontScaleButtons = document.querySelector('.font-scale-buttons');
    
    toggleButton.addEventListener('click', () => {
        fontScaleContainer.classList.toggle('open');
    });
    fontScaleButtons.addEventListener('mouseleave', () => {
        fontScaleContainer.classList.remove('open');
    });


    // swiper1.Hero Section Swiper
    const heroSwiper = new Swiper('#hero-swiper', {
        loop: true,
        autoplay: {
            delay: 3000,
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
    const activitySwiper = new Swiper('.hot-activity-swiper', {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 20,
        
        pagination: {
            el: '.activity-pagination',
            clickable: true,
            renderBullet: function (index, className){
                const pageNum = index + 1;
                return `<span class="${className} btn-sm">${pageNum}</span>`
            }
        },
        effect: 'slide', 
        speed: 800,
        watchOverflow: true, 
    });

    //swiper3.best-moments-swiper
    const bestMomentsSwiper = new Swiper('.best-moments-swiper', {
        slidesPerView: 'auto',
        spaceBetween: -1,
        loop: true,
        loopedSlides: 8,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 3000,
    });

    //rwd indoor-img swiper
    const indoorImgSwiper = new Swiper('#indoor-img-swiper', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'slide', 
        speed: 1500,
        watchOverflow: true, 
    });


    // ==== 滾動動畫 ==== //
    const sr = ScrollReveal({
    distance: '60px',
    duration: 800,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)', // 動畫曲線
    interval: 1000,
    reset: false
    });

    sr.reveal('.reveal-item', { 
        origin: 'bottom', 
        interval: 100
    });
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
            }
        });
    });

    // ==== 首頁搜尋欄按鈕切換 ==== //
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
        })
    });
});