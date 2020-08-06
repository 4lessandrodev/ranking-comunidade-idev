//MEMBERS
const FIRST_PLACE = document.getElementById('first_place');
const SECOUND_PLACE = document.getElementById('secound_place');
const THIRD_PLACE = document.getElementById('third_place');
const TABLE_BODY = document.getElementById('tableBody');

const ordernedList = MEMBERS.sort((a, b) => (b.points - a.points));

FIRST_PLACE.getElementsByTagName("img")[0].src = ordernedList[0].avatar;
FIRST_PLACE.getElementsByTagName("h2")[0].textContent = ordernedList[0].name;
FIRST_PLACE.getElementsByTagName("p")[0].textContent = ordernedList[0].points;

SECOUND_PLACE.getElementsByTagName("img")[0].src = ordernedList[1].avatar;
SECOUND_PLACE.getElementsByTagName("h2")[0].textContent = ordernedList[1].name;
SECOUND_PLACE.getElementsByTagName("p")[0].textContent = ordernedList[1].points;

THIRD_PLACE.getElementsByTagName("img")[0].src = ordernedList[2].avatar;
THIRD_PLACE.getElementsByTagName("h2")[0].textContent = ordernedList[2].name;
THIRD_PLACE.getElementsByTagName("p")[0].textContent = ordernedList[2].points;

let trs = ``;
for (let index = 3; index < ordernedList.length; index++) {
    trs +=`<tr>
    <th scope="row">#${index + 1}</th>
    <td><img class="avatar" src="${ordernedList[index].avatar}" alt="avatar"></td>
    <td><strong>${ordernedList[index].name}</strong></td>
    <td><strong>${ordernedList[index].points}</strong></td>
  </tr>`;
}

TABLE_BODY.innerHTML = trs;