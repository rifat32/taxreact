import { NavInterface } from "../interfaces/AdminSideBarInterface";
import { sidebarLang } from "../language/bn/sidebar";
import { ROUTE_LIST } from "../RoutConstants";
export const adminSideBarData: NavInterface[] = [
	
	{
		name: sidebarLang.user_management,
		list: [
			{
				name: sidebarLang.create_user,
				link: "/admin/users/create",
				permissions: [],
			},
			{
				name: sidebarLang.list_user,
				link: "/admin/users",
				permissions: [],
			},
			{
				name: sidebarLang.create_role,
				link: "/admin/roles/create",
				permissions: [],
			},
			{
				name: sidebarLang.list_roles,
				link: "/admin/roles",
				permissions: [],
			},
		],
	},
	{
		name: sidebarLang.citizen,
		list: [
			// {
			// 	name: "Add Union",
			// 	link: ROUTE_LIST.createUnions,
			// 	permissions: [],
			// },
			{
				name: sidebarLang.citizen,
				link: ROUTE_LIST.listCitizen,
				permissions: [],
			},
			{
				name: sidebarLang.non_holding_citizen,
				link: ROUTE_LIST.listNonHoldingCitizen,
				permissions: [],
			},
			// {
			// 	name: "Add Ward",
			// 	link: ROUTE_LIST.createWards,
			// 	permissions: [],
			// },
		
		],
	},
	{
		name: sidebarLang.chair_man_profile,
		list: [
			// {
			// 	name: "Add Union",
			// 	link: ROUTE_LIST.createUnions,
			// 	permissions: [],
			// },
			{
				name: sidebarLang.chairman,
				link: ROUTE_LIST.listChairman,
				permissions: [],
			},
			
		
		],
	},
	{
		name: sidebarLang.village_court,
		list: [
			// {
			// 	name: "Add Union",
			// 	link: ROUTE_LIST.createUnions,
			// 	permissions: [],
			// },
			{
				name: sidebarLang.unsolved_cases,
				link: ROUTE_LIST.listCase,
				permissions: [],
			},
			{
				name: sidebarLang.solved_cases,
				link: ROUTE_LIST.listSolvedCase,
				permissions: [],
			},
			
		
		],
	},
	{
		name: sidebarLang.taxes,
		list: [
			// {
			// 	name: "Add Union",
			// 	link: ROUTE_LIST.createUnions,
			// 	permissions: [],
			// },
			{
				name: sidebarLang.holding_tax,
				link: ROUTE_LIST.listHoldingTax,
				permissions: [],
			},
			{
				name: sidebarLang.non_holding_tax,
				link: ROUTE_LIST.listNonHoldingTax,
				permissions: [],
			},
			
		
		],
	},
	{
		name: sidebarLang.taxePayment,
		list: [
			// {
			// 	name: "Add Union",
			// 	link: ROUTE_LIST.createUnions,
			// 	permissions: [],
			// },
			{
				name: sidebarLang.holding_tax_payment,
				link: ROUTE_LIST.listHoldingTaxPayment,
				permissions: [],
			},
			{
				name: sidebarLang.non_holding_tax_payment,
				link: ROUTE_LIST.listNonHoldingTaxPayment,
				permissions: [],
			},
			
		
		],
	},
	{
		name: sidebarLang.tradeLicense,
		list: [

			{
				name: sidebarLang.tradeLicense,
				link: ROUTE_LIST.listTradeLicense,
				permissions: [],
			},
			
		
		],
	},
	{
		name: sidebarLang.election_area,
		list: [
			// {
			// 	name: "Add Union",
			// 	link: ROUTE_LIST.createUnions,
			// 	permissions: [],
			// },
			{
				name: sidebarLang.unions,
				link: ROUTE_LIST.listUnions,
				permissions: [],
			},
			// {
			// 	name: "Add Ward",
			// 	link: ROUTE_LIST.createWards,
			// 	permissions: [],
			// },
			{
				name: sidebarLang.wards,
				link: ROUTE_LIST.listWards,
				permissions: [],
			},
			// {
			// 	name: "Add Village",
			// 	link: ROUTE_LIST.createVillage,
			// 	permissions: [],
			// },
			{
				name: sidebarLang.villages,
				link: ROUTE_LIST.listVillages,
				permissions: [],
			},
			// {
			// 	name: "Add Post Office",
			// 	link: ROUTE_LIST.createPostOfice,
			// 	permissions: [],
			// },
			{
				name: sidebarLang.post_offices,
				link: ROUTE_LIST.listPostOffice,
				permissions: [],
			},
				// {
			// 	name: "Add Ward",
			// 	link: ROUTE_LIST.createWards,
			// 	permissions: [],
			// },
			{
				name: sidebarLang.sub_districts,
				link: ROUTE_LIST.listSubDistrict,
				permissions: [],
			},
			// {
			// 	name: "Add District",
			// 	link: ROUTE_LIST.createDistrict,
			// 	permissions: [],
			// },
			{
				name: sidebarLang.districts,
				link: ROUTE_LIST.listDistrict,
				permissions: [],
			},
			// {
			// 	name: "Add Payment Method",
			// 	link: ROUTE_LIST.createPaymentMethod,
			// 	permissions: [],
			// },
			{
				name: sidebarLang.payment_methods,
				link: ROUTE_LIST.listPaymentMethod,
				permissions: [],
			},
		],
	},

	

];
