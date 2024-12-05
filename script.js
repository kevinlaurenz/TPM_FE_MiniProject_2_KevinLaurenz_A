const skillInput = document.getElementById('skillInput');
const addSkillButton = document.getElementById('addSkillButton');
const skillsList = document.getElementById('skillsList');

function addSkill() {
  const skillValue = skillInput.value.trim();

  if (skillValue === '') {
    alert('Please enter a skill!');
    return;
  }

  const skillItem = document.createElement('li');
  skillItem.classList.add('skill-item');
  skillItem.innerHTML = `
    ${skillValue}
    <button class="remove-skill">x</button>`;

  skillsList.appendChild(skillItem);

  skillInput.value = '';

  const removeButton = skillItem.querySelector('.remove-skill');
  removeButton.addEventListener('click', () => {
    skillItem.remove();
  });
}

addSkillButton.addEventListener('click', addSkill);

skillInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addSkill();
  }
});
