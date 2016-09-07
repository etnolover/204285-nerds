// Карта Google
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    // center отличается от position, так как в макете маркер
    // находится не в центре карты, а справа чуть ниже центра
    center: {lat: 59.939230, lng: 30.32}
  });

  var image = 'img/marker.png';
  var companyMarker = new google.maps.Marker({
    position: {lat: 59.938717, lng: 30.323831},
    map: map,
    icon: image
  });
}

// Форма 'Напишите нам'
var link = document.querySelector(".contacts__feedback");

var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");

var form = popup.querySelector("form");
var userName = popup.querySelector("[name='user-name']");
var userEmail = popup.querySelector("[name='user-email']");
var userFeedback = popup.getElementsByClassName("feedback-text");

var nameInStorage = localStorage.getItem("userName");
var emailInStorage = localStorage.getItem("userEmail");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");

  if (nameInStorage && emailInStorage) {
    userName.value = nameInStorage;
    userEmail.value = emailInStorage;
    userFeedback.focus();

  } else if (nameInStorage && !emailInStorage) {
    userName.value = nameInStorage;
    userEmail.focus();

  } else if (!nameInStorage && emailInStorage) {
    userEmail.value = emailInStorage;
    userName.focus();

  } else {
    userName.focus();
  }

});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
  if (!userName.value || !userEmail.value || !userFeedback.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");

  } else {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("userEmail", userEmail.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
    }
  }
});
