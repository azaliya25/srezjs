"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.nav-item');
  
    menuItems.forEach((item) => {
      item.addEventListener('mouseenter', function () {
        let dropdown = document.createElement('div');
        dropdown.className = 'dropdown-menus';
        dropdown.innerHTML = `
          <a href="#">${this.textContent} 1</a>

        `;
        this.appendChild(dropdown);
      });
  
      item.addEventListener('mouseleave', function () {
        let dropdown = this.querySelector('.dropdown-menus');
        if (dropdown) {
          dropdown.remove();
        }
      });
    });
  });
  