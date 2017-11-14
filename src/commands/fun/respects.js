import Promise from 'bluebird';

function respect() {
  //return Promise.resolve(`Paying respects: \n${upload: 'images/Respects.jpg'}`);
  return Promise.resolve(`Paying respects: \n"https://i.imgur.com/9bC1UNC.jpg"`);
}

export default {
  respect,
  respects: respect,
  f: respect,
  F: respect 
};

export const help = {
  respect: {}
};
