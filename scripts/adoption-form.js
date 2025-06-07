let images = [];
let currentIndex = 0;

window.addEventListener('DOMContentLoaded', () => {
    images = JSON.parse(localStorage.getItem('selectedPetImages')) || [];

    if (images.length > 0) {
        document.getElementById('sliderImage').src = images[0];
    }
});



function changeSlide(direction) {
    if (images.length === 0) return;

    currentIndex = (currentIndex + direction + images.length) % images.length;
    document.getElementById('sliderImage').src = images[currentIndex];
}

function formValidation() {
    document.getElementById('myForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const firstName = document.querySelector('.firstNameInput').value.trim();
        const email = document.querySelector('.emailInput').value.trim();
        const phone = document.querySelector('.phoneNumberInput').value.trim();
        const birthday = new Date(document.querySelector('.birthdayInput').value);
        const relPhone = document.querySelector('.relationshipPhone').value.trim();
        const today = new Date();

        if (firstName.length < 2 || !/^[a-zA-Z]+$/.test(firstName)) {
            alert('First name must be at least 2 letters and contain only letters.');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone)) {
            alert('Please enter a 10-digit phone number.');
            return;
        }

        if (birthday > today) {
            alert('Birthday cannot be in the future.');
            return;
        }
        const relPhonePattern = /^\d{10}$/;
        if (!relPhonePattern.test(relPhone)) {
            alert('Please enter a 10 digit number');
            return;
        }

        submittedModal();
    });

}


function init() {
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("alertBtn");
    if (btn) {
      btn.addEventListener("click", () => {
        Swal.fire({
          title: 'Image Alert!',
          text: 'All inside one function!',
          imageUrl: '',
          imageWidth: 150,
          imageHeight: 150,
          imageAlt: 'Nice image'
        });
      });
    }
  });
}

init();



function submittedModal() {
    const Smodal = document.querySelector('.submitted-modal');
    Smodal.style.display = 'flex';

    setTimeout(function () {
        window.location.href = '/html/adopt.html';
    }, 3000)

    console.log('error in modal');

}