const correctPassword = "01052025";

const questions = [
  { q: "Apa warna favorit adek?", a: "Biru" },
  { q: "hari apa kita jadian ?", a: "Kamis" },
  { q: "Berapa umur Adek sekarang", a: "20" },
  { q: "Tanggal Berapa Adek lahir", a: "26" },
  { q: "Sayang sama Adek nda ? ", a: "sayang banget" }
];

function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === correctPassword) {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    loadQuestions();
  } else {
    alert("Hayoloh kok Passwordnya salah 😛");
  }
}

function loadQuestions() {
  const container = document.getElementById("questions");
  container.innerHTML = "";
  questions.forEach((item, index) => {
    container.innerHTML += `
      <p>${index + 1}. ${item.q}</p>
      <input type="text" id="answer${index}" placeholder="Jawaban..." />
    `;
  });
}

function submitQuiz() {
  let correct = 0;
  questions.forEach((item, index) => {
    const userAnswer = document.getElementById(`answer${index}`).value.trim().toLowerCase();
    if (userAnswer === item.a.toLowerCase()) {
      correct++;
    }
  });

  if (correct === questions.length) {
    document.getElementById("quiz").classList.add("hidden");
    showGreeting();
  } else {
    alert("Coba lagi yaa sayang , belum bener semua 😘");
  }
}

function showGreeting() {
  document.getElementById("messagePage").classList.remove("hidden");
  document.getElementById("longMessage").innerText =
    "Hallo Kesayangan Adek......\n\n Ternyata udah sebulan yah kita bersama, dan Mas tau nda kalo setiap harinya adek makin yakin kalau mas adalah orang yang adek cari selama ini, orang yang semakin hari makin yakin untuk terus diperjuangkan.\n\n Sejauh mengenal mas nda ada hal yang nda adek suka, mas selalu bisa mengerti dan menerima adek apa adanya. maaf yah sayang adek belum bisa jadi pasangan yang sempurna walau kata mas udah sempurna, hihihihih... tapi adek bakal berusaha untuk menjadi lebih baik kedepannya.\n\n  Terima kasih sudah hadir dalam hidup adek, terima kasih udah menjadi sosok yang bisa dijadiin temen,pasangan dan pendengar yang baik. Gak tau lagi mau long teks gimana, semua kata kata indah udah mas borong nih💖. \n\n pokoknya tetap selalu jadi diri mas sendiri yah... apapun itu cerita ke adek. jadikan adek teman , sahabat , pendengar dan pasangan dalam hidup mas. Mari saling melengkapi dan hadapi semuanya bersama yah sayang Tetaplah di sisiku yaa sampai semesta mempertemukan kita💖✨\n\n -Maaf yah adek belum bisa kasih apa apa buat mas cuman ada sedikit hadiah kecil ini buat mas-";

  bgMusic.play();
  musicPlaying = true;
  document.getElementById("musicToggle").innerText = "🔊";

  startHearts();
}

function goToPhoto() {
  document.getElementById("messagePage").classList.add("hidden");
  document.getElementById("photoPage").classList.remove("hidden");
}

function goToWriteMessage() {
  document.getElementById("photoPage").classList.add("hidden");
  document.getElementById("writeMessagePage").classList.remove("hidden");
}

function saveMessage() {
  const pesan = document.getElementById("herMessage").value;

  if (pesan.trim() === "") {
    alert("Pesannya jangan kosong dong sayang 🥺");
    return;
  }

  document.getElementById("writeMessagePage").classList.add("hidden");
  document.getElementById("endingPage").classList.remove("hidden");
  showLoveMessage("I love you ❤️ kesayangan adek !");
}

function showLoveMessage(text) {
  const loveEl = document.getElementById("loveMessage");
  loveEl.innerHTML = "";
  loveEl.classList.remove("hidden");
  let index = 0;

  function typeChar() {
    if (index < text.length) {
      loveEl.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeChar, 100);
    }
  }

  typeChar();
}

let musicPlaying = false;
const bgMusic = document.getElementById("bgMusic");

function toggleMusic() {
  if (musicPlaying) {
    bgMusic.pause();
    musicPlaying = false;
    document.getElementById("musicToggle").innerText = "🔈";
  } else {
    bgMusic.play();
    musicPlaying = true;
    document.getElementById("musicToggle").innerText = "🔊";
  }
}

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '💖';

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 2 + Math.random() * 3 + 's';
  heart.style.fontSize = 16 + Math.random() * 24 + 'px';

  document.getElementById('heart-container').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

function startHearts() {
  setInterval(createHeart, 300);
}

let moveCount = 0;
function handleGiftMove() {
  const button = document.getElementById("giftMoveButton");
  const wrapper = document.getElementById("buttonWrapper");

  if (moveCount < 3) {
    const maxLeft = wrapper.clientWidth - button.offsetWidth;
    const maxTop = wrapper.clientHeight - button.offsetHeight;

    const randomLeft = Math.floor(Math.random() * maxLeft);
    const randomTop = Math.floor(Math.random() * maxTop);

    button.classList.add("animate__animated", "animate__bounce");
    button.addEventListener("animationend", () => {
      button.classList.remove("animate__animated", "animate__bounce");
    }, { once: true });

    button.style.position = "absolute";
    button.style.left = randomLeft + "px";
    button.style.top = randomTop + "px";

    moveCount++;
  } else {
    button.innerText = "🎁 Buka Hadiah 🎉";
    goToPhoto();
  }
}

console.log("Pesan dari dia:", localStorage.getItem("herMessage"));
