// Making a Objects keys flexible
 
type callbackType = (value: any) => void;


// making a func that makes an object dynamically based on provided keys and values
function makeDynamicObject(keys: string[] , values: any[]) :any {
    if (keys.length === values.length) {
        let dynamicObj: any = {};

        keys.forEach((key: string ,idx: number) => {
            dynamicObj[key] = values[idx];
        })

        return dynamicObj;
    } else {
        throw new Error("The number of keys and values are not equal");
    };
};

// invoking the function to make a dynamic object based on provided keys and values
let person: any = makeDynamicObject(["name" ,"age"] ,["Abishai" ,17]);
console.log(person);    

// see the flexiblity of the function by passing in more keys and values
let student: any = makeDynamicObject(["fullName" ,"age" ,"education" ,"rollNumber"] ,["Abishai Kashif" ,17 ,"MSDS" ,1453]);
console.log(student);
