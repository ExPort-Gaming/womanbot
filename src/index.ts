import { LogLevel } from '@sapphire/framework'
import Client from './lib/Client'

const client = new Client({
  intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS'],
  logger: {
    level: process.env.NODE_ENV === 'production' ? LogLevel.Info : LogLevel.Debug
  },
  shards: 'auto'
})

void client.start()