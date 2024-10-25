// Toggle visibility of sections

function showMenu() {
    // Sembunyikan tombol "Start" setelah diklik
    document.querySelector('button').style.display = 'none';

    // Tampilkan menu yang sebelumnya disembunyikan
    document.getElementById('menu').style.display = 'flex';
}

function toggleSection(sectionId) {
    // Sembunyikan menu saat fitur dipilih
    document.getElementById('menu').style.display = 'none';
    
    // Sembunyikan header setelah fitur dipilih
    document.getElementById('main-header').style.display = 'none';

    // Menampilkan konten section yang dipilih
    const section = document.getElementById(sectionId);
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

// Grammar Practice
// Fungsi yang mengizinkan item untuk di-drag ke dalam drop zone
function allowDrop(event) {
    event.preventDefault();
}

// Fungsi yang menangani ketika item mulai di-drag
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// Fungsi yang menangani ketika item di-drop ke dalam drop zone
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);

    // Memastikan elemen yang didrop adalah kata yang benar
    if (event.target.classList.contains('drop-zone')) {
        event.target.textContent = draggedElement.textContent;

        // Cek apakah jawaban benar
        if (data === "correct1" && event.target.id === "drop-zone1") {
            alert("Correct!");
        } else if (data === "correct2" && event.target.id === "drop-zone2") {
            alert("Correct!");
        } else if (data === "correct3" && event.target.id === "drop-zone3") {
            alert("Correct!");
        } else if (data === "correct4" && event.target.id === "drop-zone4") {
            alert("Correct!");
        } else if (data === "correct5" && event.target.id === "drop-zone5") {
            alert("Correct!");
        } else if (data === "correct6" && event.target.id === "drop-zone6") {
            alert("Correct!");
        } else {
            alert("Incorrect, try again.");
        }
    }
}


// Vocabulary Builder
function checkAnswer(answer) {
    if (answer === 'correct1' || answer === 'correct2') {
        alert("Correct!");
    } else {
        alert("Incorrect, try again.");
    }
}

// Reading Comprehension
function checkReadingAnswer() {
    var answer = document.getElementById('reading-answer').value;
    if (answer === "correct") {
        alert("Correct! John bought apples.");
    } else if (answer === "wrong") {
        alert("Incorrect. Try again!");
    } else {
        alert("Please select an answer.");
    }
}
function goToMenu() {
    // Sembunyikan semua section fitur yang ada (contoh: Grammar Practice, Vocabulary, Reading)
    document.getElementById('grammar-section').style.display = 'none'; 
    document.getElementById('vocabulary-section').style.display = 'none';  
    document.getElementById('reading-section').style.display = 'none';

    // Tampilkan menu fitur kembali
    document.getElementById('menu').style.display = 'flex'; // Tampilkan menu yang ada

    // Tampilkan elemen header utama (judul, deskripsi, dll.)
    document.getElementById('main-header').style.display = 'block';
}



