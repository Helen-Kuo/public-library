
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
    
    const switchLogin1 = document.querySelector('#switch-login1');
    const switchSignup1 = document.querySelector('#switch-signup1');
    const formWrapper = document.querySelectorAll('.form-wrapper .col-6');
    switchLogin1.addEventListener('click',(e) => {
        e.preventDefault();
        formWrapper.forEach(wrapper => {
            wrapper.classList.toggle('change');
        })
    });
    switchSignup1.addEventListener('click',(e) => {
        e.preventDefault();
        formWrapper.forEach(wrapper => {
            wrapper.classList.toggle('change');
        })
    });

    // ==== 跳窗功能 ==== //
    const loginModal = document.querySelector('#account');
    const accountBtn = document.querySelector('.account-btn');
    const closeBtns = document.querySelectorAll('.close-btn');
    const tourGuideModal = document.querySelector('#tour-guide');
    const tourGuideBtn = document.querySelectorAll('.tour-guide-btn');
    const allModalOverlays = document.querySelectorAll('.modal-overlay');

    
    accountBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.classList.remove('modalHidden');
        bodyElement.classList.add('open-fixed');
    });

    tourGuideBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            tourGuideModal.classList.remove('modalHidden');
            bodyElement.classList.add('open-fixed');
        });
    });

    allModalOverlays.forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if(e.target === overlay){
                overlay.classList.add('modalHidden');
            }
        })
    })
    
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

    //==== hb側邊欄摺疊 ====//
    const toggleBtn = document.querySelector('.tour-guide-toggle');
    const dropdownContent = document.querySelector('.tour-guide-sm');
    const arrowIcon = document.querySelector('.tour-guide-toggle .arrow');

    toggleBtn.addEventListener('click', () => {
        console.log('click');
        dropdownContent.classList.toggle('open');
        arrowIcon.classList.toggle('rotated');
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
        spaceBetween: 20,
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
        interval: 100,
        duration: 800,
        delay: 500 ,
        interval: 300
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

    //==== select下拉選單 ====//
    const searchFieldOptions = [
        { value:'', text:'全文' },
        { value:'title', text:'題名' },
        { value:'author', text:'作者' },
        { value:'subject', text:'主題/標籤' },
        { value:'isbn', text:'ISBN' },
        { value:'issn', text:'ISSN' },
        { value:'barcode', text:'條碼號' },
        { value:'callnumber', text:'索書號' },
        { value:'publisher', text:'出版者' },
        { value:'classnumber', text:'分類號' },
        { value:'series', text:'叢書名' }
    ];
    const typeOptions = [
        { value:'', text:'全部類型' },
        { value:'book', text:'圖書' },
        { value:'periodical', text:'期刊' },
        { value:'multimedia', text:'多媒體' }
    ];
    const branchOption = [
        { value:'', text:'分館查詢' },
        { value:'all', text:'不分館別' },
        { value:'wufeng', text:'五峰' },
        { value:'beipu', text:'北埔' },
        { value:'baoshan', text:'寶山' },
        { value:'jianshi', text:'尖石' },
        { value:'emei', text:'峨眉' },
        { value:'culture', text:'文化局' },
        { value:'culture_mobile', text:'文化局行動書庫' },
        { value:'xinpu', text:'新埔' },
        { value:'xinfeng', text:'新豐' },
        { value:'hengshan', text:'橫山' },
        { value:'hukou', text:'湖口' },
        { value:'zhubei_fude', text:'竹北福德分館' },
        { value:'zhudong', text:'竹東' },
        { value:'zhudong_mobile', text:'竹東行動書庫' },
        { value:'county_history', text:'縣史館' },
        { value:'qionglin', text:'芎林' },
        { value:'guanxi', text:'關西' }
    ];
    
    /**
    @param {string} selectId
    @param {Array<Object>} dataArray
     */

    function populateSelect(selectId, dataArray){
        const selectElement = document.getElementById(selectId);
        if(selectElement){
            //使用document fragment提升效能，只觸發一次DOM操作
            const fragment = document.createDocumentFragment();
            dataArray.forEach(optionData => {
                const option = document.createElement('option');
                option.value = optionData.value;
                option.textContent = optionData.text;
                fragment.appendChild(option);
            });
            selectElement.appendChild(fragment);
        }
    }

    // 執行
    populateSelect('search-field', searchFieldOptions);
    populateSelect('type-select', typeOptions);
    populateSelect('branch-select', branchOption);
});