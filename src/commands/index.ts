import seeder from '@commercelayer/commercelayer-seeder'
import chalk from 'chalk'
import createLogger from 'progress-estimator'

type Options = {
  clientId: string
  clientSecret: string
  endpoint: string
  businessModel?: 'multi_market' | 'custom'
  maxItems?: number
  resources?: string
}

export default async (options: Options) => {
  const {
    endpoint,
    clientId,
    clientSecret,
    businessModel = 'multi_market',
    maxItems,
    ...o
  } = options
  const logger = createLogger()
  try {
    const estimate = 30000
    await logger(
      seeder({
        clientId,
        clientSecret,
        endpoint,
        businessModel,
        infoLog: false,
        maxItems: maxItems ? Number(maxItems) : undefined,
        ...o,
      }),
      'Importing the seed in Commerce Layer...',
      { estimate }
    )
    console.log(`🎉The seed has been imported with success.`)
  } catch (error) {
    console.error(chalk.red(error))
  }
}
