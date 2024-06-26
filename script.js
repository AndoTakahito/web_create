// JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const drawerInput = document.getElementById('drawer_input');
  const navItems = document.querySelectorAll('.nav_item a');

  navItems.forEach(item => {
      item.addEventListener('click', () => {
          drawerInput.checked = false;
      });
  });
});