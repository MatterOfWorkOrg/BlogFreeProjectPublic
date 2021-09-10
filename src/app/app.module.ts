import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './pages/article/components/article/article.component';
import { SettingsComponent } from './pages/settings/components/settings/settings.component';
import { ProfileViewComponent } from './pages/profile/components/profile-view/profile-view.component';
import { ProfileEditComponent } from './pages/profile/components/profile-edit/profile-edit.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'Profile', component: ProfileViewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticleComponent,
    SettingsComponent,
    ProfileViewComponent,
    ProfileEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
