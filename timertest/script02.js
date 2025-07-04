document.addEventListener('DOMContentLoaded', () => {
  const menuPanelContent = document.querySelector('#menu .panel-content');
  const panelContents = document.querySelectorAll('.panel.content .panel-content');
  const navButtons = document.querySelectorAll('.nav-button');
  const backButtons = document.querySelectorAll('.back-button');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetPanelContent = document.querySelector(`#${targetId} .panel-content`);

      // Hide all panel contents except menu
      panelContents.forEach(pc => {
        pc.classList.remove('active', 'slide-out-left', 'slide-in-right');
      });

      // Slide menu content out to left
      menuPanelContent.classList.remove('active');
      menuPanelContent.classList.add('slide-out-left');

      // Prepare target content to slide in from right
      targetPanelContent.classList.remove('slide-out-left', 'slide-in-right', 'active');
      targetPanelContent.classList.add('slide-in-right');

      // Force reflow for transition
      void targetPanelContent.offsetWidth;

      // Slide target content in
      targetPanelContent.classList.remove('slide-in-right');
      targetPanelContent.classList.add('active');
    });
  });

  backButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const panelContent = btn.closest('.panel-content');
      panelContent.classList.remove('active');
      panelContent.classList.add('slide-out-left');

      // Slide menu content back in from left
      menuPanelContent.classList.remove('slide-out-left');
      menuPanelContent.classList.add('active');
    });
  });

  // On load, reset all panel contents except menu
  panelContents.forEach(pc => {
    pc.classList.remove('active', 'slide-out-left', 'slide-in-right');
  });
  menuPanelContent.classList.add('active');
});