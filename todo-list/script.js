document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-btn");
  const list = document.getElementById("todo-list");

  addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;
    const li = document.createElement("li");
    li.textContent = text;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "×";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => list.removeChild(li));
    li.addEventListener("click", () => li.classList.toggle("completed"));
    li.appendChild(deleteBtn);
    list.appendChild(li);
    input.value = "";
    input.focus();
  });

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addBtn.click();
  });
});
