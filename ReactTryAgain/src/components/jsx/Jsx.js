const Jsx = () =>{

const users = {
name:"Refik",
surname:"Gulak",
age:46,
email:"rg111@gmail.com",
phone:12345678

}

 return (
   <div>
     <div> 
       Hi, I'm {users.name + " " + users.surname}. My age is {users.age}.
     </div>
     <div>
      My email is {users.email}.
     </div>
   </div>
 );
}

export default Jsx;
