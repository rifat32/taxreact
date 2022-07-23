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
				permissions: [ "election_area",
				"user_management"],
			},
			{
				name: sidebarLang.list_user,
				link: "/admin/users",
				permissions: [ 
				"user_management"],
			},
			{
				name: sidebarLang.create_role,
				link: "/admin/roles/create",
				permissions: [ 
				"user_management"],
			},
			{
				name: sidebarLang.list_roles,
				link: "/admin/roles",
				permissions: [ 
				"user_management"],
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
			{
				name: "সার্ভিস সমূহ",
				link: ROUTE_LIST.listService,
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
			{
				name: "চলমান মামলা",
				link: ROUTE_LIST.listOngoingCase,
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
				permissions: [ "election_area",
				],
			},
		
			{
				name: sidebarLang.wards,
				link: ROUTE_LIST.listWards,
				permissions: [ "election_area",],
			},
		
			{
				name: sidebarLang.villages,
				link: ROUTE_LIST.listVillages,
				permissions: [ "election_area",],
			},
		
			{
				name: sidebarLang.post_offices,
				link: ROUTE_LIST.listPostOffice,
				permissions: [ "election_area",],
			},
				// {
			// 	name: "Add Ward",
			// 	link: ROUTE_LIST.createWards,
			// 	permissions: [],
			// },
			{
				name: sidebarLang.sub_districts,
				link: ROUTE_LIST.listSubDistrict,
				permissions: [ "election_area",],
			},
			// {
			// 	name: "Add District",
			// 	link: ROUTE_LIST.createDistrict,
			// 	permissions: [],
			// },
			{
				name: sidebarLang.districts,
				link: ROUTE_LIST.listDistrict,
				permissions: [ "election_area",],
			},
			// {
			// 	name: "Add Payment Method",
			// 	link: ROUTE_LIST.createPaymentMethod,
			// 	permissions: [],
			// },
			{
				name: sidebarLang.payment_methods,
				link: ROUTE_LIST.listPaymentMethod,
				permissions: [ "election_area",],
			},
			{
				name: "অবকাঠামোর ধরণ",
				link: ROUTE_LIST.listStructureType,
				permissions: [ "election_area",],
			},
			
		],

	},
	{
		name: "রিপোর্ট",
		list: [
			
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


	

];
