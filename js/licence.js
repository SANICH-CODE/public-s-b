const userAgent = navigator.userAgent;

// Проверяем, содержит ли userAgent слова, указывающие на мобильное устройство
const isMobile = /Mobi|Android/i.test(userAgent);

if (isMobile) {
    console.log('Mobile'); // Для телефонов и планшетов
} else {
    console.log('PC'); // Для ПК и ноутбуков
}

document.getElementById('publiclink_1').addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем переход по ссылке
    window.location.href = '/files/1.mp4'; // Переадресация
});

document.getElementById('publiclink_2').addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем переход по ссылке
    window.location.href = '/files/2.mp4'; // Переадресация
});

document.getElementById('publiclink_3').addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем переход по ссылке
    if (isMobile) {
        alert('Файл доступен только на компьютерах и ноутбуках'); // Показываем alert, если пользователь на ПК
    }else{
    window.location.href = '/files/ava.zip';} // Переадресация
});

document.getElementById('publiclink_4').addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем переход по ссылке
    if (isMobile) {
        alert('Файл доступен только на компьютерах и ноутбуках'); // Показываем alert, если пользователь на ПК
    }else{
    window.location.href = '/files/cpp.zip';} // Переадресация
});