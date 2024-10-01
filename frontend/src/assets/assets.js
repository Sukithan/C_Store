import img1 from './1.jpg';
import img2 from './2.jpeg';
import img3 from './3.jpeg';
import img4 from './4.jpeg';
import Storelogo from './Logo.jpeg'
import drop_down_arrow from "./drop-down-arrow.png"
import Camera from "./Camera.jpg"
import Earpods from "./Earpods.jpeg"
import Fan from "./Fan.jpeg"
import HeadSets from "./HeadSets.jpg"
import Ipad from "./Ipad.jpeg"
import Laptops from "./Laptops.jpg"
import Phone from "./Phone.jpg"
import Television from "./Televison.jpg"
import ToyCar from "./ToyCar.jpeg"
import ContactUs from "./contactUs.jpg"
import Electric_car from "./Electriic car.jpg"
import Samsung_S24_Ultra from "./Samsung S24 Ultra.jpg"
import I_watch from "./I-watch.jpg"
import Login_bg from "./Login_bg.jpg"
import BluetoothSpeaker from "./BluetoothSpeaker.jpeg"
import Smartwatch from "./Smartwatch.jpeg"
import Star from "./star.png"
import Rating from "./rating.png"
import ProfilePicIcon from "./ProfilePicIcon.png"

export const assets = {
    img1, 
    img2,
    img3,
    img4,
    Storelogo,
    drop_down_arrow,
    Camera,
    Earpods,
    Fan,
    HeadSets,
    Ipad,
    Laptops,
    Phone,
    Television,
    ToyCar,
    ContactUs,
    Electric_car,
    Samsung_S24_Ultra,
    I_watch,
    Login_bg,
    BluetoothSpeaker,
    Smartwatch,
    Star,
    Rating,
    ProfilePicIcon,
    
};

export const products = [
    {
        _id: "1",
        name: "Camera",
        image: [Camera],
        category: "Handheld",
        subCategory: "Entertain",
    },
    {
        _id: "2",
        name: "Ear-Pods",
        image: [Earpods],
        category: "Handheld",
        subCategory: "Study",
    },
    {
        _id: "3",
        name: "Table Fan",
        image: [Fan],
        category: "Home",
        subCategory: "DailyUse",
    },
    {
        _id: "4",
        name: "Headsets",
        image: [HeadSets],
        category: "Handheld",
        subCategory: "Entertain",
    },
    {
        _id: "5",
        name: "Ipad",
        image: [Ipad],
        category: "Handheld",
        subCategory: "Study",
    },
    {
        _id: "6",
        name: "Laptops",
        image: [Laptops],
        category: "Handheld",
        subCategory: "Study",
    },
    {
        _id: "7",
        name: "Phone",
        image: [Phone],
        category: "Handheld",
        subCategory: "DailyUse",
    },
    {
        _id: "8",
        name: "Television",
        image: [Television],
        category: "Home",
        subCategory: "DailyUse",
    },
    {
        _id: "9",
        name: "Electric Car",
        image: [ToyCar],
        category: "ElectricToys",
        subCategory: "Entertain",
    },
    {
        _id: "10",
        name: "Bluetooth Speaker",
        image: [BluetoothSpeaker],
        category: "Handheld",
        subCategory: "Entertain",
    },
];


export const productCategoriesOne = [
    // Cameras
    {
        _id: "001",
        name: "Digital Camera",
        description: "A high-resolution digital camera equipped with advanced features such as optical zoom and image stabilization, perfect for capturing detailed images and videos. Ideal for photography enthusiasts and professionals looking to enhance their skills.",
        price: 100,
        image: [Camera],
        count:20,
    },
    {
        _id: "002",
        name: "DSLR Camera",
        description: "A professional-grade DSLR camera that offers interchangeable lenses and superior image quality. With manual controls and fast autofocus, it’s designed for serious photographers who want to capture stunning images in any situation.",
        price: 500,
        image: [Camera],
        count:10,
    },
    {
        _id: "003",
        name: "Action Camera",
        description: "A compact action camera that captures high-definition video and photos in extreme conditions. With its waterproof design and wide-angle lens, it’s perfect for outdoor adventures, sports, and travel.",
        price: 250,
        image: [Camera],
        count:15,
    },
    {
        _id: "004",
        name: "Instant Camera",
        description: "A fun instant camera that allows you to capture moments and print photos immediately. Perfect for parties and events, this camera adds a nostalgic touch to your photography with its classic polaroid-style prints.",
        price: 120,
        image: [Camera],
        count:23,
    },
];

