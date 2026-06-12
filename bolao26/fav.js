document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll(".favcb");
  checkboxes.forEach((checkbox) => {
    const savedState = localStorage.getItem(`fav-${checkbox.id}`);
    if (savedState === "true") {
      checkbox.checked = true;
    }
    checkbox.addEventListener("change", (event) => {
      const target = event.target;
      if (target.checked) {
        localStorage.setItem(`fav-${target.id}`, "true");
      } else {
        localStorage.removeItem(`fav-${target.id}`);
      }
    });
  });
});