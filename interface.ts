interface person {
    names:string,
    age:number,
    isGood?:boolean
}

interface developer extends person {
    language:string,
    codeEditor:string,
    project:number
}

const rz:developer= {
    language:"js & c++",
    codeEditor:"vsCode",
    project:45,
    names:"riaz",
    age:30
}
for(const r in rz ){
    console.log( r)
}