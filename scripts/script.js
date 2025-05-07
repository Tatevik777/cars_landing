const filterItems = document.querySelectorAll(".cars-filter li");
const carItems = document.querySelectorAll(".car");
const carsContent = document.getElementById("cars-content");

filterItems.forEach(item => {
  item.onclick = () =>{
    filterItems.forEach(el => el.classList.remove("active"));
    item.classList.add("active");

    const filterText = item.textContent.toLocaleLowerCase();
    carItems.forEach(car =>{
      if(filterText === "все марки" || car.querySelector("h4").textContent.toLocaleLowerCase().includes(filterText)){
        car.style.display = "flex";
      }else{
        car.style.display = "none"; 
      }
  });
  carsContent.scrollIntoView({behavior: "instant"});
};
});

const carField = document.getElementById("car");
const nameField = document.getElementById("name");
const phoneField = document.getElementById("phone");

// функция для проверки валидности поля (не пустое)
function validateField(field){
  if(field.value.trim() === ""){
    field.style.borderColor = "red";
    return false;
  }else{
    field.style.borderColor = "white";
    return true;
  }
}

// функция для проверки номера телефона (мин. 10 символов)
function validatePhone(field){
  if(field.value.trim().length < 10){
    field.style.borderColor = "red";
    return false;
  }else{
    field.style.borderColor = "white";
    return true;
  }
}

document.getElementById("order-action").addEventListener("click", function(){
  // проверяем что поле имени не пустое
  const isNameValid = validateField(nameField);

  // проверяем что телефон содержит минимум 10 символов
  const isPhoneValid = validatePhone(phoneField);

  // проверяем авто (не пустое)
  const isCarValid = validateField(carField);

  if(isNameValid && isPhoneValid && isCarValid){
    alert("Спасибо за заявку! Мы скоро свяжемся с Вами");
    // очищаем поля
    [carField, nameField, phoneField].forEach(field => {
      field.value = "";
      field.style.borderColor = "white";
    });
  }
});