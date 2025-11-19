document.addEventListener('DOMContentLoaded', () => {
    const sizeSwitcher = document.querySelector('.font-scale');
    const htmlElement = document.documentElement;
    const StorageKey = 'fontSizePreference';

    function initializeFontSize(){
        const savedSize = localStorage.getItem(StorageKey) || 'medium';
        setSizeClass(savedSize);
        updateActiveButton(savedSize);
    }

    // 監聽事件
    sizeSwitcher.addEventListener('click', (e) => {
        const target = e.target;
        // console.log(target.tagName);
        if(target.tagName === 'BUTTON' && target.dataset.size){
            const newSize = target.dataset.size;
            setSizeClass(newSize);
            //更新按鈕樣式
            updateActiveButton(newSize);
            localStorage.setItem(StorageKey, newSize);
        }
    });

    // 核心功能切換
    function setSizeClass(size){
        //初始化
        htmlElement.classList.remove('size-small', 'size-large');
        //更新
        if(size === 'small'){
            htmlElement.classList.add('size-small');
        }else if(size === 'large'){
            htmlElement.classList.add('size-large');
        }
    }
    //切換按鈕狀態
    function updateActiveButton(activeSize){
        sizeSwitcher.querySelectorAll('button').forEach(btn => {
            btn.classList.remove('active');
            if(btn.dataset.size === activeSize){
                btn.classList.add('active');
            }
        });
    }
    initializeFontSize();
});