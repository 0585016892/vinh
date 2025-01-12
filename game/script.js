document.getElementById('draw-btn').addEventListener('click', function() {
    const music = document.getElementById('tet-music');
    if (music.paused) {
        music.play().catch(function(error) {
            console.log('Không thể phát nhạc: ', error);
        });
    }
    const amounts = [5000, 10000, 20000, 50000, 100000]; // Các mệnh giá tiền
    const images = [
        "./img/5k.jpg", // Thay bằng đường dẫn hình ảnh tờ tiền 5k VND
        "./img/10k.jpg", // Thay bằng đường dẫn hình ảnh tờ tiền 10k VND
        "./img/20k.jpg", // Thay bằng đường dẫn hình ảnh tờ tiền 20k VND
        "./img/50k.webp", // Thay bằng đường dẫn hình ảnh tờ tiền 50k VND
        "./img/100k.jpg", // Thay bằng đường dẫn hình ảnh tờ tiền 50k VND
    ];

    const randomAmountIndex = Math.floor(Math.random() * amounts.length);
    const randomImage = images[randomAmountIndex];
    const randomAmount = amounts[randomAmountIndex];

    const moneyDiv = document.getElementById('money');
    const resultDiv = document.getElementById('result');
    const envelope = document.querySelector('.red-envelope');

    // Áp dụng hiệu ứng "lắc" cho bao lì xì
    envelope.classList.add('shake');

    // Ẩn tờ tiền hiện tại trước khi thay thế tờ tiền mới
    moneyDiv.classList.remove('up');
    moneyDiv.classList.add('down');

    // Đợi hiệu ứng "lắc" xong, sau đó tiếp tục với quá trình
    setTimeout(function() {
        // Đặt hình ảnh tờ tiền mới
        moneyDiv.style.display = 'block';
        moneyDiv.style.backgroundImage = `url(${randomImage})`;
        moneyDiv.style.width = '65%';  // Di chuyển tờ tiền lên
        moneyDiv.style.height = '26%';  // Di chuyển tờ tiền lên
        // Hiển thị kết quả bên dưới
        resultDiv.textContent = `Vinh lì xì  ${randomAmount.toLocaleString()} VND nhe !!!`;

        // Thêm hiệu ứng để tờ tiền mới đi lên
        moneyDiv.classList.remove('down');
        moneyDiv.classList.add('up');
    }, 1000);  // Sau 2 giây (hiệu ứng "lắc" hoàn thành)

    // Xóa hiệu ứng lắc sau khi đã hoàn thành
    setTimeout(function() {
        envelope.classList.remove('shake');
    }, 3000);  // Thời gian hiệu ứng "lắc" kéo dài 0.5 giây
});