// 这里可以添加JavaScript代码
console.log("网站已加载完成！");

// 示例：添加一个简单的交互
document.querySelector('h1').addEventListener('click', function() {
    alert('你点击了标题！');
});

var music = document.getElementById("bgMusic");
var musicIndicator = document.getElementById("musicIndicator");
var isPlaying = false;

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
            // 自动播放被阻止
            console.log("自动播放被阻止，需要用户交互才能播放");
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

// 可选：添加音量控制
music.volume = 0.5; // 设置初始音量为 50%
