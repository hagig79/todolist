var result = navigator.serviceWorker.register('sw.js', {scope: '/todolist/'});

$(function () {
    $('#btn-save').click(function () {
        console.log($('#text-input').val());
    });
});