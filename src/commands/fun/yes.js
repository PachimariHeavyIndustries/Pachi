import Promise from 'bluebird';

function yes() {
  const number = Math.floor(Math.random() * 2) + 1;
  return Promise.resolve({upload: `images/Yes${number}.jpg`});
}

export default {
  yes
};

export const help = {
  yes: {}
};
