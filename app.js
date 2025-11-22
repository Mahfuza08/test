// Savollar ro'yxati
    const questions = [
  {
    q: "1. Dasturlash tili nima?",
    options: [
      "Kompyuter o‘yinlari turi",
      "Kompyuterga buyruq berish uchun vosita",
      "Internet sayti",
      "Telefon ilovasi"
    ],
    correct: 1
  },
  {
    q: "2. Quyidagilardan qaysi biri dasturlash tili emas?",
    options: ["Python", "C++", "HTML", "Java"],
    correct: 2
  },
  {
    q: "3. O‘zgaruvchi (variable) nima?",
    options: [
      "Dasturdagi rasm fayli",
      "Ma'lumotni vaqtincha saqlovchi joy",
      "Kodni tahlil qiluvchi dastur",
      "Matn yozish joyi"
    ],
    correct: 1
  },
  {
    q: "4. Python dasturlash tilida ekranga matn chiqarish uchun nima ishlatiladi?",
    options: ["show()", "print()", "echo()", "display()"],
    correct: 1
  },
  {
    q: "5. JavaScript qaysi turdagi dasturlash tili?",
    options: [
      "Statik",
      "Interaktiv veb sahifalar uchun",
      "Fayl tizimi uchun",
      "Tarmoq protokoli"
    ],
    correct: 1
  },
  {
    q: "6. Quyidagilardan qaysi biri to‘g‘ri o‘zgaruvchi nomi?",
    options: ["1son", "ism", "salom-dunyo", "var"],
    correct: 1
  },
  {
    q: "7. Python’da izoh (comment) yozish uchun qaysi belgi ishlatiladi?",
    options: ["//", "/* */", "#", "--"],
    correct: 2
  },
  {
    q: "8. HTML faylida kodlar qanday teglarda yoziladi?",
    options: ["{}", "()", "<>", "[]"],
    correct: 2
  },
  {
    q: "9. Dasturlashda 'if' operatori nima uchun ishlatiladi?",
    options: [
      "Takrorlash uchun",
      "Shartni tekshirish uchun",
      "Funksiya yaratish uchun",
      "Rasm chizish uchun"
    ],
    correct: 1
  },
  {
    q: "10. Dasturdagi xato nima deb ataladi?",
    options: ["Error", "Warning", "System", "Alert"],
    correct: 0
  },
  {
    q: "11. Quyidagilardan qaysi biri Python’da to‘g‘ri bo‘lishi mumkin?",
    options: ["print('Salom!')", "echo('Salom!')", "say('Salom!')", "show('Salom!')"],
    correct: 0
  },
  {
    q: "12. Dasturdagi 'loop' (sikl) nima qiladi?",
    options: [
      "Kodning takrorlanishini ta’minlaydi",
      "Matnni o‘chiradi",
      "Dasturni tugatadi",
      "Yangi fayl yaratadi"
    ],
    correct: 0
  },
  {
    q: "13. Quyidagilardan qaysi biri dasturlash tili hisoblanadi?",
    options: ["Python", "Google", "Windows", "YouTube"],
    correct: 0
  },
  {
    q: "14. Dasturda ma’lumot turi (data type) nima uchun kerak?",
    options: [
      "Ma’lumotni saqlash va unga ishlov berish turini aniqlash uchun",
      "Kodga rasm qo‘shish uchun",
      "Dasturni tahlil qilish uchun",
      "Internetga ulanish uchun"
    ],
    correct: 0
  },
  {
    q: "15. Dasturlashni o‘rganish uchun eng muhim narsa nima?",
    options: [
      "Kuchli kompyuter",
      "Mashq qilish va sabr",
      "Ko‘p dasturlar o‘rnatish",
      "Internet tezligi"
    ],
    correct: 1
  }
];
    // Savollarni chiqarish
    const quizDiv = document.getElementById('quiz');
    questions.forEach((item, index) => {
      let qDiv = document.createElement('div');
      qDiv.classList.add('question');
      qDiv.innerHTML = `<h3>${item.q}</h3>` +
        item.options.map((opt, i) => 
          `<label><input type="radio" name="q${index}" value="${i}"> ${opt}</label>`
        ).join('');
      quizDiv.appendChild(qDiv);
    });

    // Yakunlash tugmasi bosilganda natijani hisoblash
    function finishQuiz() {
      let score = 0;
      questions.forEach((q, i) => {
        let answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer && parseInt(answer.value) === q.correct) score++;
      });
      let percent = Math.round((score / questions.length) * 100);
      document.getElementById('result').innerHTML =
      `Sizning natijangiz: <span style="color:blue">${score}</span> ta to‘g‘ri javob (${percent}%)`;
    }