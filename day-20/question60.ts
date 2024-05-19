// Self Running user Profile


// created a self running user setup that can setup by itself & tell us about user name & age
let profile: any = (function () {
    let profile: any = {
        name: "Abishai Kashif",
        age: 17
    };
    return profile;
})();



console.log(profile);
