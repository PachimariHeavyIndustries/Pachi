import Promise from 'bluebird';

//if it doesn't work, delete the text Promise!
function dinosaur() {
  const number = Math.floor(Math.random() * 3) + 1;
  return Promise.resolve({upload: `./images/dinosaur${number}.png`});
}

export default {
  dinosaur,
  dino: dinosaur
};

export const help = {
  dinosaur: {}
};
