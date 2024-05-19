// Make a Smartphone Object:
var smartPhone = {
    brand: "Sony Xperia xz3",
    model: "2019",
    storage: "16gb",
    screenSize: "14 Inches",
    battery: {
        batterySize: "5 Inches",
        batteryPower: "5000mpc",
        batteryTiming: "6hours"
    }
};
// acessing the nested object
console.log(smartPhone.battery.batteryTiming);
