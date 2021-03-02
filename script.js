// Cara mengedit text html di javascript //

// document.querySelector('p').innerText = 'hari ini kita belajar javascript DOM';


// Menambah class di querySelector

// document.querySelector('.belajar').innerHTML = 'Hari ini kita belajar Javascript DOM';


// console.log(document.querySelector('.belajar'));



// 2. Mengubah nilai atribut dengan javascript

// document.querySelector('.google').setAttribute('href', 'https://google.com');/

// 3. Menambah element dengan javascript

// var h1 = document.createElement('h1');
// var h2 = document.createElement('h2'); //untuk mengganti di bawah 
// var judul = document.body.appendChild(h2);

// judul.innerHTML = 'Ini adalah dasar javascript DOM';


// // 4. Mengapus element dengan javascript
// var title = document.querySelector('h1');

// // document.body.removeChild(title);


// //5. Mengganti element dengan javascript
// document.body.replaceChild(h2, h1);


// Next step kita akan mempelajari Document.write
// Document.write berfungsi untuk menampilkan data langsung ke web halaman

// document.write('Halo, saya baru memulai belajar javascript DOM');


// Next step mengubah css di javascript

var h6 = document.querySelector('h6');

function green(){
    h6.style.color = 'green';
}


// h6.style.fontSize = '20px';
h6.style.fontSize = (100/5) + "px";

// Cara bermain dengan on click berubah warna 
h6.addEventListener('click', function(){
    h6.style.color = green;
});

