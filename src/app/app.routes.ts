import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';

export const routes: Routes = [
    { 
      path: '', component: HomeComponent, 
      children: [
        { path: 'post', component: PostComponent } 
      ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' } 
  ];