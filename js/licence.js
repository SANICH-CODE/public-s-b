
document.getElementById('publiclink_1').addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем переход по ссылке
     window.location.href = '/files/1.mp4'; // Переадресация
    });
//     const code = prompt('Содержимое защищено, введите код доступа!');
//     const messageDiv = document.getElementById('message');
//     messageDiv.textContent = 'Защищено паролем';
//     if (code === null) {
//         messageDiv.textContent = 'Действие отменено';
//         alert('Отменено')
//     } else if (code === '78912') {
//         window.location.href = '/files/1.mp4'; // Переадресация
//     } else {
//         alert('Неверный пароль')
//         messageDiv.textContent = 'Неверный код';
//     }
// });
document.getElementById('publiclink_2').addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем переход по ссылке
     window.location.href = '/files/2.mp4'; // Переадресация
    });
document.getElementById('publiclink_3').addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем переход по ссылке
     window.location.href = '/files/ava.zip'; // Переадресация
    });
document.getElementById('publiclink_4').addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем переход по ссылке
     window.location.href = '/files/cpp.zip'; // Переадресация
    });
