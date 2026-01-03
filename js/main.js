const langItem = document.querySelector(".header_lang_item");
const dropdown = document.querySelector(".lang_dropdown");
const arrow = document.querySelector(".header_lang_button");

langItem.addEventListener("click", () => {
  dropdown.classList.toggle("active");
  arrow.classList.toggle("active");
});


document.addEventListener('DOMContentLoaded', function() {
        const header = document.querySelector('.header-clickable');
        const chevron = document.querySelector('.chevron');
        const inner = document.querySelector('.aside_mobile_inner');
        
        function toggleExpand() {
            inner.classList.toggle('expanded');
        }
        
        header.addEventListener('click', toggleExpand);
        chevron.addEventListener('click', toggleExpand);
    });

    

