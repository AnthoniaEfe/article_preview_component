const shareButton = document.getElementById("share-button");
const socialLinks = document.getElementById("socials");

shareButton.addEventListener("click", () => {
  shareButton.classList.toggle("active");
  socialLinks.classList.toggle("active");
});
