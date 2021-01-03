const TYPE_DAILY_TASK = 0; //daily task that needs to be done once a day, i.e. work out
const TYPE_DO_NOT_DO = 1; //something not to do: i.e. smoke cigarettes
const TYPE_DO_ONCE = 2; //something like wanting to go bungee jumping (one-time goal)

import * as resolutions from './data.json';

let resolutions = [
    {"demo":2},
    {},
    {}
]

function getEnties() {
  return resolutions;
}

console.log(getEnties());
