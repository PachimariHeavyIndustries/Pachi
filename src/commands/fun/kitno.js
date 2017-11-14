import Promise from 'bluebird';

function killinginthenameof() {
  return Promise.resolve({upload: 'images/KillingInTheNameOf.png'});
}

export default {
  killinginthenameof,
  kitno: killinginthenameof
};

export const help = {
  killinginthenameof: {}
};
