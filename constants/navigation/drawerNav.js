import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import PortraitIcon from "@mui/icons-material/Portrait";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CategoryIcon from "@mui/icons-material/Category";
import vendorIcon from "components/Common/Icons/vendorIcon";
import purchaseOrder from "components/Common/Icons/purchaseOrder";
import warehouseIcon from "components/Common/Icons/warehouseIcon";
import dashboard from "components/Common/Icons/dashboard";
import product from "components/Common/Icons/product";
import inventory from "components/Common/Icons/inventory";
import masterList from "components/Common/Icons/masterList";
import setting from "components/Common/Icons/setting";

const drawerNavLinks = [
	{
		title: "Dashboard",
		url: "/home",
		icon: dashboard,
	},
	{
		title: "Master Products List",
		url: "/app/products/master",
		icon: masterList,
	},
	{
		title: "Products ",
		url: "/app/products",
		icon: product,
		subMenu:[
			{
				title: "Publish Products",
				url: "/app/products/publish",
				icon: product,
			},
		]
	},
	{
		title: "Inventory ",
		url: "/app/inventory",
		icon: inventory,
	},
	{
		title: "Manage ",
		url: "/app/inventory/manage",
		icon: inventory,
	},

	{
		title: "Warehouse",
		url: "/app/warehouse",
		icon: warehouseIcon,
	},
	{
		title: "Vendors",
		url: "/app/vendors",
		icon: vendorIcon,
	},
	{
		title: "Purchase Orders",
		url: "/app/purchase-orders",
		icon: purchaseOrder,
	},

	{
		title: "Settings",
		url: "/settings",
		icon: setting,
	},

	// {
	// 	title: "Third Party Integration",
	// 	url: "/third-party-apps",
	// 	icon: StorefrontIcon,
	// },
	// {
	// 	title: "Profile",
	// 	url: "/onboarding/merchant",
	// 	icon: PortraitIcon,
	// },
];

export default drawerNavLinks;
