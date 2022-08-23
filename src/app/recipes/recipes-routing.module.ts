import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesStartComponent } from "./recipes-start/recipes-start.component";
import { RecipesComponent } from "./recipes.component";

const routes: Routes = [
    { path: '', component: RecipesComponent, canActivate: [AuthGuard], children: [
        { path: '', component: RecipesStartComponent},
        { path: ':id', component: RecipeDetailComponent},
        { path: 'new', component: RecipeEditComponent},
        { path: ':id/edit', component: RecipeEditComponent},
    ]},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule] 
})
export class RecipesRoutingModule{

}