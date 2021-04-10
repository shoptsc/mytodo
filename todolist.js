const input = document.getElementById('input');
const button = document.getElementById('button');
const ul = document.querySelector('.list ul');
const div_input = document.getElementsByClassName(input);


button.addEventListener('click', addTask);

function addTask(){
  const li = document.createElement('li');
  const closeButton = document.createElement('button')
  closeButton.appendChild(document.createTextNode('x'))
  closeButton.className = 'close'
  const new_input = document.createElement('input')
  new_input.type = 'checkbox';
  new_input.className = 'checkbox';
  line = document.createElement("hr");
  li.appendChild(closeButton);
  li.appendChild(new_input);
  li.appendChild(document.createTextNode(input.value));
  li.append(line);
  ul.appendChild(li);

  new_input.addEventListener('input', (e)=>{

    // if(e.target.tagName === 'INPUT'){
    //   e.target.parentElement.classList.toggle('checkbox');
    if(e.target.classList.contains('checkbox')){
      e.target.parentElement.classList.toggle('checkbox');
    }
      // e.target.classList.toggle('checkbox');
      // list.setAttribute('style', 'text-decoration: line-through; color:red;')

    // }

  }, false);


  closeButton.addEventListener('click', (e)=>{;
    if (e.target.classList.contains('close')){
      if(confirm('are you sure')){
        var remove = e.target.parentElement;
        ul.removeChild(remove);
      }
    }
  });
}
