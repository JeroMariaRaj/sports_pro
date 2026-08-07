/* 
====================================================================
SportsPro X - Data & Store Management
====================================================================
*/

// 1. Generate 100 Mock Products (10 Categories x 10 Products)
const categories = [
    'Cricket', 'Football', 'Badminton', 'Basketball', 'Fitness', 
    'Cycling', 'Outdoor', 'Swimming', 'Gym Equipment', 'Accessories'
];

const brands = ['Nike', 'Adidas', 'Puma', 'Under Armour', 'Decathlon', 'Kookaburra', 'Gray-Nicolls', 'Yonex', 'Spalding', 'Garmin'];

const adjectives = ['Pro', 'Elite', 'Advanced', 'Ultra', 'Premium', 'Carbon', 'Aero', 'Dynamic', 'Max', 'Prime'];
const nouns = {
    'Cricket': ['Bat', 'Helmet', 'Gloves', 'Pads', 'Ball', 'Kit Bag', 'Shoes', 'Thigh Guard', 'Stumps', 'Grip'],
    'Football': ['Boot', 'Match Ball', 'Training Kit', 'Shin Guards', 'Goalkeeper Gloves', 'Agility Cones', 'Goal Net', 'Pump', 'Captain Armband', 'Socks'],
    'Badminton': ['Racket', 'Shuttlecocks', 'Court Shoes', 'Grip Tape', 'Net', 'Kit Bag', 'String', 'Wristband', 'Headband', 'Training Towel'],
    'Basketball': ['Indoor Ball', 'Outdoor Ball', 'Hoop System', 'Sneakers', 'Jersey', 'Shorts', 'Sleeve', 'Pump', 'Whistle', 'Tactics Board'],
    'Fitness': ['Yoga Mat', 'Resistance Bands', 'Jump Rope', 'Kettlebell', 'Foam Roller', 'Protein Shaker', 'Weight Belt', 'Gloves', 'Step Aerobics', 'Ab Roller'],
    'Cycling': ['Helmet', 'Jersey', 'Shorts', 'Gloves', 'Water Bottle', 'Lock', 'Lights', 'Pump', 'Saddle Bag', 'Computer'],
    'Outdoor': ['Tent', 'Sleeping Bag', 'Hiking Boots', 'Backpack', 'Headlamp', 'Trekking Poles', 'Multi-tool', 'Compass', 'Hydration Pack', 'Stove'],
    'Swimming': ['Goggles', 'Cap', 'Swimsuit', 'Trunks', 'Kickboard', 'Pull Buoy', 'Fins', 'Ear Plugs', 'Nose Clip', 'Towel'],
    'Gym Equipment': ['Dumbbells', 'Treadmill', 'Rowing Machine', 'Bench', 'Barbell', 'Weight Plates', 'Squat Rack', 'Exercise Bike', 'Medicine Ball', 'Pull-up Bar'],
    'Accessories': ['Sports Watch', 'Sunglasses', 'Cap', 'Duffel Bag', 'Water Bottle', 'Towel', 'Wristbands', 'Headband', 'Shoe Bag', 'Laces']
};

const productImages = {
    'Cricket': 'assets/images/cricket_bat_premium_1786007732561.jpg',
    'Football': 'assets/images/football_boot_premium_1786007742592.jpg',
    'Badminton': 'assets/images/badminton_racket_premium_1786012599855.jpg',
    'Basketball': 'assets/images/basketball_premium_1786007791000.jpg',
    'Fitness': 'assets/images/fitness_dumbbell_premium_1786007768795.jpg',
    'Cycling': 'assets/images/cycling_helmet_premium_1786012608942.jpg',
    'Outdoor': 'assets/images/outdoor_hiking_boot_premium_1786012628516.jpg',
    'Swimming': 'assets/images/swimming_goggles_premium_1786012639202.jpg',
    'Gym Equipment': 'assets/images/gym_treadmill_premium_1786012835841.jpg',
    'Accessories': 'assets/images/sports_watch_premium_1786012845702.jpg'
};

