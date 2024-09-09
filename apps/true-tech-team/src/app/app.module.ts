import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NxWelcomeComponent } from "./nx-welcome.component";

import { ComponentLibraryAngularModule } from '@true-tech-team/component-library-angular'
import { defineCustomElements } from '@true-tech-team/component-library/loader'

defineCustomElements()

@NgModule({
    declarations: [AppComponent, NxWelcomeComponent],
    imports: [BrowserModule, RouterModule, ComponentLibraryAngularModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}