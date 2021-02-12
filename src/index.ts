import { program } from 'commander'
import { endpointParser } from '#utils/parsers'
import seeder from '#commands'

const version = '1.0.0'

export const index = async () => {
  program.version(version, '-v, --version', 'output the current version')

  program
    .version(version)
    .requiredOption(
      '-i, --clientId <clientId>',
      'your Commerce Layer application client ID'
    )
    .requiredOption(
      '-s, --clientSecret <clientSecret>',
      'your Commerce Layer application client secret'
    )
    .requiredOption(
      '-e, --endpoint <endpoint>',
      'your Commerce Layer application endpoint',
      endpointParser
    )
    .option(
      '-b, --businessModel <businessModel>',
      'the kind of business model you want to import'
    )
    .option(
      '-m, --maxItems <maxItems>',
      'the maximum number of SKUs that will be imported'
    )
    .option(
      '-u, --resourcesUrl <resourcesUrl>',
      'the resources URL or local path'
    )
    .description('Import a Commerce Layer seeder in your organization')
    .action(seeder)

  await program.parseAsync(process.argv)
}

index()
