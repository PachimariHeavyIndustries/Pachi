import Promise from 'bluebird';

function no() {
  const number = Math.floor(Math.random() * 3) + 1;
  return Promise.resolve({upload: `images/No${number}.jpg`});
}

export default {
  no
};

export const help = {
  no: {}
};
