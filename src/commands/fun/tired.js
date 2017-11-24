import Promise from 'bluebird';

function tired() {
  return Promise.resolve({upload: `./images/tired.jpg`});
}

export default {
  tired
};

export const help = {
    tired: {}
};
