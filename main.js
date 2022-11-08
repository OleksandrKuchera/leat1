/* Сортировка через метод СОРТ
let arr = [
    {firstName: 'Sasha'},
    {firstName: 'Artem'},
    {firstName: 'Zvan'},
    {firstName: 'Goldavan'},
    {firstName: 'Lrisha'},
    {firstName: 'Basha'},
];
arr.sort(function(a, b){
    if(a.firstName > b.firstName){
        return 1;
    }if (a.firstName < b.firstName){
        return -1;
    }if (a.firstName = b.firstName)
    return 0;
})
console.log(arr)
*/
/*Сортировка по останньому елементу
let arr = ['SashG', 'IvaN', 'AntoM', 'GrishZ','LoK']

console.log('До', arr);
let temp;

for(let i = 0 ; i<arr.length -1; i++){
    for(let j = 0; j<arr.length -1; j++){
        let temp1 =arr[j].length-1,
            temp2 = arr[j+1].length -1
        if(arr[j][temp1]>arr[j+1][temp2]){
            temp = arr[j]
            arr[j] = arr[j+1]
            arr[j + 1] = temp  
      
        }
    }
}

console.log('Після', arr)
*/
/*Просту сортировку бульбашкою
let arr = [1, 66, 8, 34, 988, 3, 7, 2, 22]
console.log(arr[0])
console.log('До', arr);
let temp;
for(let i = 0 ; i<arr.length -1; i++){
    for(let j = 0; j<arr.length -1; j++){
        if(arr[0]>arr[0+1]){
            temp = arr[0]
            arr[0] = arr[0+1]
            arr[0 + 1] = temp    
        }   
    }
}
console.log('Після' arr)
*/
/*Сортировку бульбашкою але зворотньому порядку 
let arr = [1, 66, 8, 34, 988, 3, 7, 2, 22]
console.log(arr[0])
console.log('До', arr);
let temp;
for(let i = 0 ; i<arr.length -1; i++){
    for(let j = 0; j<arr.length -1; j++){
        if(arr[0]<arr[0+1]){
            temp = arr[0]
            arr[0] = arr[0+1]
            arr[0 + 1] = temp    
        }   
    }
}
*/
/*
console.log(arr[0])
console.log('До', arr);
let temp;
for(let i = 0 ; i<arr.length -1; i++){
    for(let j = 0; j<arr.length -1; j++){
        if(arr[0]>arr[0+1]){
            temp = arr[0]
            arr[0] = arr[0+1]
            arr[0 + 1] = temp            
        }
    }
}
console.log('Після', arr)
*/