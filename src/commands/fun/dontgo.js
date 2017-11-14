import Promise from 'bluebird';

function dontgo() {
  return Promise.resolve({upload: `images/Dontgo.jpg`});
}

export default {
  dontgo,
  dontgoalone: dontgo 
};

export const help = {
  dontgo: {}
};
