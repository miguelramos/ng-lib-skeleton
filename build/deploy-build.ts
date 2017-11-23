import * as tasks from './tasks';
import { createBuilder } from './util';
import { packages, NAMESPACE_LIB } from './config';

const deploy = createBuilder([['Deploy builds', tasks.publishToRepo]]);

deploy({
  scope: NAMESPACE_LIB,
  packages,
}).catch(err => {
  console.error(err);
  process.exit(1);
});
