module.exports = function createDreamTeam(members) {
  let answer=[];
  if (Array.isArray(members)) {
    for(let member of members) {
      if( typeof member ==="string") {
        answer.push(member.trim()[0].toUpperCase());
      }
    }
    return answer.sort().join("");
  } else return false;
};