import Promise from 'bluebird';
//ngl not sure if we need nconf or ramda rn but oh well
import nconf from 'nconf';
import R from 'ramda';  

function party(client, evt, suffix) {
  return Promise.resolve(`${evt.message.author.username} calls for partying! \n"https://i.imgur.com/pVmW06p.gif"`);
}

export default {
  party
};

export const help = {
  party: {}
};
