export type User = {
	_id: string;
	email: string;
	name: string;
	addressLine1: string;
	city: string;
	country: string;
}

export type MenuItem = {
	_id: string;
	name: string;
	price: string;
	menuItemImage: string;
}

export type Restaurant = {
	_id: string;
	user: string;
	city: string;
	country: string;
	deliveryPrice: number;
	estimatedDeliveryTime: number;
	cuisines: string[];
	menuItems: MenuItem[];
	imageUrl: string;
	lastUpdated: string;
}