import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SetUserComponent } from './setUser/setUsercomponent';
import { CheckUserComponent } from './checkUser/checkUser.component';
import { WarningComponent } from './warning/warning.component';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    SetUserComponent,
    CheckUserComponent,
    WarningComponent,
    ExampleComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
