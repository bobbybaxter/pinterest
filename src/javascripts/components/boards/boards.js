import $ from 'jquery';
import boardData from '../../helpers/data/boardsData';
import util from '../../helpers/util';

const boardBuilder = (boards) => {
  let domString = '';
  $.each(boards, (i) => {
    // card background
    domString += '<div class="card card-image bg-secondary col-3 board-card">';
    // card
    domString += '<div class="text-white text-center d-flex align-items-center rgba-stylish-strong">';
    // card content
    domString += '<div class="card-body">';
    domString += `<h5>${boards[i].name}</h5>`;
    domString += '<a class="btn btn-outline-light"># of pins</a>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('user-boards', domString);
};

const initBoards = () => {
  boardData.loadBoards()
    .then((resp) => {
      boardBuilder(resp.data.boards);
      // console.error('response', resp.data.boards);
    })
    .catch(err => console.error('error from loadBoards', err));
};

export default { initBoards };
