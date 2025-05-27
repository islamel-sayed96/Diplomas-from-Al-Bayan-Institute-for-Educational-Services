let diplomas = [];

    fetch('diplomas.json')
      .then(res => res.json())
      .then(data => {
        diplomas = data;
        displayDiplomas(diplomas);
      });

    function displayDiplomas(list) {
      const container = document.getElementById('diploma-container');
      container.innerHTML = '';

      list.forEach(diploma => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
          <img src="${diploma.posterImage}" alt="${diploma.diplomaName}">
          <h3>${diploma.diplomaName}</h3>
          <p>${diploma.category}</p>
          <a href="${diploma.pdfFile}" target="_blank">
            <button> تنزيل 📥 </button>
          </a>
        `;

        container.appendChild(card);
      });
    }

    document.getElementById('searchInput').addEventListener('input', function () {
      const val = this.value.trim().toLowerCase();
      const filtered = diplomas.filter(d =>
        d.diplomaName.toLowerCase().includes(val)
      );
      displayDiplomas(filtered);
    });