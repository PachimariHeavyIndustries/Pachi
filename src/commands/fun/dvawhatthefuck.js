import Promise from 'bluebird';

function dvawhatthefuck() {
  return Promise.resolve({upload: 'images/DvaWhatTheFuck.jpg'});
}

export default {
  dvawhatthefuck,
  dvafuck: dvawhatthefuck
};

export const help = {
  dvawhatthefuck: {}
};
