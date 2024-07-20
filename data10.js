const fs=require("fs")


const  addPerson=(id,fname,lname,city,age)=>{
    const allData=LoadInfo()
    const duplicateobjdata=allData.filter((obj)=>{
        return obj.id===id
    })
         
    if(duplicateobjdata.length == 0){
   // console.log(allData)
    allData.push({
        id:id,
        fname:fname,
        lname:lname,
        city:city,
        age:age
    })
    savealldata(allData)
}else{
    console.log("ERROR DUPLICATED DATA")
}
}
////////////////////////////////////////////////////////////////////////////////////////

const LoadInfo=()=>{
    try{
    const datajson=fs.readFileSync("data10.json").toString()
    return JSON.parse(datajson)
    }
    catch{
        return []
    }
    }
///////////////////////////////////////////////////////////////////////////////////////

const savealldata=(allData)=>{
    const Savedatajson=JSON.stringify(allData)
     fs.writeFileSync("data10.json",Savedatajson)
    }

     /////////////////////////////////////////////////////////////////////////////////////
    //DELETE DATA
    const deletedata=(id)=>{
        const allData=LoadInfo()
        const dataKeeped=allData.filter((obj)=>{
            return obj.id!==id
        })
        //console.log(dataKeeped)
        console.log("you sucessful delete item")
        savealldata(dataKeeped)
    }
    ///////////////////////////////////////////////////////////////////////////////////////
    const readdata=(id)=>{
        const allData=LoadInfo()
        const readeditem=allData.find((obj)=>{
            return obj.id==id
        })
if(readeditem){
    console.log(readeditem)

}else{
    console.log("no item founded")
}
    }
   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   const listdata=()=>{
    const allData=LoadInfo();
    allData.forEach((obj) => {
        console.log(obj.fname,obj.city)
    })

   } 
    //addPerson("hossam","kasem")
    module.exports={
        addPerson,
        deletedata,
        listdata
        ,readdata
    }
   