function createSelectMenuContainer(){
  const selectMenuContainer = document.createElement("div");
  selectMenuContainer.id = "selectMenuContainer";
  document.getElementById("main").appendChild(selectMenuContainer);
}

function createSelectMenu() {
  const div = document.createElement("div");
  const select = document.createElement("select");
  const defaultCategory = document.createElement("option");
  defaultCategory.innerHTML = "Select category";
  defaultCategory.value = "";
  select.appendChild(defaultCategory);

  categories.map((element) => {
    const option = document.createElement("option");
    option.innerHTML = element;
    option.value = element;
    select.appendChild(option);
  });

  div.appendChild(select);
  document.getElementById("main").appendChild(div);
}
