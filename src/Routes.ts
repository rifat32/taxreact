import HomePage from "./pages/HomePage/index";
import LoginPage from "./pages/LoginPage/index";
import RegisterPage from "./pages/RegisterPage/index";
import Admin from "./pages/AdminPages/DemoAdmin";

import { RouteInterface } from "./interfaces/RoutesInterface";


import CreateWingPage from "./pages/AdminPages/MasterSetup/AddWingPage";
import ListWingsPage from "./pages/AdminPages/MasterSetup/ListWingsPage";

import CreateUserPage from "./pages/AdminPages/UserManagement/CreateUserPage";
import UsersPage from "./pages/AdminPages/UserManagement/UsersPage";
import CreateRolePage from "./pages/AdminPages/UserManagement/CreateRolePage";

import RolesPage from "./pages/AdminPages/UserManagement/RolesPage";

import {  ROUTE_LIST } from "./RoutConstants";




import AddWardPage from "./pages/AdminPages/ElectionArea/AddWardPage";
import ListWardPage from "./pages/AdminPages/ElectionArea/ListWardPage";
import AddUnionPage from "./pages/AdminPages/ElectionArea/AddUnionPage";
import ListUnionPage from "./pages/AdminPages/ElectionArea/ListUnionPage";
import AddVillagePage from "./pages/AdminPages/ElectionArea/AddVillagePage";


export const RouteData: RouteInterface[] = [
	{
		path: "/",
		exact: true,
		component: HomePage,
	},
	{
		path: "/login",
		exact: false,
		component: LoginPage,
	},
	{
		path: "/register",
		exact: false,
		component: RegisterPage,
	},
	{
		path: "/register",
		exact: false,
		component: RegisterPage,
	},
	{
		path: "/admin",
		exact: true,
		component: Admin,
	},

	// wings
	{
		path: "/admin/wings/create",
		exact: false,
		component: CreateWingPage,
	},
	{
		path: "/admin/wings",
		exact: true,
		component: ListWingsPage,
	},
	// users
	{
		path: "/admin/users/create",
		exact: false,
		component: CreateUserPage,
	},
	{
		path: "/admin/users",
		exact: true,
		component: UsersPage,
	},
	{
		path: "/admin/roles/create",
		exact: false,
		component: CreateRolePage,
	},
	{
		path: "/admin/roles",
		exact: true,
		component: RolesPage,
	},
	

	// Union 
	{
		path: ROUTE_LIST.createUnions,
		exact: false,
		component: AddUnionPage,
	},
	{
		path: ROUTE_LIST.listUnions,
		exact: true,
		component: ListUnionPage,
	},
	// Ward 
	{
		path: ROUTE_LIST.createWards,
		exact: false,
		component: AddWardPage,
	},
	{
		path: ROUTE_LIST.listWards,
		exact: true,
		component: ListWardPage,
	},
	// villages 
	{
		path: ROUTE_LIST.createVillage,
		exact: false,
		component: AddVillagePage,
	},
	{
		path: ROUTE_LIST.listVillages,
		exact: true,
		component: ListWardPage,
	},
	
	
];
//
