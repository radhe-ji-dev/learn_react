// mongodb jaisa setup create karna hai
function MongoDB() {
	let product = {
		productId: null, // unique id (DB level)
		productName: undefined, // SaaS name
		price: 0, // monthly subscription price
		plan: 'free', // free | pro | enterprise
		activeUsers: 0, // number of paying users
		isActive: true, // product status
	};
	let TotalProducts = [];
	return {
		getProductInfo: function () {
			return TotalProducts;
		},
		InsertOne: function ({ ...product }) {
			TotalProducts.push(product);
		},
		getTotalProductSize: () => TotalProducts.length,
		getPlanDetails: (id) => {
			let item = TotalProducts.filter(
				(product) =>
					// console.log(`${product.productId} ${product.productId === id}`);
					product.productId === id,
			);
			if (item.length === 0) {
				return 'id not found';
			}
			//   console.log(item[0]);
			//   console.log(`item.plan>>>${item[0].plan}`);
			if (item[0].plan.toLowerCase() === 'free') {
				return ['basic'];
			}
			if (item[0].plan.toLowerCase() === 'pro') {
				return ['basic', 'analytics'];
			}
			if (item[0].plan.toLowerCase() === 'enterprise') {
				return ['all'];
			}
		},
		upgradePlan: function (id, newplan) {
			console.log(id, newplan);
			let item = TotalProducts.filter((product) => product.productId === id);
			console.log(item);
			if (item[0].plan === 'enterprise') {
				return 'cannot be downgraded, Create new free tier product!!!!';
			}
		},
	};
}

let product1 = new MongoDB();
// console.log(product1.getProductInfo());
product1.InsertOne({
	productId: 1,
	productName: 'Lenovo',
	price: 64649494,
	plan: 'Free',
	activeUsers: 14,
	isActive: true,
});
// console.log(product1.getProductInfo());
product1.InsertOne({
	productId: 2,
	productName: 'Apple',
	price: 1400000,
	plan: 'enterprise',
	activeUsers: 14,
	isActive: true,
});
product1.InsertOne({
	productId: 3,
	productName: 'Banana',
	price: 25000,
	plan: 'Free',
	activeUsers: 14,
	isActive: true,
});
// console.log(product1.getProductInfo());
// console.log(product1.getPlanDetails((id = 2)));
console.log(product1.upgradePlan((id = 3), (newplan = 'pro')));
// totalProducts:array
// [
//   {
//     productId: 1,
//     productName: "Lenovo",
//     price: 64649494,
//     plan: "Free",
//     activeUsers: 14,
//     isActive: true,
//   },
//   {
//     productId: 2,
//     productName: "Apple",
//     price: 1400000,
//     plan: "Free",
//     activeUsers: 14,
//     isActive: true,
//   },
//   {
//     productId: 3,
//     productName: "Banana",
//     price: 25000,
//     plan: "Free",
//     activeUsers: 14,
//     isActive: true,
//   },
// ];

