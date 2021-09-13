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
import { ChartsModule } from 'ng2-charts';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { RebuttalCardComponent } from './components/rebuttal-card/rebuttal-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { DiscussionComponent } from './pages/discussion/discussion.component';
import { DiscussionDetailComponent } from './pages/discussion-detail/discussion-detail.component';
import { BlankComponent } from './pages/blank/blank.component';

const appRoutes: Routes = [
  { path: 'Profile', component: ProfileViewComponent },
  { path: 'Home', component: HomeComponent},
  { path: 'Detail', component: DiscussionDetailComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticleComponent,
    SettingsComponent,
    ProfileViewComponent,
    ProfileEditComponent,
    ArticleCardComponent,
    RebuttalCardComponent,
    HomeComponent,
    DiscussionComponent,
    DiscussionDetailComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot(
      appRoutes
    ),
    // MbscModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
