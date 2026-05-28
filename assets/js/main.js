
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('open'));

  document.querySelectorAll('.request-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const notice = form.querySelector('.notice');
      if (notice) notice.style.display = 'block';
      form.reset();
    });
  });

  const calc = document.querySelector('#priceCalc');
  if (calc) {
    const result = document.querySelector('#calcResult');
    const update = () => {
      const area = Number(calc.querySelector('[name="area"]').value || 0);
      const type = calc.querySelector('[name="type"]').value;
      const rates = { house: 52000, cottage: 68000, repair: 18000, engineering: 9000 };
      const total = area * rates[type];
      result.textContent = total ? total.toLocaleString('ru-RU') + ' руб.' : '0 руб.';
    };
    calc.addEventListener('input', update);
    update();
  }

  document.querySelectorAll('.accordion button').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
  });
});
