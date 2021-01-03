// this is the folder for API implementation

const TYPE_DAILY_TASK = 0; //daily task that needs to be done once a day, i.e. work out
const TYPE_DO_NOT_DO = 1; //something not to do: i.e. smoke cigarettes
const TYPE_DO_ONCE = 2; //something like wanting to go bungee jumping (one-time goal)


//Add a resolution entry
// takes in string and number
function addEntry(goalDesc, type) {
    let id = localStorage.getItem('id') ? parseInt(localStorage.getItem('id')) + 1 : 0;
    let goal = {
        'desc': goalDesc,
        'type': type,
        'id': id //unique id for each entry
    }
    if (type === TYPE_DAILY_TASK) {
      goal['streak'] = 0;
    }
    if (type === TYPE_DO_ONCE) {
      goal['done'] = false;
    }
    localStorage.setItem('id', id.toString())
    let goalArray = getEntries();
    goalArray.push(goal);
    let arrayString = JSON.stringify(goalArray)
    localStorage.setItem('goals', arrayString);
}
//returns the saved goal entries (an array)
function getEntries() {
    let goalArray = JSON.parse(localStorage.getItem('goals'));
    if (!goalArray) {
        return [];
    }
    return goalArray;
}
//change the desc of an entry using its ID
function setEntryDesc(entryId, newDesc){
    let goalArray = getEntries();
    for (let i = 0; i<goalArray.length; i++){
        if (goalArray[i]['id'] == entryId){
            goalArray[i]['desc'] = newDesc;
            break;
        }
    }
    let arrayString = JSON.stringify(goalArray);
    localStorage.setItem('goals', arrayString);
}

function deleteEntry(entryId){
    let goalArray = getEntries();
    for (let i = 0; i<goalArray.length; i++){
        if (goalArray[i]['id'] == entryId){
            goalArray.splice(i,1)
            break;
        }
    }
    let arrayString = JSON.stringify(goalArray);
    localStorage.setItem('goals', arrayString);
}

//takes a string and sets the name
function setUserName(name) {
    localStorage.userName = name;
}

module.exports = {
  addEntry,
  getEntries,
  setEntryDesc,
  deleteEntry,
  setUserName
}