export const productCategoriesTwo = [
    // Ear-Pods
    {
        _id: "005",
        name: "Wireless Ear-Pods",
        description: "Wireless ear-pods designed with high-quality sound and a comfortable fit.",
        price: 200,
        image: [Earpods],
        count: 10,
    },
    {
        _id: "006",
        name: "Noise-Cancelling Ear-Pods",
        description: "Ear-pods featuring advanced noise cancellation technology.",
        price: 300,
        image: [Earpods],
        count: 15,
    },
    {
        _id: "007",
        name: "Sport Ear-Pods",
        description: "Sweat-resistant ear-pods designed for active lifestyles.",
        price: 150,
        image: [Earpods],
        count: 20,
    },
    {
        _id: "008",
        name: "Bluetooth Ear-Pods",
        description: "Bluetooth-enabled ear-pods that offer seamless connectivity.",
        price: 180,
        image: [Earpods],
        count: 25,
    },
];

export const productCategoriesThree = [
    // Table Fans
    {
        _id: "009",
        name: "Desk Fan",
        description: "A compact and efficient desk fan for personal cooling.",
        price: 50,
        image: [Fan],
        count: 30,
    },
    {
        _id: "010",
        name: "Tower Fan",
        description: "A tall, stylish tower fan that offers powerful airflow.",
        price: 80,
        image: [Fan],
        count: 25,
    },
    {
        _id: "011",
        name: "Pedestal Fan",
        description: "A height-adjustable pedestal fan for larger rooms.",
        price: 70,
        image: [Fan],
        count: 40,
    },
    {
        _id: "012",
        name: "Wall-Mounted Fan",
        description: "A space-saving wall-mounted fan with quiet operation.",
        price: 60,
        image: [Fan],
        count: 35,
    },
];

export const productCategoriesFour = [
    // Headsets
    {
        _id: "013",
        name: "Gaming Headset",
        description: "Comfortable headsets designed for immersive gaming.",
        price: 110,
        image: [HeadSets],
        count: 15,
    },
    {
        _id: "014",
        name: "Wireless Headset",
        description: "Wireless headsets with exceptional sound quality.",
        price: 150,
        image: [HeadSets],
        count: 20,
    },
    {
        _id: "015",
        name: "Office Headset",
        description: "Professional headsets designed for office use.",
        price: 90,
        image: [HeadSets],
        count: 30,
    },
    {
        _id: "016",
        name: "Studio Headset",
        description: "High-fidelity headsets for music production.",
        price: 200,
        image: [HeadSets],
        count: 10,
    },
];

export const productCategoriesFive = [
    // iPads
    {
        _id: "017",
        name: "iPad Mini",
        description: "A compact tablet with a high-resolution display.",
        price: 400,
        image: [Ipad],
        count: 50,
    },
    {
        _id: "018",
        name: "iPad Air",
        description: "A lightweight tablet with a stunning Retina display.",
        price: 600,
        image: [Ipad],
        count: 45,
    },
    {
        _id: "019",
        name: "iPad Pro",
        description: "A high-performance tablet for professionals.",
        price: 800,
        image: [Ipad],
        count: 35,
    },
    {
        _id: "020",
        name: "iPad Classic",
        description: "The original iPad with essential features.",
        price: 300,
        image: [Ipad],
        count: 60,
    },
];

