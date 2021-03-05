import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './index.html';
import './layouts/HomeLayout.html';
import './layouts/MainLayout.html';

import './partials/SideNav.html';
import './partials/Header.html';

import '../lib/routes.js';

import './recipes/Recipes.html';
import './recipes/NewRecipe.html';
import './recipes/recipes.js';

import '../collections/recipes.js';
