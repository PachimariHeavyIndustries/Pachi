import Promise from 'bluebird';

function fightme() {
  return Promise.resolve(`u wot m8?! \n"http://digitalspyuk.cdnds.net/16/37/480x333/gallery-1473867166-pokemon-pikachu-fight.gif"`);
}

export default {
  fightme
};

export const help = {
  fightme: {}
};
