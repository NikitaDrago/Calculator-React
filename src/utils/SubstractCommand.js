export const SubtractCommand = function(valueToSubtract) {
  this.execute = currentValue => Math.round((currentValue - valueToSubtract) * 1000) / 1000
  this.undo = currentValue => currentValue + valueToSubtract
}

