import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './index.html';
import './layouts/HomeLayout.html';
import './layouts/MainLayout.html';
import './layouts/Menu.html';

import './partials/SideNav.html';
import './partials/Header.html';

import '../lib/routes.js';

import './recipes/Recipes.html';
import './recipes/NewRecipe.html';
import './recipes/recipes.js';
import './recipes/Recipe.html';
import './recipes/RecipeSingle.html';
import './recipes/RecipeSingle.js';
import './recipes/recipe.js';

import '../collections/recipes.js';
import './Menu.js';

import './ShoppingList.html';
import './ShoppingList.js';