const mockProducts = [
    {
        id: "PRD-0001", name: "Nike Pro Cricket Bat", category: "Cricket", brand: "Nike", price: 150, discountPrice: 120, rating: "4.8", reviews: 120, stock: 15,
        image: "assets/images/prd-0001.jpg", description: "Premium English Willow bat for explosive power.", specifications: { weight: "2.8 lbs", material: "English Willow", warranty: "1 Year" }, isNew: true, isFeatured: true
    },
    {
        id: "PRD-0002", name: "Adidas Match Football", category: "Football", brand: "Adidas", price: 80, discountPrice: null, rating: "4.5", reviews: 85, stock: 40,
        image: "assets/images/prd-0002.jpg", description: "FIFA Quality Pro certified match ball.", specifications: { weight: "430g", material: "PU Leather", warranty: "6 Months" }, isNew: false, isFeatured: true
    },
    {
        id: "PRD-0003", name: "Yonex Elite Badminton Racket", category: "Badminton", brand: "Yonex", price: 120, discountPrice: 99, rating: "4.9", reviews: 200, stock: 25,
        image: "assets/images/prd-0003.jpg", description: "Lightweight carbon frame for quick smashes.", specifications: { weight: "85g", material: "Carbon Graphite", warranty: "1 Year" }, isNew: true, isFeatured: true
    },
    {
        id: "PRD-0004", name: "Spalding Outdoor Basketball", category: "Basketball", brand: "Spalding", price: 45, discountPrice: null, rating: "4.7", reviews: 150, stock: 50,
        image: "assets/images/prd-0004.jpg", description: "Durable composite leather for outdoor play.", specifications: { weight: "600g", material: "Composite Leather", warranty: "1 Year" }, isNew: false, isFeatured: true
    },
    {
        id: "PRD-0005", name: "Puma Advanced Yoga Mat", category: "Fitness", brand: "Puma", price: 30, discountPrice: 25, rating: "4.6", reviews: 90, stock: 100,
        image: "assets/images/prd-0005.jpg", description: "Anti-slip surface for perfect balance.", specifications: { weight: "1.2 kg", material: "TPE", warranty: "None" }, isNew: false, isFeatured: false
    },
    {
        id: "PRD-0006", name: "Garmin Aero Cycling Helmet", category: "Cycling", brand: "Garmin", price: 110, discountPrice: null, rating: "4.8", reviews: 65, stock: 20,
        image: "assets/images/prd-0006.jpg", description: "Aerodynamic and lightweight for speed.", specifications: { weight: "250g", material: "Polycarbonate", warranty: "2 Years" }, isNew: true, isFeatured: false
    },
    {
        id: "PRD-0007", name: "Decathlon Prime Hiking Boots", category: "Outdoor", brand: "Decathlon", price: 130, discountPrice: 110, rating: "4.7", reviews: 140, stock: 35,
        image: "assets/images/prd-0007.jpg", description: "Waterproof boots with maximum traction.", specifications: { weight: "1.1 kg", material: "Leather/Gore-Tex", warranty: "2 Years" }, isNew: false, isFeatured: true
    },
    {
        id: "PRD-0008", name: "Nike Ultra Swim Goggles", category: "Swimming", brand: "Nike", price: 25, discountPrice: 20, rating: "4.5", reviews: 210, stock: 150,
        image: "assets/images/prd-0008.jpg", description: "Anti-fog lenses with UV protection.", specifications: { weight: "50g", material: "Silicone/Polycarbonate", warranty: "6 Months" }, isNew: false, isFeatured: false
    },
    {
        id: "PRD-0009", name: "Under Armour Max Dumbbells", category: "Gym Equipment", brand: "Under Armour", price: 60, discountPrice: null, rating: "4.9", reviews: 300, stock: 60,
        image: "assets/images/prd-0009.jpg", description: "Hexagonal rubber-coated dumbbells.", specifications: { weight: "10 kg", material: "Cast Iron/Rubber", warranty: "Lifetime" }, isNew: true, isFeatured: true
    },
    {
        id: "PRD-0010", name: "Garmin Pro Sports Watch", category: "Accessories", brand: "Garmin", price: 250, discountPrice: 210, rating: "4.9", reviews: 450, stock: 10,
        image: "assets/images/prd-0010.jpg", description: "Track your performance with precision.", specifications: { weight: "45g", material: "Titanium/Silicone", warranty: "2 Years" }, isNew: true, isFeatured: true
    },
    {
        id: "PRD-0011", name: "Gray-Nicolls Elite Cricket Helmet", category: "Cricket", brand: "Gray-Nicolls", price: 85, discountPrice: 70, rating: "4.6", reviews: 55, stock: 25,
        image: "assets/images/prd-0011.jpg", description: "Titanium grille for maximum protection.", specifications: { weight: "800g", material: "Titanium/Fiberglass", warranty: "1 Year" }, isNew: false, isFeatured: false
    },
    {
        id: "PRD-0012", name: "Puma Dynamic Football Boots", category: "Football", brand: "Puma", price: 140, discountPrice: 115, rating: "4.7", reviews: 110, stock: 30,
        image: "assets/images/prd-0012.jpg", description: "Lightweight boots for explosive speed.", specifications: { weight: "220g", material: "Synthetic", warranty: "1 Year" }, isNew: true, isFeatured: true
    },
    {
        id: "PRD-0013", name: "Yonex Advanced Shuttlecocks", category: "Badminton", brand: "Yonex", price: 35, discountPrice: null, rating: "4.8", reviews: 400, stock: 200,
        image: "assets/images/prd-0013.jpg", description: "Premium goose feather shuttlecocks.", specifications: { weight: "5g", material: "Goose Feather", warranty: "None" }, isNew: false, isFeatured: false
    },
    {
        id: "PRD-0014", name: "Nike Elite Basketball Jersey", category: "Basketball", brand: "Nike", price: 65, discountPrice: 50, rating: "4.5", reviews: 80, stock: 75,
        image: "https://i.pinimg.com/1200x/bf/ab/b9/bfabb936cb1102083cc8f6943d4d4899.jpg", description: "Breathable mesh for peak performance.", specifications: { weight: "150g", material: "Polyester", warranty: "6 Months" }, isNew: true, isFeatured: false
    },
    {
        id: "PRD-0015", name: "Adidas Ultra Resistance Bands", category: "Fitness", brand: "Adidas", price: 20, discountPrice: null, rating: "4.6", reviews: 320, stock: 120,
        image: "https://i.pinimg.com/1200x/9e/c7/6a/9ec76a4c4a23f8617cf9551ef19e87c6.jpg", description: "Set of 5 varying resistance bands.", specifications: { weight: "300g", material: "Latex", warranty: "1 Year" }, isNew: false, isFeatured: false
    },
    {
        id: "PRD-0016", name: "Under Armour Carbon Cycling Shorts", category: "Cycling", brand: "Under Armour", price: 55, discountPrice: 45, rating: "4.7", reviews: 60, stock: 45,
        image: "https://i.pinimg.com/1200x/75/42/0b/75420bcb261117a17e9a0d0e0b3c48f1.jpg", description: "Padded shorts for long rides.", specifications: { weight: "200g", material: "Spandex/Nylon", warranty: "6 Months" }, isNew: false, isFeatured: false
    },
    {
        id: "PRD-0019", name: "Adidas Heavy Barbell", category: "Gym Equipment", brand: "Adidas", price: 120, discountPrice: 100, rating: "4.8", reviews: 150, stock: 25,
        image: "https://i.pinimg.com/736x/59/ab/b1/59abb121d77281dd0e1f3e201e04a242.jpg", description: "Olympic standard 20kg barbell.", specifications: { weight: "20 kg", material: "Steel", warranty: "Lifetime" }, isNew: false, isFeatured: true
    },
    {
        id: "PRD-0020", name: "Nike Prime Duffel Bag", category: "Accessories", brand: "Nike", price: 50, discountPrice: null, rating: "4.7", reviews: 220, stock: 80,
        image: "https://i.pinimg.com/1200x/84/39/db/8439dbc86872cb275973c7c844d3ccec.jpg", description: "Spacious sports bag with shoe compartment.", specifications: { weight: "800g", material: "Polyester", warranty: "1 Year" }, isNew: true, isFeatured: false
    }
];

