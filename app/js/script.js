window.addEventListener("load", function () {
  /// preloader

  // let preloader = this.document.querySelector('.preLoader')
  // this.setTimeout(function () {
  //     preloader.classList.add('preLoader-active')
  //     preloader.style.display = 'none'
  //     document.querySelector('body').style.overflowY = 'scroll'
  // }, 1000)

  /// modal-register

  let modalClose = this.document.querySelector(".modalRegister .close");
  let modalRegister = this.document.querySelector(".modalRegister");
  let btnModalRegister = this.document.querySelector("#btnModalRegister");

  function hideModal() {
    modalRegister.classList.remove("activeModal");
    document.querySelector("body").style.overflowY = "scroll";
  }

  function showModal() {
    modalRegister.classList.add("activeModal");
    document.querySelector("body").style.overflowY = "hidden";
  }

  modalClose.addEventListener("click", hideModal);
  btnModalRegister.addEventListener("click", showModal);

  modalRegister.addEventListener("click", function (e) {
    if (e.target === modalRegister) {
      hideModal();
    }
  });

  this.document.addEventListener("keydown", function (e) {
    if (e.code == "Escape" && modalRegister.classList.contains("activeModal")) {
      hideModal();
      console.log("salom");
    }
  });

  // modal-registratsiya input
  let modalInp = this.document.querySelectorAll(".modalRegister input");
  let modalButton = this.document.querySelector(".modalRegister form");
  let modalError = this.document.querySelectorAll(".modalRegister .error");

  function checkPhoneNumber(event) {
    let phone = event.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);

    event.target.value = `+(${phone[1]}) - ${phone[2]} - ${phone[3]} - ${phone[4]} - ${phone[5]}`;

    console.log(phone);
  }

  modalInp[1].addEventListener("input", function (e) {
    checkPhoneNumber(e);
  });

  console.log("salom", modalInp.length);
  modalButton.addEventListener("submit", function (e) {
    e.preventDefault();

    for (let i = 0; i < modalInp.length; i++) {
      modalError[i].style.display = "none";

      let patterSpace = /^\s*$/;

      if (patterSpace.test(modalInp[i].value)) {
        modalError[i].style.display = "flex";
      }
    }
  });

  /// navbar menu bars

  $(".icons-bars").click(function () {
    $("nav .navbar-menu").slideToggle();
  });

  /// change bg-color navbar

  function changeBgNav() {
    let navbar = document.querySelector("nav");
    if (window.scrollY >= 300) {
      navbar.classList.add("activeNav");
    } else {
      navbar.classList.remove("activeNav");
    }
  }

  this.window.addEventListener("scroll", function () {
    changeBgNav();
  });

  changeBgNav();

  /// header slider

  let img = this.document.querySelectorAll(".carousel img");
  let carouselImg = this.document.querySelector(".carousel .carousel-img");
  let indicators = this.document.querySelectorAll(".indicators ul li");
  let imgIndex = 0;
  let increment;
  function headerBgCarousel() {
    carouselImg.classList.add("carousel-transition"); // surish uchun transition ishalshi
    increment = imgIndex;
    imgIndex++;
    if (imgIndex >= img.length) {
      imgIndex = 0;
    }
    carouselImg.style.transform = `translateX(${-100}%)`;

    setTimeout(function () {
      carouselImg.appendChild(img[increment]);
      carouselImg.classList.remove("carousel-transition");
      carouselImg.style.transform = ``;
    }, 1000);
  }

  function intervalCarousel() {
    this.setInterval(headerBgCarousel, 3000);
  }
  intervalCarousel();

  /// typer header title

  function typerText() {
    let typerText = document.querySelector(".typerText");
    let newtTyperText = typerText.innerHTML;
    typerText.innerHTML = "";

    let index = 0;

    function writeText() {
      const interval = setInterval(function () {
        typerText.innerHTML = typerText.innerHTML + newtTyperText[index];
        index++;
        if (index == newtTyperText.length) {
          clearInterval(interval);
          deleteText(index);
          index = 0;
        }
      }, 100);
    }

    function deleteText(argument) {
      const deleteInterval = setInterval(function () {
        typerText.innerHTML = typerText.innerHTML.slice(0, argument);
        argument--;
        if (argument < 0) {
          clearInterval(deleteInterval);
          writeText();
        }
      }, 200);
    }

    writeText();
  }
  typerText();
});
