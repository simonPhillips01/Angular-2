import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { RecipeBookAppComponent, evironment } from './app/';
import { ShoppingListService } from './app/shopping-list';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
bootstrap(RecipeBookAppComponent, [
  APP_ROUTES_PROVIDERS,
  ShoppingListService,
  provideForms(),
  disableDeprecatedForms()
])
