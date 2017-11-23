import build from './builder';
import { packages, NAMESPACE_LIB } from './config';

build({
  scope: NAMESPACE_LIB,
  packages,
}).catch(err => {
  console.error(err);
  process.exit(1);
});
