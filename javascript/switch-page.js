document.addEventListener('DOMContentLoaded', function(){
    // 獲取標籤內容
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
    })
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

        })
    })


})