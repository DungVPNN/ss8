type RequiredProps = {
prop1: number;
prop2: string;
prop3: boolean;
};
function isValidObject(obj: any): boolean {
let typedObj = obj as RequiredProps;
return (
    typeof typedObj.prop1 === 'number' &&
    typeof typedObj.prop2 === 'string' &&
    typeof typedObj.prop3 === 'boolean'
);
}
let validObj = { prop1: 123, prop2: "hello", prop3: true };
console.log(isValidObject(validObj)); 
let invalidObj = { prop1: 123, prop2: "hello", prop3: "true" };
console.log(isValidObject(invalidObj)); 