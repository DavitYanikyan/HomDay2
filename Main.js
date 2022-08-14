//homework day 2 
/*function foo(arr){
    let arr2=[];
    for(i=0;i<=arr.length;i++){
        arr2.push(arr[i]);
    }
    alert(arr + " clone is " + arr2)
}

foo([1001,5,5,6,7,9])*/


/*function sumProduct(arr){
    sum=0;
    prod=1;
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
        prod = prod*arr[i];
    }
    alert("sum = "+sum+" prod= " + prod);
}

sumProduct([1,5,2,3]);*/

/*function foo(n,arr){
    let arr2=[];
    for(let i=0;i<=n;i++){
        arr2.push(arr[i])
    }
    alert(arr2);
}

foo(4,[1,5,7,9,6,8,797,9797,9])*/


/*function f1(string){
    console.log(string.split(" "));
}

f1("dhasfha kjashdfk hjfd");*/


/*function type(a){
    if(Array.isArray(a) == true){
        console.log("array")
    }else(console.log(typeof(a)))
}


type(3);*/


/*function miban(){
   console.log(this.miban.name);
}

miban();*/

//homework day3
/*function Employee(lastName, salary, birthday, employmentDate){
    this.lastName = lastName
    this.salary = salary
    this.birthday = birthday
    this.employmentDate = employmentDate

    this.date = new Date()

    this.getExperience = () => {
        return this.date.getFullYear() - this.employmentDate
    }

    this.getExperienceInDays = () => {
        return this.getExperience()*365;
    }

    this.getAge = () => {
        return this.date.getFullYear() - this.birthday
    }

    this.getDaysUntilRectirement = () => {
        return 65 - this.getAge();
    }
}


const employee = new Employee("John" , 5000, 2000 , 2020)

console.log(employee.getExperience(), employee.getExperienceInDays(), employee.getAge(), employee.getDaysUntilRectirement())
*/