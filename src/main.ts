// https://github.com/stackblitz/core/issues/2366
import 'zone.js'; // Avoid error in StackBlitz
import 'array-flat-polyfill'; // Avoid error in StackBlitz due to outdated TS supportimport { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
