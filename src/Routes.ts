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
import ListVillagePage from "./pages/AdminPages/ElectionArea/ListVillagePage";
import AddPostOfficePage from "./pages/AdminPages/ElectionArea/AddPostOfficePage";
import ListPostOfficePage from "./pages/AdminPages/ElectionArea/ListPostOfficePage";
import AddSubDistrictPage from "./pages/AdminPages/ElectionArea/AddSubDistrictPage";
import ListSubDristictPage from "./pages/AdminPages/ElectionArea/ListSubDistrictPage";
import ListDistrictPage from "./pages/AdminPages/ElectionArea/ListDistrictPage";

import AddDistrictPage from "./pages/AdminPages/ElectionArea/AddDistrictPage";
import AddPaymentMethodPage from "./pages/AdminPages/ElectionArea/AddPaymentMethodPage";
import ListPaymentMethodPage from "./pages/AdminPages/ElectionArea/ListPaymentMethodPage";
import AddCitizenPage from "./pages/AdminPages/Citizen/AddCitizenPage";
import ListCitizenPage from "./pages/AdminPages/Citizen/ListCitizenPage";
import AddNonHoldingCitizenPage from "./pages/AdminPages/Citizen/AddNonHoldingCitizenPage";
import ListNonHoldingCitizenPage from "./pages/AdminPages/Citizen/ListNonHoldingCitizenPage";

