import $ from 'jquery';
import pinsData from '../../helpers/data/pinsData';
import util from '../../helpers/util';

const bindEvents = () => {
  document.getElementById('toBoardsBtn').addEventListener('click', () => {
    document.getElementById('boards-page').classList.remove('hide');
    document.getElementById('pins-page').classList.add('hide');
  });
};

const writePins = (pins) => {
  bindEvents();
  let domString = '';
  $.each(pins, (i) => {
    domString += `<img class="m-1" src="${pins[i].imageUrl}" height="150px;" width="auto" alt="image of pin">`;
  });
  util.printToDom('pins-on-board', domString);
};

const initPins = (boardId) => {
  pinsData.loadPinsFromBoard(boardId)
    .then((pins) => {
      writePins(pins);
    })
    .catch(err => console.error(err));
};

export default { initPins };
