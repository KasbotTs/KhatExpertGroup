document.addEventListener("DOMContentLoaded", function () {
  function toggleCard(cardInner) {
    cardInner.classList.toggle("flipped");
    if (cardInner.classList.contains("flipped")) {
      cardInner.style.transform = "rotateY(180deg)";
    } else {
      cardInner.style.transform = "";
    }
  }

  function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".service-card-inner").forEach((cardInner) => {
    cardInner.onclick = function () {
      toggleCard(this);
    };
  });

  document
    .querySelectorAll("[data-modal='contactModal']")
    .forEach((element) => {
      element.onclick = function () {
        openModal("contactModal");
      };
    });

  document.querySelectorAll(".order-call-button").forEach((button) => {
    button.onclick = function (event) {
      event.stopPropagation();
      openModal("callModal");
    };
  });

  document.querySelectorAll(".close").forEach((span) => {
    span.onclick = function () {
      closeModal(span.closest(".modal").id);
    };
  });

  window.onclick = function (event) {
    if (event.target.classList.contains("modal")) {
      closeModal(event.target.id);
    }
  };

  document.getElementById("callOrderForm").onsubmit = function (e) {
    e.preventDefault();
    // Добавьте логику для отправки формы через Fetch API, XMLHttpRequest и т.д.
    closeModal("callModal");
    // Добавьте уведомление на страницу вместо alert
  };
});