import AddChairmanPage from "./pages/AdminPages/ChairmanProfile/AddChairmanPage";
import ListChairmanPage from "./pages/AdminPages/ChairmanProfile/ListChairmanPage";
import ListCasePage from "./pages/AdminPages/VillageCourt/ListCasePage";
import AddCasePage from "./pages/AdminPages/VillageCourt/AddCasePage";
import ListHoldingTaxPage from "./pages/AdminPages/Taxes/ListHoldingTaxPage";
import AddHoldingTaxPage from "./pages/AdminPages/Taxes/AddHoldingTaxPage";
import AddNonHoldingTaxPage from "./pages/AdminPages/Taxes/AddNonHoldingTaxPage";
import ListNonHoldingTaxPage from "./pages/AdminPages/Taxes/ListNonHoldingTaxPage";
import AddHoldingTaxPaymetPage from "./pages/AdminPages/TaxPayments/AddHoldingTaxPaymentPage";
import ListHoldingTaxPaymentPage from "./pages/AdminPages/TaxPayments/ListHoldingTaxPaymentPage";
import AddNonHoldingTaxPaymentPage from "./pages/AdminPages/TaxPayments/AddNonHoldingTaxPaymentPage";
import ListNonHoldingTaxPaymentPage from "./pages/AdminPages/TaxPayments/ListNonHoldingTaxPaymentPage";
import ListTradeLicensePage from "./pages/AdminPages/TradeLicense/ListTradeLicensePage";
import AddTradeLicense from "./pages/AdminPages/TradeLicense/AddTradeLicensePage";
import ListServicePage from "./pages/AdminPages/Citizen/ListServicePage";
import AddServicePage from "./pages/AdminPages/Citizen/AddServicePage";
import ListStructurePage from "./pages/AdminPages/ElectionArea/ListStructurePage";
import AddStructurePage from "./pages/AdminPages/ElectionArea/AddStructurePage";
import CasePrintPage from "./pages/AdminPages/VillageCourt/CasePrint";
import AddHoldingTaxManyPage from "./pages/AdminPages/Taxes/AddHoldingTaxManyPage";
import AddNonHoldingTaxManyPage from "./pages/AdminPages/Taxes/AddNonHoldingTaxManyPage";

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
		component: ListVillagePage,
	},

		// post office 
		{
			path: ROUTE_LIST.createPostOfice,
			exact: false,
			component: AddPostOfficePage,
		},
		{
			path: ROUTE_LIST.listPostOffice,
			exact: true,
			component: ListPostOfficePage,
		},
	
	// Sub Distruct 
	{
		path: ROUTE_LIST.createSubDistrict,
		exact: false,
		component: AddSubDistrictPage,
	},
	{
		path: ROUTE_LIST.listSubDistrict,
		exact: true,
		component: ListSubDristictPage,
	},
	// structure 
	{
		path: ROUTE_LIST.createStructureType,
		exact: false,
		component: AddStructurePage,
	},
	{
		path: ROUTE_LIST.listStructureType,
		exact: true,
		component: ListStructurePage,
	},
	{
		path: ROUTE_LIST.casePrint,
		exact: true,
		component: CasePrintPage,
	},
	// District 
	{
		path: ROUTE_LIST.createDistrict,
		exact: false,
		component: AddDistrictPage,
	},
	{
		path: ROUTE_LIST.listDistrict,
		exact: true,
		component: ListDistrictPage,
	},
		// Payment Method 
		{
			path: ROUTE_LIST.createPaymentMethod,
			exact: false,
			component: AddPaymentMethodPage,
		},
		{
			path: ROUTE_LIST.listPaymentMethod,
			exact: true,
			component: ListPaymentMethodPage,
			
		},
	

			// Citizen 
	{
		path: ROUTE_LIST.createCitizen,
		exact: false,
		component: AddCitizenPage,
	},
	{
		path: ROUTE_LIST.listCitizen,
		exact: true,
		component: ListCitizenPage,
	},
	{
		path: ROUTE_LIST.createService,
		exact: false,
		component: AddServicePage,
	},
	{
		path: ROUTE_LIST.listService,
		exact: true,
		component: ListServicePage,
	},
			// NonHolding Citizen 
		    {
				path: ROUTE_LIST.createNonHoldingCitizen,
				exact: false,
				component: AddNonHoldingCitizenPage,
			},
			{
				path: ROUTE_LIST.listNonHoldingCitizen,
				exact: true,
				component: ListNonHoldingCitizenPage,
			},
			// chairman 
	{
		path: ROUTE_LIST.createChairman,
		exact: false,
		component: AddChairmanPage,
	},
	{
		path: ROUTE_LIST.listChairman,
		exact: true,
		component: ListChairmanPage,
	},
	{
		path: ROUTE_LIST.createCase,
		exact: false,
		component: AddCasePage,
	},
	{
		path: ROUTE_LIST.listCase,
		exact: true,
		component: ListCasePage,
		props:{
			case:"unsolved"
		}
	},
	{
		path: ROUTE_LIST.listSolvedCase,
		exact: true,
		component: ListCasePage,
		props:{
			case:"solved"
		}
	},
	{
		path: ROUTE_LIST.listOngoingCase,
		exact: true,
		component: ListCasePage,
		props:{
			case:"ongoing"
		}
	},

		// Tax  
		{
			path: ROUTE_LIST.createHoldingTax,
			exact: false,
			component: AddHoldingTaxPage,
		},
		// Tax  
		{
			path: ROUTE_LIST.createHoldingTaxMany,
			exact: false,
			component: AddHoldingTaxManyPage,
		},
		{
			path: ROUTE_LIST.createNonHoldingTaxMany,
			exact: false,
			component: AddNonHoldingTaxManyPage,
		},
		
		{
			path: ROUTE_LIST.listHoldingTax,
			exact: true,
			component: ListHoldingTaxPage,
		},
		{
			path: ROUTE_LIST.createNonHoldingTax,
			exact: false,
			component: AddNonHoldingTaxPage,
		},
		{
			path: ROUTE_LIST.listNonHoldingTax,
			exact: true,
			component: ListNonHoldingTaxPage,
		},
			// Tax  payment
			{
				path: ROUTE_LIST.createHoldingTaxPayment,
				exact: false,
				component: AddHoldingTaxPaymetPage,
			},
			{
				path: ROUTE_LIST.listHoldingTaxPayment,
				exact: true,
				component: ListHoldingTaxPaymentPage,
			},
			{
				path: ROUTE_LIST.createNonHoldingTaxPayment,
				exact: false,
				component: AddNonHoldingTaxPaymentPage,
			},
			{
				path: ROUTE_LIST.listNonHoldingTaxPayment,
				exact: true,
				component: ListNonHoldingTaxPaymentPage,
			},

				// trade license 
	{
		path: ROUTE_LIST.createTradeLicense,
		exact: false,
		component: AddTradeLicense,
	},
	{
		path: ROUTE_LIST.listTradeLicense,
		exact: true,
		component: ListTradeLicensePage,
	},
];
//
