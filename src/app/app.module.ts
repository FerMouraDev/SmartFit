import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [{
        provide: LOCALE_ID,
        useValue: 'pt-BR'
    }],
    bootstrap: [
        AppComponent,
        HeaderComponent]
})
export class AppModule {}