const TYPE_DAILY_TASK = 0; //daily task that needs to be done once a day, i.e. work out
const TYPE_DO_NOT_DO = 1; //something not to do: i.e. smoke cigarettes
const TYPE_DO_ONCE = 2; //something like wanting to go bungee jumping (one-time goal)


let resolutions = [
    {"demo":2},
    {},
    {}
];


function getEntries() {
  return resolutions;
}

function setEntryDesc(entryId, newDesc) {
  resolutions.forEach((resolution, i) => {
    if (resolution["id"] === entryId) {
      resolution["desc"] = newDesc;
    }
  });
}

function deleteEntry(entryId) {
  resolutions.forEach((resolution, i) => {
    if (resolution["id"] === entryId) {
      resolutions.splice(i, 1);
      return;
    }
  });

}



console.log(getEnties());
