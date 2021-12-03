export const DivideCommand = function(valueToDivide) {
  this.execute = currentValue => Math.round((currentValue / valueToDivide) * 1000) / 1000
  this.undo = currentValue => currentValue * valueToDivide
}
