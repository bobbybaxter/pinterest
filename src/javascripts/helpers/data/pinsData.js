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

const getPinsForEachBoard = boards => new Promise((resolve, reject) => {
  axios.get('../db/pins.json')
    .then((resp) => {
      const { pins } = resp.data;
      const boardsWithPins = boards.map((board) => {
        const newBoard = board;
        const matchingPins = pins.filter(pin => pin.boardId === board.id);
        newBoard.pins = matchingPins;
        return newBoard;
      });
      resolve(boardsWithPins);
    })
    .catch(err => reject(err));
});

export default { loadPinsFromBoard, getPinsForEachBoard };
