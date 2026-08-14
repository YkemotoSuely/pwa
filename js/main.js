window.onload = () => {
    'use strich';

    if('serviceWorker' in navigator){
        navigator.serviceWorker.register('./sw.js');
    }
}