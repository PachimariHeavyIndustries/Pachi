import Promise from 'bluebird';

//if it doesn't work, delete the text Promise!
function catattack() {
  const number = Math.floor(Math.random() * 10) + 1;
  //return Promise.resolve("MURDER!");
  return Promise.resolve({upload: `./images/cat${number}.png`});
//return Promise.resolve({upload: './images/Tails.png'});
}

export default {
  catattack,
  catatk: catattack,
  cat: catattack,
};

export const help = {
  catattack: {}
};
