import { NavInterface } from "../interfaces/AdminSideBarInterface";
import { ROUTE_LIST } from "../RoutConstants";
export const adminSideBarData: NavInterface[] = [
	
	{
		name: "User Management",
		list: [
			{
				name: "Create User",
				link: "/admin/users/create",
				permissions: [],
			},
			{
				name: "Users",
				link: "/admin/users",
				permissions: [],
			},
			{
				name: "Create Role",
				link: "/admin/roles/create",
				permissions: [],
			},
			{
				name: "Roles",
				link: "/admin/roles",
				permissions: [],
			},
		],
	},
	
	{
		name: "Election Area",
		list: [
			{
				name: "Add Union",
				link: ROUTE_LIST.createUnions,
				permissions: [],
			},
			{
				name: "List Unions",
				link: ROUTE_LIST.listUnions,
				permissions: [],
			},
			{
				name: "Add Ward",
				link: ROUTE_LIST.createWards,
				permissions: [],
			},
			{
				name: "List Wards",
				link: ROUTE_LIST.listWards,
				permissions: [],
			},
			{
				name: "Add Village",
				link: ROUTE_LIST.createVillage,
				permissions: [],
			},
			{
				name: "List Villages",
				link: ROUTE_LIST.listVillages,
				permissions: [],
			},

		
		],
	},

	

];
