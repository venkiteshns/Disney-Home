document.addEventListener('DOMContentLoaded', function(){
    
    const mediaQuery = window.matchMedia('(max-width: 680px)');
    const mediaQuery2 = window.matchMedia('(max-width: 768px)');
    const mediaQuery3 = window.matchMedia('(max-width: 575px)');

    const toggleButton = document.getElementById('togg-button');
    const toggleButton1 = document.getElementById('togg-btn-1');
    const toggleButton2 = document.getElementById('togg-btn-2');
    const hero = document.getElementById('hero');
    const heroAdjust = document.getElementById('hero-adjust');
    const heroContent = document.getElementById('hero-content');
    const mobileMedia = document.getElementById('mobile-media');
    const playButton = document.getElementById('play-button');
    const adContent = document.getElementById('ad-content');
    const holiday1 = document.getElementById('holiday-1');
    const holiday2 = document.getElementById('holiday-2');
    const holiday3 = document.getElementById('holiday-3');
    const product1 = document.getElementById('product-1');
    const product2 = document.getElementById('product-2');
    const product3 = document.getElementById('product-3');
    const product4 = document.getElementById('product-4');

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

// Hero Background Controls
    function heroControl(e){
        if(e.matches){
            heroContent.style='display:none';
            mobileMedia.style='display:block';
            heroAdjust.style='display:block'
            hero.style.backgroundImage= "url('Assets/hero-mobile.jpeg')";
        }else{
            heroContent.style='display:block';
            mobileMedia.style='display:none';
            heroAdjust.style='display:none'
            hero.style.backgroundImage= "url('Assets/hero2.jpeg')";

        }
    }
// Holiday Controls
    function holidayControl(e){
        if (e.matches) {
            holiday1.src= "Assets/holiday-1.png"
            holiday2.src= "Assets/holiday-2.png"
            holiday3.src= "Assets/holiday-3 .jpg"
        } else {
            holiday1.src= "Assets/holiday1.2.jpeg"
            holiday2.src= "Assets/holiday2.2.jpeg"
            holiday3.src= "Assets/holiday3.2.jpeg"
        }
    }
// Shop COntrols
    function shopControl (e){
        if (e.matches) {
            product1.src= "Assets/item1.2.jpeg"
            product2.src= "Assets/item2.2.jpeg"
            product3.src= "Assets/item3.2.jpeg"
            product4.src= "Assets/item4.2.jpeg"

        } else {
            product1.src= "Assets/item1.jpeg"
            product2.src= "Assets/item2.jpeg"
            product3.src= "Assets/item3.jpeg"
            product4.src= "Assets/item4.jpeg"
        }
    }


    heroControl(mediaQuery);
    holidayControl(mediaQuery2);
    shopControl(mediaQuery3);

    
    mediaQuery.addEventListener('change',heroControl);
    mediaQuery2.addEventListener('change',holidayControl);
    mediaQuery3.addEventListener('change',shopControl);
})