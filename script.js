document.addEventListener('DOMContentLoaded', function(){
    
    const mediaQuery = window.matchMedia('(max-width: 680px)');

    const toggleButton = document.getElementById('togg-button');
    const toggleButton1 = document.getElementById('togg-btn-1');
    const toggleButton2 = document.getElementById('togg-btn-2');
    const hero = document.getElementById('hero');
    const heroAdjust = document.getElementById('hero-adjust');
    const heroContent = document.getElementById('hero-content');
    const mobileMedia = document.getElementById('mobile-media');

    toggleButton.addEventListener('click', function(){
        toggleButton1.classList.toggle('toggle-display');
        toggleButton2.classList.toggle('toggle-display');
    })

    
    
    function heroControl(e){
        if(e.matches){
            console.log('match');
            heroContent.style='display:none';
            mobileMedia.style='display:block';
            heroAdjust.style='display:block'
            hero.style.backgroundImage= "url('Assets/hero-mobile.jpeg')";
        }else{
            console.log('not match');
            heroContent.style='display:block';
            mobileMedia.style='display:none';
            heroAdjust.style='display:none'
            hero.style.backgroundImage= "url('Assets/hero.jpeg')";

        }
    }

    heroControl(mediaQuery);

    mediaQuery.addEventListener('change',heroControl);
})