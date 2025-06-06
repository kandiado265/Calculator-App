document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById('display');
  const themeToggle = document.getElementById('theme-toggle');
  let expression = '';

  window.appendNumber = function(num) {
    if (display.textContent === '0') {
      display.textContent = num;
      expression = num;
    } else {
      display.textContent += num;
      expression += num;
    }
  };

  window.appendOperator = function(op) {
    display.textContent += op;
    expression += op;
  };

  window.reset = function() {
    display.textContent = '0';
    expression = '';
  };

  window.del = function() {
    display.textContent = display.textContent.slice(0, -1);
    expression = expression.slice(0, -1);
    if (display.textContent === '') {
      display.textContent = '0';
    }
  };

  window.calculate = function() {
    try {
      display.textContent = eval(expression.replace(/x/g, '*'));
      expression = display.textContent;
    } catch {
      display.textContent = 'Error';
      expression = '';
    }
  };

  
  themeToggle.addEventListener('input', () => {
    
    console.log("Theme switch: ", themeToggle.value);
  });
});
