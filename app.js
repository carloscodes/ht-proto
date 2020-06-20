let arrOfResidents = [];

let resident = {
  name: 'Mark Otto',
  photo: '',
  floor: 1,
  isVacant: false,
  diet: 'Regular',
  emergencyContacts: [
    {
      name: 'Jill',
      phoneNum: '(555) 555-5555',
      relation: 'Old neighbor/friend',
    },
  ],
};

let resident2 = {
  name: 'Jacob Thornton',
  photo: '',
  floor: 1,
  isVacant: false,
  diet: 'Diabetic',
  emergencyContacts: [
    {
      name: 'Bill',
      phoneNum: '(555) 555-5555',
      relation: 'Brother',
    },
  ],
};

let resident3 = {
  name: 'Larry David',
  photo: '',
  floor: 1,
  isVacant: false,
  diet: 'Mechanical Chopped',
  emergencyContacts: [
    {
      name: 'Frank',
      phoneNum: '(555) 555-5555',
      relation: 'Son',
    },
  ],
};

arrOfResidents.push(resident);
arrOfResidents.push(resident2);
arrOfResidents.push(resident3);

function getInfo(name, num) {
  let details;
  if (num === 1) {
    details = document.getElementById('addInfoToDrop1');
  } else if (num === 2) {
    details = document.getElementById('addInfoToDrop2');
  } else {
    details = document.getElementById('addInfoToDrop3');
  }
  for (let i = 0; i < arrOfResidents.length; i++) {
    if (arrOfResidents[i].name === name) {
      console.log(arrOfResidents[i]);
      details.innerHTML = `
      <a class="dropdown-item">Floor: ${arrOfResidents[i].floor}</a>
      <a class="dropdown-item">Diet: ${arrOfResidents[i].diet}</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item">Emergency Contact(s): <br> ${arrOfResidents[i].emergencyContacts[0].name}<br> ${arrOfResidents[i].emergencyContacts[0].phoneNum}<br> ${arrOfResidents[i].emergencyContacts[0].relation}</a>`;
    }
  }
}