// mongodb jaisa setup create karna hai
function MongoDB() {
	let product = {
		productId: null, // unique id (DB level)
		productName: undefined, // SaaS name
		price: 0, // monthly subscription price
		plan: 'free', // free | pro | enterprise
		activeUsers: 0, // number of paying users
		isActive: true, // product status
	};
	let TotalProducts = [];
	return {
		getProductInfo: function () {
			return TotalProducts;
		},
		InsertOne: function ({ ...product }) {
			TotalProducts.push(product);
		},
		InsertMany: (params) =>
			params.forEach((product) => TotalProducts.push(product)),
		getTotalProductSize: () => TotalProducts.length,
		getPlanDetails: (id) => {
			let item = TotalProducts.filter(
				(product) =>
					// console.log(`${product.productId} ${product.productId === id}`);
					product.productId === id,
			);
			if (item.length === 0) {
				return 'id not found';
			}
			//   console.log(item[0]);
			//   console.log(`item.plan>>>${item[0].plan}`);
			if (item[0].plan.toLowerCase() === 'free') {
				return ['basic'];
			}
			if (item[0].plan.toLowerCase() === 'pro') {
				return ['basic', 'analytics'];
			}
			if (item[0].plan.toLowerCase() === 'enterprise') {
				return ['all'];
			}
		},
		upgradePlan: function (id, newplan) {
			TotalProducts.forEach((product) => {
				if (product.productId === id) {
					if (newplan.toLowerCase() === 'free') {
						return 'Invalid Operation, Cannot Downgrade';
					}
					if (
						product.plan.toLowerCase() === 'free' &&
						(newplan.toLowerCase() === 'pro' ||
							newplan.toLowerCase() === 'enterprise')
					) {
						product.plan = newplan.toLowerCase();
					}

					if (
						product.plan.toLowerCase() === 'pro' &&
						newplan.toLowerCase() === 'enterprise'
					) {
						product.plan = newplan.toLowerCase();
					}
					if (product.plan.toLowerCase() === 'enterprise') {
						return 'already in enterprise mode, Update not required';
					}
				}
			});
		},
	};
}

// console.log(product1.getProductInfo());
product1.InsertOne({
	productId: 2,
	productName: 'Apple',
	price: 1400000,
	plan: 'enterprise',
	activeUsers: 14,
	isActive: true,
});
product1.InsertOne({
	productId: 3,
	productName: 'Banana',
	price: 25000,
	plan: 'Free',
	activeUsers: 14,
	isActive: true,
});
// console.log(product1.getProductInfo());
// console.log(product1.getPlanDetails((id = 2)));
// console.log(product1.upgradePlan((id = 3), (newplan = "pro")));
product1.InsertMany([
	{
		productId: 4,
		productName: 'Dragonfruit',
		price: 50000,
		plan: 'Pro',
		activeUsers: 310,
		isActive: true,
	},
	{
		productId: 5,
		productName: 'Elderberry',
		price: 0,
		plan: 'Free',
		activeUsers: 8,
		isActive: false,
	},
	{
		productId: 6,
		productName: 'Fig',
		price: 75000,
		plan: 'Enterprise',
		activeUsers: 1200,
		isActive: true,
	},
	{
		productId: 7,
		productName: 'Grape',
		price: 15000,
		plan: 'Basic',
		activeUsers: 89,
		isActive: true,
	},
	{
		productId: 8,
		productName: 'Honeydew',
		price: 50000,
		plan: 'Pro',
		activeUsers: 215,
		isActive: false,
	},
	{
		productId: 9,
		productName: 'Iguana-Fruit',
		price: 0,
		plan: 'Free',
		activeUsers: 3,
		isActive: true,
	},
	{
		productId: 10,
		productName: 'Jackfruit',
		price: 99000,
		plan: 'Enterprise',
		activeUsers: 540,
		isActive: true,
	},
	{
		productId: 11,
		productName: 'Kiwi',
		price: 15000,
		plan: 'Basic',
		activeUsers: 42,
		isActive: true,
	},
	{
		productId: 12,
		productName: 'Lemon',
		price: 0,
		plan: 'Free',
		activeUsers: 115,
		isActive: true,
	},
	{
		productId: 13,
		productName: 'Mango',
		price: 50000,
		plan: 'Pro',
		activeUsers: 280,
		isActive: true,
	},
]);
console.log(product1.getProductInfo());
console.log(product1.getTotalProductSize());
// totalProducts:array
// [
//   {
//     productId: 1,
//     productName: "Lenovo",
//     price: 64649494,
//     plan: "Free",
//     activeUsers: 14,
//     isActive: true,
//   },
//   {
//     productId: 2,
//     productName: "Apple",
//     price: 1400000,
//     plan: "Free",
//     activeUsers: 14,
//     isActive: true,
//   },
//   {
//     productId: 3,
//     productName: "Banana",
//     price: 25000,
//     plan: "Free",
//     activeUsers: 14,
//     isActive: true,
//   },
// ];
