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

//функция для проверки валидности полей
function validateField(field){
  if(field.value.trim() === ""){
    field.style.borderColor = "red";
    return false;
  } else {
    field.style.borderColor = "white";
    return true;
  }
}

//функция дополнительной проверки телефона
function validatePhone(field){
  if(field.value.trim().length < 10){
    field.style.borderColor = "red";
    return false;
  } else {
    field.style.borderColor = "white";
    return true;
  }
}

document.getElementById("order-action").addEventListener("click", function(){
  //собираем поля в массив
  const fields = [carField, nameField, phoneField];

  //проверяем общую валидность полей кроме телефона
  const allValid = fields.slice(0, 2).every(validateField);

  //дополнительная проверка телефона
  const phoneValid = validatePhone(phoneField);

  if(allValid && phoneValid){
    alert("Спасибо за заявку! Мы скоро свяжемся с Вами");
    //очищаем поля
    fields.forEach(field => field.value = "");
    //возвращаем поля к изначальному стилю
    fields.forEach(field => field.style.borderColor = "white");
  }
});