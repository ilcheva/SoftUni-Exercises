function create(words) {
   let contentDiv = document.getElementById('content');
   words.forEach(x => {
      let div = document.createElement('div');
      let p = document.createElement('p');
      contentDiv.appendChild(div);
      div.appendChild(p);
      p.innerHTML = x;
      p.style.display = 'none';
      div.addEventListener('click', e => {
         p.style.display = 'block';
      });
   });

}