renderingPetCards();

function renderingPetCards() {
  let petCardContainerHTML = '';

  pets.forEach((pet) => {
    const modalId = `modal-${pet.id}`;
    const btnId = `knowMoreBtn-${pet.id}`;
    const closeBtnId = `closeModalBtn-${pet.id}`;

    petCardContainerHTML += `
      <div class="pet-card-container">
        <div class="pet-card">
          <img src="${pet.images[0]}" alt="${pet.Name}" />
          <div class="knowMore">
            <a href="javascript:void(0)" id="${btnId}">KnowMore</a>
          </div>
        </div>
        <div class="pet-name">${pet.Name}</div>
        </div>

        <div id="${modalId}" class="modal">
          <div class="modal-content">
            <span id="${closeBtnId}" class="close-btn">&times;</span>
            <h2>${pet.Name}</h2>
            <p>Gender: ${pet.Gender}</p>
            <p>Age: ${pet.age} years old</p>
            <p>Specie: ${pet.species} </p>
            <div class="modal-quality"> <p>${pet.Name} is a ${pet.quality} </p> </div>
            <div class="modal-button">
            <button><a id="adoptBtn-${pet.id}" href='/html/adoption-form.html'>Adopt</a></button>
            </div>
          </div>
        </div>
    `;


  });



  document.querySelector('.pets-section-container').innerHTML = petCardContainerHTML;

  pets.forEach((pet) => {
    const modal = document.getElementById(`modal-${pet.id}`);
    const openBtn = document.getElementById(`knowMoreBtn-${pet.id}`);
    const closeBtn = document.getElementById(`closeModalBtn-${pet.id}`);

    openBtn.addEventListener('click', () => {
      modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });


    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
    const adoptBtn = document.getElementById(`adoptBtn-${pet.id}`);
    adoptBtn.addEventListener('click', () => {
      localStorage.setItem('selectedPetImages', JSON.stringify(pet.images));
    });
  });
}

