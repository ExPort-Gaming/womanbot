process.env.NODE_ENV ??= 'development'

import { config } from 'dotenv-cra'
import { join } from 'path'
import 'reflect-metadata'
import { inspect } from 'util'
import { srcDir } from './Constants'

config({ path: join(srcDir, '.env') })

inspect.defaultOptions.depth = 1