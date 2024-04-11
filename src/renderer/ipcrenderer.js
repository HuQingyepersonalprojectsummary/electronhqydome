var btn = document.getElementById('btn');
btn.onclick = function() {
    var option = {
        title: 'electron 通知',
        body: 'electron跨平台软件开发教程更新了！',
    };
    var notification = new Notification(option.title, option);
    notification.onclick = function() {
        console.log('点击了！');
    };
};

// 监听网络变化
window.addEventListener('online', function() {
    console.log('网络连接成功！');
});
window.addEventListener('offline', function() {
    console.log('网络断开！');
});

window.addEventListener('offline',function(){
    var option = {
        title: 'electron 通知',
        body: 'electron跨平台软件开发教程更新了！',
    };
    var myNotifiaction = new Notification(option.title, option);
    myNotifiaction.onclick = function() {
        console.log('点击了！');
    };
});