import Promise from 'bluebird';

function sad() {
  const number = Math.floor(Math.random() * 5) + 1;
  return Promise.resolve({upload: `images/sad${number}.jpg`});
}

export default {
  sad,
  donnie: sad
};

export const help = {
  sad: {}
};
