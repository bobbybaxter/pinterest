import pinsData from '../../helpers/data/pinsData';

const initPins = (boardId) => {
  pinsData.loadPinsFromBoard(boardId)
    .then((pins) => {
      console.error('all pins', pins);
    })
    .catch(err => console.error(err));
};

export default { initPins };
