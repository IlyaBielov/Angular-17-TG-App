import { Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { ShopComponent } from './pages/shop/shop.component';

export const routes: Routes = [
    { path: '', component: ShopComponent, pathMatch: 'full' },
    { path: 'product/:id', component: ProductComponent },
    { path: 'feedback', component: FeedbackComponent },
];
