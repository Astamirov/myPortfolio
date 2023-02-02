const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragenter', dragenter);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', dragdrop);
}

function dragstart(event) {
  event.target.classList.add('hold');
  setTimeout(() => event.target.classList.add('hide')); //чтобы держалось под стрелкой
}

function dragend(event) {
  event.target.classList.remove('hold', 'hide');
}

function dragover(event) {
  event.preventDefault();
}

function dragenter(event) {
  event.target.classList.add('hovered');
  console.log('dragenter');
}

function dragleave(event) {
  event.target.classList.remove('hovered');
  console.log('dragleave');
}

function dragdrop(event) {
  event.target.classList.remove('hovered');
  event.target.append(item);
  console.log('dragdrop');
}

//back
const backToPortfolio = document.getElementById('back');

backToPortfolio.onclick = function () {
  history.back(); // Возвращаемся на предыдущую страницу, ее также можно записать как history.go (-1)
};
