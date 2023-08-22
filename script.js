const dials = document.querySelectorAll('.dial');

dials.forEach((dial) => {
  let dragging = false;

  dial.addEventListener('mousedown', (e) => {
    dragging = true;
    rotateDial(e, dial);
  });

  window.addEventListener('mouseup', () => {
    dragging = false;
  });

  window.addEventListener('mousemove', (e) => {
    if (dragging) {
      rotateDial(e, dial);
    }
  });
});

function rotateDial(e, dial) {
  const rect = dial.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const deltaX = e.clientX - centerX;
  const deltaY = e.clientY - centerY;
  const angleInDegrees = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90;

  dial.style.setProperty('--rotation', angleInDegrees + 'deg');
  // Add your MIDI control mapping here
}
