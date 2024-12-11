// Examen JavaScript Amaliy savollar


// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)

// javob:Pasdan yozib keting kodini



// 1-Javob: 

// let savol1 = 5 / 2 ;
// alert("1-savol =")
// alert(savol1)







// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// сделать рандомное число от 1 до 10 и вывести в алерт

// Javob:Pasdan yozib keting kodini


// 2-Javob:

// let savol2 = Math.random()*10.5;
// alert(savol2)









// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring!

// сделать число 12.510 целым

// ответ должен выйти 12

// javob: 12 chiqishi kerak!


// 3-Javob

// let savol3 = Math.floor(12.510);
// alert(savol3)









/*
4-savol function

"MARS IT SCHOOL" sozini nechta harfdan iboratligini  topib va alertga chiqaring!.

с помощью  найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

Javob:Kodini yozib bering
 

// 4-Javob

// let savol4 = ("MARS IT SCHOOL")
// alert(`${savol4.length}`)




*/





// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// Javob:Kodini yozib bering


// 5-Javob


// const javob5 = (`MARS IT SCHOOL`)

// for (let i = 1; i < 10; i++) {
//     const e = javob5_1;
//     console.log(e);   
// }

// console.log(javob5);











// let harflar = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// С помощью этого массива вывести в консоль свое имя

// Javob:Kodini yozib bering


// 6-Javob

// let harflar = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

// let ism = ["a", "b", "d", "u", "l", "a", "t", "i", "f"]; 

// // Ismni yaratish
// let ismString = ism.map(letter => {
//     let index = harflar.indexOf(letter);
//     return index !== -1 ? letter : "";
// }).join('');

// console.log(ismString);









// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// Javob:Kodini yozib bering


// 7-javob

// let savol7Yosh = prompt(`Yoshingizni kiriting`)

// if (savol7Yosh >= 18) {
//     console.log("Siz balog'ot yoshiga yetkansiz");
// } else {
//     console.log(`Siz balog'at yoshiga yetmagansiz`);
    
// }










// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Ввести в промпт свое имя и вывести в консоль его наоборот

// Javob:Kodini yozib bering


// 8-Javob 

// let savol8 = prompt(`Ismingizni kiriting`)

// savol8 = savol8.split(``).reverse().join(``)
// console.log(savol8);












// 9-savol DOM

// Promtdan ismigizni kiriting va yoshingizni kiriting va uni style berilgan holda DOM ga chiqaring


// Javob:Kodini yozib bering


// 9-Javob


// function displayInfo() {
//     const name = prompt("Ismingizni kiriting:");
//     const age = prompt("Yoshingizni kiriting:");


//     const resultDiv = document.createElement("div");
//     resultDiv.style.textAlign = "center";
//     resultDiv.style.marginTop = "20px";
//     resultDiv.style.fontSize = "1.5em";
//     resultDiv.style.fontWeight = "bold";
//     resultDiv.style.color = "#333";


//     if (name && age) {
//         resultDiv.innerHTML = `Ismingiz: <span style="color: #4CAF50;">${name}</span><br>Yoshingiz: <span style="color: #4CAF50;">${age}</span>`;
//     } else {
//         resultDiv.innerHTML = "Iltimos, ism va yoshni to‘liq kiriting.";
//     }

//     document.body.appendChild(resultDiv);
// }

// window.onload = function() {
//     displayInfo();
// };











// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring

// найти и вывести четные массивы в консоль, с помощью методов


// Javob :Kodini yozib bering


// 10-Javob

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Juft sonlarni aniqlash va console ga chiqarish
// for (let i = 0; i < sonlar.length; i++) {
//     if (sonlar[i] % 2 === 0) {
//         console.log(sonlar[i]);
//     }
// }
