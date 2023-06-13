let activity 
function saturdayFun(activity = `roller skate`) {
  return `This Saturday, I want to ${activity}`;
}

const mondayWork = function(mondayActivity = "go to the office") {
  return `This Monday, I will ${mondayActivity}.`;
};

console.log(mondayWork)
console.log(saturdayFun())

// faulty
function wrapAdjective () {
    return function (parameter1 =`special`) {
return `you are ${parameter1}`
    }
}




