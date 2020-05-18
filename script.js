//button

$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 250){
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });

    $("#topBtn").click(function(){
        $('html, body').animate({scrollTop : 0}, 800);
    });
});

//fade out section images

const portfolioItems = document.querySelectorAll('.portfolio-img')
    
portfolioItems.forEach(portfolioItem => {
portfolioItem.addEventListener('mouseover', () => {
    console.log();
    portfolioItem.childNodes[1].classList.remove('img-brighten')
    portfolioItem.childNodes[1].classList.add('img-darken')
})
portfolioItem.addEventListener('mouseout', () => {
    console.log();
    portfolioItem.childNodes[1].classList.add('img-brighten')
    portfolioItem.childNodes[1].classList.remove('img-darken')
})
})