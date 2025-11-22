document.addEventListener('DOMContentLoaded', function() {
    // ==== 顯示更多 ==== //
    const contentBlock = document.querySelector('.collapsible');
    const contentHeight = contentBlock.scrollHeight;

    function toggleContent(buttonElement){
        const isCollapsed = (buttonElement.textContent.includes('更多'));

        if(isCollapsed){
            contentBlock.style.maxHeight = contentHeight + "px";
            buttonElement.innerHTML = '<button class="toggle-button" data-state="collapsed">顯示更少<span class="material-symbols-outlined">keyboard_arrow_up</span></button>';
        }else{
            contentBlock.style.maxHeight = contentHeight + 'px';
            window.requestAnimationFrame(() => {
                contentBlock.style.maxHeight = '90px';
            });
            buttonElement.innerHTML = '<button class="toggle-button" data-state="collapsed">顯示更多<span class="material-symbols-rounded">keyboard_arrow_down</span></button>';
        }
    }
    
    const toggleBtn = document.querySelectorAll('.toggle-button');
    toggleBtn.forEach(button => {
        button.addEventListener('click', () => {
            toggleContent(button);
        });
    });
});