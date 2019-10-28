import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {PlacesService} from './places/shared/places.service';
import {UsersService} from './users/shared/users.service';
import {CoreModule} from './core/core.module';
import {PlacesModule} from './places/places.module';
import {VotesModule} from './votes/votes.module';
import {UsersModule} from './users/users.module';
import {AppComponent} from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        PlacesModule,
        VotesModule,
        UsersModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        PlacesService,
        UsersService,
    ],
    bootstrap: [AppComponent],
})

export class AppModule { }
