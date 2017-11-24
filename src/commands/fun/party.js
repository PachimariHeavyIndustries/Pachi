import Promise from 'bluebird';

function party() {
  return Promise.resolve(`Rawan calls for partying! \n"https://i.imgur.com/pVmW06p.gif"`);
}

export default {
  party
};

export const help = {
  party: {}
};
