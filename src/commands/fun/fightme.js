import Promise from 'bluebird';

function fightme() {
  return Promise.resolve(`u wot m8?! \n"https://i.imgur.com/1XKMWfJ.gif"`);
}

export default {
  fightme
};

export const help = {
  fightme: {}
};
