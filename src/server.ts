import App  from './config/app';
import path from 'path';
import routes from './config/routes';
import { ConfigType } from "./interfaces/configType-interface";
import Logger from './config/logger';

const dirname = path.join(path.resolve(), '/src');
process.env.NODE_CONFIG_DIR  = dirname + '/config';
import config from 'config';

const general: ConfigType = config.get('general');
const app = new App(routes);

app.listen(<string> general.host.port, () => {
  Logger.info(`Express is listening at http://localhost:${general.host.port}`);
});