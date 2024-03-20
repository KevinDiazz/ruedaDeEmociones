// @ts-nocheck
function showInfo(emocion, emocionVar) {
  for (let index = 0; index < emocionVar.length; index++) {
    if (emocionVar[index].label === emocion) {
      return emocionVar[index];
    }
  }
}
export default showInfo;
