export const AddCommand = function(valueToAdd) {
  this.execute = currentValue => Math.round((currentValue + valueToAdd) * 1000) / 1000
  this.undo = currentValue => currentValue - valueToAdd
}
