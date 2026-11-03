//Mengambil elemen input Search, pop up merah, dan teks hasil ketikan
const inputSearch = document.querySelector('#quiz-search');
const tooltip = document.querySelector('#input-tooltip');
const preview = document.querySelector('#input-preview');

//Event input berjalan setiap user mengetik satu karakter real time
inputSearch.addEventListener('input', (event) => {
  const teks = event.target.value;

  //Isi teks pop up
  preview.textContent = teks;
  
  //Pop up akan tampil bila kolom search tidak kosong
  if (teks.trim() !== '') {
    tooltip.style.display = 'block';
  } else {
    tooltip.style.display = 'none';
  }
});
