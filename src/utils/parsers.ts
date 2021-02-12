import commander from 'commander'
import validator from 'validator'

export const endpointParser = (value: string) => {
  if (!validator.isURL(value)) {
    throw new commander.InvalidOptionArgumentError('Not a url')
  }
  return value
}
