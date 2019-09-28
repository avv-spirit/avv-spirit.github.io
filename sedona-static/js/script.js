var buttonFind = document.querySelector(".button-find-hotels");
var formAnimate = document.querySelector(".calendar-hotel");

var arrivals = document.querySelector("[name=arrivals]")
var departure = document.querySelector("[name=departure]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("arrivals");
} catch (err) {
  isStorageSupport = false;
}

buttonFind.addEventListener("click", function (evt) {
  evt.preventDefault();
  formAnimate.classList.toggle("fade-in");
  formAnimate.classList.remove("form-error");
  if (storage) {
    arrivals.value = storage;
    departure.focus();
  } else {
    arrivals.focus();
  }
});

formAnimate.addEventListener("submit", function (evt) {
  if (!arrivals.value || !departure.value) {
    evt.preventDefault();
    formAnimate.classList.add("form-error");
    document.offsetWidth = document.offsetWidth;
  } else {
    if (isStorageSupport)
      localStorage.setItem("arrivals", arrivals.value);
  }
});
