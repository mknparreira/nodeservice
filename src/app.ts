import express from "express";
import path from 'path';

const dirname = path.join(path.resolve(), '/src');

process.env.NODE_CONFIG_DIR  = dirname + '/config';

import config from 'config';
import { ConfigType } from "./interfaces/configType-interface";

const general: ConfigType = config.get('general');

const app = express();

//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(general.host.port, () => {
  return console.log(`Express is listening at http://localhost:${general.host.port}`);
});
