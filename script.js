// Mobile nav
const toggle = document.querySelector(".nav-toggle");
const links = document.getElementById("navLinks");

toggle?.addEventListener("click", () => {
  const isOpen = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Copy message helper
const copyBtn = document.getElementById("copyBtn");
copyBtn?.addEventListener("click", async () => {
  const msg = document.getElementById("message").value.trim();
  if (!msg) {
    alert("Please type a message first 🙂");
    return;
  }
  try {
    await navigator.clipboard.writeText(msg);
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy Message"), 1200);
  } catch {
    alert("Copy failed — please copy manually.");
  }
});
