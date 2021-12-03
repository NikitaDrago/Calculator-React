import { Commands } from '@/utils/Commands'

export const CalculatorStorage = function() {
  this.value = 0
  this.history = []

  this.executeCommand = (command, initValue, toValue) => {
    this.value = new Commands(command, +initValue, +toValue).execute(this.value)
    this.history.push(command)
  }

  this.undo = () => {
    const command = this.history.pop()
    this.value = command.undo(this.value)
  }
}
