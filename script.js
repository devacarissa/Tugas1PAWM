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



// Pronunciation Practice
function playAudio() {
    const audio = new Audio('audio/word.mp3'); // Add audio file here
    audio.play();
}

function checkPronunciation() {
    // You would need to integrate SpeechRecognition API for checking pronunciation.
    const feedback = document.getElementById("pronunciation-feedback");
    feedback.textContent = "Pronunciation check feature coming soon!";
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
function checkReading() {
    const answer = document.getElementById("question1").value;
    const feedback = document.getElementById("reading-feedback");

    if (answer === "apples") {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorrect!";
        feedback.style.color = "red";
    }
}

// Phrasal Verbs
function checkPhrasal() {
    const verb = document.getElementById("phrasal-verb").value;
    const feedback = document.getElementById("phrasal-feedback");

    if (verb === "call off") {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorrect!";
        feedback.style.color = "red";
    }
}

function goToMenu() {
    // Sembunyikan semua section fitur (contoh: Grammar Practice)
    document.getElementById('grammar-section').style.display = 'none'; 
    document.getElementById('pronunciation-section').style.display = 'none'; 
    document.getElementById('vocabulary-section').style.display = 'none'; 
    document.getElementById('reading-section').style.display = 'none'; 
    document.getElementById('phrasal-section').style.display = 'none'; // Jika ada bagian lain

    // Tampilkan menu fitur kembali
    document.getElementById('menu').style.display = 'flex'; // Tampilkan menu yang ada

    // Tampilkan elemen header utama (judul, deskripsi, dll.)
    document.getElementById('main-header').style.display = 'block';
}


