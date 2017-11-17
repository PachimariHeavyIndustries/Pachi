import Promise from 'bluebird';

function boop() {
  return Promise.resolve({upload: `images/Boop.png`});
}

export default {
  boop
};

export const help = {
  boop: {}
};
