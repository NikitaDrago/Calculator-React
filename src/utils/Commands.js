import { AddCommand } from '@/utils/AddCommand'
import { MultiplyCommand } from '@/utils/MultiplyCommand'
import { SubtractCommand } from '@/utils/SubstractCommand'
import { DivideCommand } from '@/utils/DevideCommand'
import { ModCommand } from '@/utils/ModCommand'

export const Commands = function(operation, valueToAdd, valueToOperation) {
  this.addCommand = new AddCommand(valueToAdd)
  switch (operation) {
    case '*': {
      this.multiplyCommand = new MultiplyCommand(valueToOperation)
      break
    }
    case '/': {
      this.multiplyCommand = new DivideCommand(valueToOperation)
      break
    }
    case '+': {
      this.multiplyCommand = new AddCommand(valueToOperation)
      break
    }
    case '-': {
      this.multiplyCommand = new SubtractCommand(valueToOperation)
      break
    }
    case '%': {
      this.multiplyCommand = new ModCommand(valueToOperation)
      break
    }
  }

  this.execute = currentValue => {
    const newValue = this.addCommand.execute(currentValue)

    return this.multiplyCommand.execute(newValue)
  }

  this.undo = currentValue => {
    const newValue = this.multiplyCommand.undo(currentValue)

    return this.addCommand.undo(newValue)
  }
}
