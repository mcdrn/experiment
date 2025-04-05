document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
  
      const formId = button.getAttribute('data-form');
      document.querySelectorAll('.form-box').forEach(form => {
        form.classList.remove('active');
      });
      document.getElementById(formId).classList.add('active');
    });
  });
  