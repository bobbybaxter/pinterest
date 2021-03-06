import $ from 'jquery';
import boardData from '../../helpers/data/boardsData';
import util from '../../helpers/util';
import pins from '../pins/pins';
import pinsData from '../../helpers/data/pinsData';

const seePinDiv = (e) => {
  const boardId = e.target.closest('.card').id;
  // console.error('you clicked a button', boardId);
  document.getElementById('boards-page').classList.add('hide');
  document.getElementById('pins-page').classList.remove('hide');
  pins.initPins(boardId);
};

const bindEvents = () => {
  const allButtons = document.getElementsByClassName('see-pins');
  for (let i = 0; i < allButtons.length; i += 1) {
    allButtons[i].addEventListener('click', seePinDiv);
  }
};

const writeBoards = (boards) => {
  let domString = '';
  $.each(boards, (i) => {
    // card background
    domString += `<div id="${boards[i].id}" class="card card-image bg-secondary col-3 board-card">`;
    // card
    domString += '<div class="text-white text-center d-flex align-items-center rgba-stylish-strong">';
    // card content
    domString += '<div class="card-body">';
    domString += `<h5>${boards[i].name}</h5>`;
    domString += `<a class="btn btn-outline-light see-pins">${boards[i].pins.length} of pins</a>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('user-boards', domString);
  bindEvents();
};

const initBoards = () => {
  boardData.loadBoards()
    .then(resp => pinsData.getPinsForEachBoard(resp.data.boards))
    .then((boardsWithPins) => {
      writeBoards(boardsWithPins);
    })
    .catch(err => console.error('error from initBoards requests', err));
};

export default { initBoards };
