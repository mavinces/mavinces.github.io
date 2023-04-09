window.onload = function() {
  const downloadButton = document.querySelector('.download');
  downloadButton.addEventListener('click', function() {
    window.location.href = downloadButton.href;
  });
}
