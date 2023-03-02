import executeSqlFileInPG from '../../utils/executeSqlFileInPG.mjs'
import 'dotenv/config'

const path = './data/seeding/seeding_V0.sql'

executeSqlFileInPG(process.env.DATABASE_URL,path)