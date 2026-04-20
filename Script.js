// Fungsi
function updatejam() {
    let now = new Date();

    //ambil jam real time di komputer 
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // tiap kurang dari 10 bakal di tambah 0 di depannya
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // di bungkus jadi satu
    let time = hours + ":" + minutes + ":" + seconds;

    // dipanggil kembali
    document.querySelector(".Jam-time").textContent = time;
}

// update tiap satu detik
setInterval (updatejam,1000)

// jalankan pertamakali
updatejam();

