import axios from 'axios';

const loadPinsFromBoard = boardId => new Promise((resolve, reject) => {
  axios.get('../db/pins.json')
    .then((resp) => {
      const allPins = resp.data.pins;
      // filter the pins
      // console.error('boardId inside pins', boardId);
      const matchingPins = allPins.filter(pin => pin.boardId === boardId);
      // resolve the filtered pins
      resolve(matchingPins);
    })
    .catch(err => reject(err));
});

export default { loadPinsFromBoard };
