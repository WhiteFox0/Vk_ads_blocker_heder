// ==UserScript==
// @name       VK ads blocker
// @version    0.2
// @description VK ads blocker
// @match      http://vk.com/*
// @copyright  2012+, WhiteFox_0
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(function(){
    window.Debug = false;

    if(window.VkAdsBloker != true){
        window.VkAdsBloker = true;
        console.log('VK ads blocker is started');
        document.addEventListener("DOMSubtreeModified", function() {
            CheckAds();
        }, false);
    }
    
    function CheckAds(){
        Log('Check ads');
        var style = $('body').attr('style');
        var element = document.getElementById('ads_div');
        if(element != null || (style != null && style != ''))
            CloseAds();
    }
    
    function CloseAds(){
        $('body').attr('style', '');
        document.getElementsByClassName('scroll_fix')[0].style.paddingTop = "0px";
        document.body.removeChild(document.getElementById('ads_div'));
        Log('Removed ads');
    }
    
    function Log(o){
        if(window.Debug)
            console.log(o);
    }
});