// ==================== Footer Icon Buttons ====================
function footerButtons(){
    function footerButtonFacebook(){ window.open("https://www.facebook.com/", '_blank'); }
    function footerButtonTwitter(){ window.open("https://www.twitter.com/", '_blank') }
    function footerButtonInstagram(){ window.open("https://www.instagram.com/", '_blank') }
    function footerButtonGithub(){ window.open("https://github.com/klystrn/the-tea-shop", '_blank') }

    document.querySelector(".footer_button_facebook").onclick = function () { footerButtonFacebook() };
    document.querySelector(".footer_button_twitter").onclick = function () { footerButtonTwitter() };
    document.querySelector(".footer_button_instagram").onclick = function () { footerButtonInstagram() };
    document.querySelector(".footer_button_github").onclick = function () { footerButtonGithub() };
}

// ==================== CALLING FUNCTIONS ====================
footerButtons()