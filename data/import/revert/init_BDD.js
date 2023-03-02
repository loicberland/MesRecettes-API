import executeSqlFileInPG from '../../utils/executeSqlFileInPG.js'
import 'dotenv/config'

const path = './data/migration/revert/init_BDD.sql'

executeSqlFileInPG(process.env.DATABASE_URL,path)