export const productCategoriesSix = [
    // Laptops
    {
        _id: "021",
        name: "Gaming Laptop",
        description: "A high-performance laptop for gaming.",
        price: 1500,
        image: [Laptops],
        count: 10,
    },
    {
        _id: "022",
        name: "Ultrabook",
        description: "A sleek and lightweight laptop for professionals.",
        price: 1200,
        image: [Laptops],
        count: 20,
    },
    {
        _id: "023",
        name: "Business Laptop",
        description: "A reliable laptop designed for business use.",
        price: 1000,
        image: [Laptops],
        count: 30,
    },
    {
        _id: "024",
        name: "2-in-1 Laptop",
        description: "A versatile laptop with touchscreen functionality.",
        price: 900,
        image: [Laptops],
        count: 25,
    },
];

export const productCategoriesSeven = [
    // Phones
    {
        _id: "025",
        name: "Smartphone A",
        description: "A modern smartphone with a powerful camera system.",
        price: 700,
        image: [Phone],
        count: 50,
    },
    {
        _id: "026",
        name: "Smartphone B",
        description: "A budget-friendly smartphone with essential features.",
        price: 300,
        image: [Phone],
        count: 60,
    },
    {
        _id: "027",
        name: "Smartphone C",
        description: "A smartphone with a long battery life and powerful camera.",
        price: 500,
        image: [Phone],
        count: 40,
    },
    {
        _id: "028",
        name: "Smartphone D",
        description: "A premium smartphone with cutting-edge technology.",
        price: 1000,
        image: [Phone],
        count: 30,
    },
];

export const productCategoriesEight = [
    // Televisions
    {
        _id: "029",
        name: "LED TV",
        description: "A high-definition LED television with vibrant colors.",
        price: 400,
        image: [Television],
        count: 20,
    },
    {
        _id: "030",
        name: "Smart TV",
        description: "A smart television with built-in streaming capabilities.",
        price: 600,
        image: [Television],
        count: 15,
    },
    {
        _id: "031",
        name: "4K Ultra HD TV",
        description: "A 4K Ultra HD television for an immersive experience.",
        price: 800,
        image: [Television],
        count: 10,
    },
    {
        _id: "032",
        name: "OLED TV",
        description: "An OLED television with superior contrast and color accuracy.",
        price: 1200,
        image: [Television],
        count: 5,
    },
];

export const productCategoriesNine = [
    // Toy Cars
    {
        _id: "041",
        name: "Electric Toy Car",
        description: "A battery-powered electric toy car for kids with realistic features.",
        price: 300,
        image: [ToyCar],
        count: 25,
    },
    {
        _id: "042",
        name: "Remote Control Car",
        description: "A fast remote control car with excellent handling for outdoor play.",
        price: 150,
        image: [ToyCar],
        count: 40,
    },
    {
        _id: "043",
        name: "Die-Cast Model Car",
        description: "A highly detailed die-cast model car, perfect for collectors.",
        price: 50,
        image: [ToyCar],
        count: 60,
    },
    {
        _id: "044",
        name: "Racing Toy Car Set",
        description: "A complete racing toy car set with multiple tracks and cars.",
        price: 200,
        image: [ToyCar],
        count: 10,
    },
];

export const productCategoriesTen = [
    // Bluetooth Speakers
    {
        _id: "037",
        name: "Portable Bluetooth Speaker",
        description: "A portable Bluetooth speaker with long battery life.",
        price: 150,
        image: [BluetoothSpeaker],
        count: 50,
    },
    {
        _id: "038",
        name: "Smart Bluetooth Speaker",
        description: "A smart Bluetooth speaker with voice assistant capabilities.",
        price: 250,
        image: [BluetoothSpeaker],
        count: 40,
    },
    {
        _id: "039",
        name: "Waterproof Bluetooth Speaker",
        description: "A waterproof Bluetooth speaker for outdoor use.",
        price: 200,
        image: [BluetoothSpeaker],
        count: 30,
    },
    {
        _id: "040",
        name: "High-Fidelity Bluetooth Speaker",
        description: "A high-fidelity Bluetooth speaker with premium sound.",
        price: 400,
        image: [BluetoothSpeaker],
        count: 10,
    },
];