const mockUsers = [
    { id: "USR-001", name: "John Doe", email: "john@example.com", role: "Customer", status: "Active", joinDate: "2026-07-15" },
    { id: "USR-002", name: "Jane Smith", email: "jane@example.com", role: "Customer", status: "Active", joinDate: "2026-07-18" },
    { id: "USR-003", name: "Admin User", email: "admin@sportspro.design", role: "Admin", status: "Active", joinDate: "2026-01-10" },
    { id: "USR-004", name: "Mike Johnson", email: "mike.j@example.com", role: "Customer", status: "Inactive", joinDate: "2026-08-01" },
    { id: "USR-005", name: "Sarah Williams", email: "sarah.w@example.com", role: "Customer", status: "Active", joinDate: "2026-08-05" }
];

const mockOrders = [
    { id: "ORD-9875", customer: "John Doe", date: "2026-08-07", total: 120.00, status: "Processing", items: 2 },
    { id: "ORD-9874", customer: "Jane Smith", date: "2026-08-06", total: 85.00, status: "Delivered", items: 1 },
    { id: "ORD-9873", customer: "Mike Johnson", date: "2026-08-05", total: 210.00, status: "Delivered", items: 3 },
    { id: "ORD-9872", customer: "Sarah Williams", date: "2026-08-04", total: 45.00, status: "Shipped", items: 1 },
    { id: "ORD-9871", customer: "Alex Mercer", date: "2026-08-02", total: 320.00, status: "Cancelled", items: 4 }
];

