const btnCulculate = document.getElementById("calculate");
const btnOperations = document.querySelectorAll(".operation");

const resultInput = document.getElementById("result");

let selectedOperation = "";

//*!перебираем кнопки и присваем класс is-active по клику

btnOperations.forEach((button) => {
  button.addEventListener("click", () => {
    btnOperations.forEach((btn) => btn.classList.remove("is-active"));
    button.classList.add("is-active");
    selectedOperation = button.textContent.trim();
  });
});

// Добавляем событие на кнопку "Посчитать"

btnCulculate.addEventListener("click", () => {
  // Получаем значения инпутов при нажатии на кнопку "Посчитать"
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  // Проверяем, что числа введены корректно
  if (isNaN(num1) || isNaN(num2)) {
    resultInput.value = "Введите оба числа!";
    return;
  }

  // Выполняем операцию в зависимости от выбранного операнда
  let result;
  switch (selectedOperation) {
    case "−": // Минус
      result = num1 - num2;
      break;
    case "+": // Плюс
      result = num1 + num2;
      break;
    case "÷": // Деление
      result = num1 / num2;
      break;
    case "×": // Умножение
      result = num1 * num2;
      break;
    default:
      result = "Выберите операцию!";
  }

  // Выводим результат в инпут
  resultInput.value = result;
});
