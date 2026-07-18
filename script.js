function setupPicker(pickerId, displayId) {
  const picker = document.getElementById(pickerId);
  const display = document.getElementById(displayId);
  if (!picker || !display) return;

  picker.addEventListener('click', (event) => {
    const btn = event.target.closest('.emoji-btn');
    if (!btn) return;

    picker.querySelectorAll('.emoji-btn').forEach((b) => b.classList.remove('selected'));
    btn.classList.add('selected');
    display.textContent = btn.dataset.emoji;
  });
}

setupPicker('animal-picker', 'combo-animal');
setupPicker('food-picker', 'combo-food');
