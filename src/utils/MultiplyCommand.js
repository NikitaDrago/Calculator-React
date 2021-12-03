export const MultiplyCommand = function(valueToMultiply) {
  this.execute = currentValue => Math.round((currentValue * valueToMultiply) * 1000) / 1000
  this.undo = currentValue => currentValue / valueToMultiply
}
