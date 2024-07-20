
const fs = require("fs")

    fs.writeFileSync( "data1.txt" , "marwa kasem" )

     console.log(fs.readFileSync("data1.txt").toString())

 fs.appendFileSync("data1.txt" , " /  hossam kasem")

 console.log(fs.readFileSync("data1.txt").toString())

////////////////////////////////////////////////////////////////////////////////////////
 
 const x = require("./allData")

 console.log(x.fname)
  console.log(x.lname)
   console.log(x.city)
  console.log(x.fun1(8,6))

//////////////////////////////////////////////////////////////////////////////////////////////////

 // NPM   Node package manager :

 const  validator = require("validator")

 //    console.log(validator.isEmail("ahmed"))
 
 console.log(validator.isEmail("marwakasem@gmail.com"))
 ///////////////////////////////////////////////////////////////
 console.log(process.argv)
 console.log(process.argv[2])
 ///////////////////////////////////////////////////////////////
 /*const temp=process.argv[2]
 if(temp=="add"){
    console.log("you have added an item")
 }
 else if(temp=="delete"){
    console.log("you have deleted an item")
 }
 else{
    console.log("ERROR")
 }*/
const datat10=require("./data10")
  const yargs=require("yargs");

  yargs.command({
   command:"add",
   describe:"add an item",
   builder:{
      fname:{
         describe:" this is the first name desc",
         demandOption:true,
         type:"string"
      },
      lname:{
         describe:" this is the last name desc",
         demandOption:true,
         type:"string"
      }

   },
   handler:(x)=>{
      //console.log("you have already add an item")
//console.log(x.fname,x.lname,)
datat10.addPerson(x.id,x.fname,x.lname,x.city,x.age)
   }
  })
  //console.log(yargs.argv)

  yargs.command({
   command:"delete",
   describe:"delete an item",
   handler:(x)=>{
      //console.log("you have already delete an item")
      datat10.deletedata(x.id)
      
   }
  })
  yargs.command({
   command:"read",
   describe:"read an item",
   builder:{
      id:{
         describe:" this is id of readed item desc",
         demandOption:true,
         type:"string"
      }

   },
   handler:(x)=>{
      //console.log("you have already add an item")
//console.log(x.fname,x.lname,)
datat10.readdata(x.id)
   }
  })
  //////////////////////////////////////////////////////////////////////
  yargs.command({
   command:"list",
   describe:"list an item",
   handler:()=>{
      //console.log("you have already delete an item")
      datat10.listdata()
      
   }
  })
yargs.parse()
  //console.log(yargs.argv)
/*const person1={
   fname:"marwa",
   lname:"kasem",
   city:"fayoum"
}

const personjson=JSON.stringify(person1)
console.log(personjson)
const personobj=JSON.parse(personjson)
console.log(personobj)
fs.writeFileSync( "data10.json" ,personjson)
*/