const mockEnquiries = [
    { id: "ENQ-1001", date: "2026-08-07", name: "Alex Johnson", email: "alex@example.com", subject: "Bulk Equipment Order", status: "New" },
    { id: "ENQ-1002", date: "2026-08-06", name: "Maria Garcia", email: "maria@example.com", subject: "Treadmill Repair Request", status: "In Progress" },
    { id: "ENQ-1003", date: "2026-08-05", name: "David Chen", email: "david@example.com", subject: "Shipping Delay Inquiry", status: "Closed" }
];

const mockBulkOrders = [
    { id: "BLK-2001", date: "2026-08-07", clubName: "City Strikers FC", contactName: "Tom Hardy", email: "tom@strikers.com", sport: "Football", volume: "50-200 Units", status: "New" },
    { id: "BLK-2002", date: "2026-08-05", clubName: "Westside High", contactName: "Coach Miller", email: "miller@westside.edu", sport: "Athletics", volume: "200+ Units", status: "Quoted" }
];

window.db = {
    products: mockProducts,
    categories: categories,
    brands: brands,
    users: mockUsers,
    orders: mockOrders,
    enquiries: mockEnquiries,
    bulkOrders: mockBulkOrders
};

// 2. Store Manager (Local Storage Wrapper)
window.store = {
    getCart: () => JSON.parse(localStorage.getItem('spx_cart') || '[]'),
    getWishlist: () => JSON.parse(localStorage.getItem('spx_wishlist') || '[]'),
    
    addToCart: (productId, quantity = 1) => {
        const cart = window.store.getCart();
        const existing = cart.find(i => i.productId === productId);
        if (existing) {
            existing.quantity += quantity;
        } else {
            cart.push({ productId, quantity });
        }
        localStorage.setItem('spx_cart', JSON.stringify(cart));
        window.dispatchEvent(new Event('cartUpdated'));
    },
    
    updateCartQuantity: (productId, quantity) => {
        let cart = window.store.getCart();
        if (quantity <= 0) {
            cart = cart.filter(i => i.productId !== productId);
        } else {
            const item = cart.find(i => i.productId === productId);
            if (item) item.quantity = quantity;
        }
        localStorage.setItem('spx_cart', JSON.stringify(cart));
        window.dispatchEvent(new Event('cartUpdated'));
    },
    
    removeFromCart: (productId) => {
        const cart = window.store.getCart().filter(i => i.productId !== productId);
        localStorage.setItem('spx_cart', JSON.stringify(cart));
        window.dispatchEvent(new Event('cartUpdated'));
    },
    
    clearCart: () => {
        localStorage.setItem('spx_cart', '[]');
        window.dispatchEvent(new Event('cartUpdated'));
    },

    toggleWishlist: (productId) => {
        let wishlist = window.store.getWishlist();
        if (wishlist.includes(productId)) {
            wishlist = wishlist.filter(id => id !== productId);
        } else {
            wishlist.push(productId);
        }
        localStorage.setItem('spx_wishlist', JSON.stringify(wishlist));
        window.dispatchEvent(new Event('wishlistUpdated'));
    },
    
    isInWishlist: (productId) => {
        return window.store.getWishlist().includes(productId);
    },

    getBulkOrders: () => {
        let stored = localStorage.getItem('spx_bulk_orders');
        if (!stored) {
            localStorage.setItem('spx_bulk_orders', JSON.stringify(window.db.bulkOrders));
            return window.db.bulkOrders;
        }
        return JSON.parse(stored);
    },
    
    addBulkOrder: (orderData) => {
        const orders = window.store.getBulkOrders();
        orders.unshift(orderData); // Add to beginning
        localStorage.setItem('spx_bulk_orders', JSON.stringify(orders));
    }
};
