import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from 'src/shared/navbar/navbar.component';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthModule } from './authentication/auth.module';
import { AuthInterceptor } from './interceptor/auth-interceptor';
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ProductModule,
        CategoryModule,
        HttpClientModule,
        MatDialogModule,
        AuthModule,
        SharedModule
    ]
})
export class AppModule { }
