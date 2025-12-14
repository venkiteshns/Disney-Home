document.addEventListener('DOMContentLoaded', function(){
    
    const mediaQuery = window.matchMedia('(max-width: 680px)');

    const toggleButton = document.getElementById('togg-button');
    const toggleButton1 = document.getElementById('togg-btn-1');
    const toggleButton2 = document.getElementById('togg-btn-2');
    const hero = document.getElementById('hero');
    const heroAdjust = document.getElementById('hero-adjust');
    const heroContent = document.getElementById('hero-content');
    const mobileMedia = document.getElementById('mobile-media');
    const playButton = document.getElementById('play-button');
    const adContent = document.getElementById('ad-content');

    toggleButton.addEventListener('click', function(){
        toggleButton1.classList.toggle('toggle-display');
        toggleButton2.classList.toggle('toggle-display');
    })

    playButton.addEventListener('mouseenter' ,function() {
        playButton.src = "Assets/icons8-play-50.png";
    })
    playButton.addEventListener('mouseleave', function(){
        playButton.src = "Assets/icons8-play-button-circled-50.png";
    })
    playButton.addEventListener('click', function(){
        console.log(adContent.innerHTML);
        adContent.innerHTML= `<video controls autoplay class="spider-man" src="Assets/vide.mp4"></video>`;
        playButton.style= 'display:none';
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