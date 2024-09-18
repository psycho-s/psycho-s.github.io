// 这里可以添加JavaScript代码
console.log("网站已加载完成！");

// 示例：添加一个简单的交互
document.querySelector('h1').addEventListener('click', function() {
    alert('你点击了标题！');
});

var music = document.getElementById("bgMusic");
var musicIndicator = document.getElementById("musicIndicator");
var musicBanner = document.getElementById("musicBanner");
var musicEndBanner = document.getElementById("musicEndBanner");
var isPlaying = false;

// 监听音乐播放结束事件
music.addEventListener('ended', function() {
    isPlaying = false;
    musicIndicator.textContent = "🎵";
    musicIndicator.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    showBanner('musicEndBanner');
});

// 尝试自动播放
window.addEventListener('load', function() {
    var playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
            // 自动播放成功
            isPlaying = true;
            musicIndicator.textContent = "⏸";
            musicIndicator.style.backgroundColor = "rgba(255, 105, 180, 0.7)";
        })
        .catch(error => {
            // 自动播放被阻止，显示通知栏
            console.log("自动播放被阻止，显示通知栏");
            showBanner('musicBanner');
        });
    }
});

function toggleMusic() {
    if (isPlaying) {
        music.pause();
        musicIndicator.textContent = "🎵";
        musicIndicator.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    } else {
        music.play();
        musicIndicator.textContent = "⏸";
        musicIndicator.style.backgroundColor = "rgba(255, 105, 180, 0.7)";
    }
    isPlaying = !isPlaying;
}

function showBanner(bannerId) {
    var banner = document.getElementById(bannerId);
    banner.classList.add('show');
    setTimeout(() => {
        banner.style.transform = "translateX(-50%) translateY(0)";
        banner.style.opacity = "1";
    }, 10);
}

function closeBanner(bannerId) {
    var banner = document.getElementById(bannerId || 'musicBanner');
    banner.style.transform = "translateX(-50%) translateY(-20px)";
    banner.style.opacity = "0";
    setTimeout(() => {
        banner.classList.remove('show');
    }, 300);
}

// 可选：添加音量控制
music.volume = 0.5; // 设置初始音量为 50%
