import Promise from 'bluebird';

function lego() {
  return Promise.resolve({upload: 'images/Lego.png'});
}

export default {
  lego,
  legos: lego
};

export const help = {
  lego: {}
};
