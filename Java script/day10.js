//class
 //object 
 //method 
  

 class gun {

    model(){console.log("akm");}
    mag(){console.log("quick mag")}
    amo(){console.log("7.62");}
    scope(){console.log("8x");}
 }

 const output = new gun();
 output.model();
 output.amo();
 output.mag();
 output.scope();
 

 //class construction

 class room{
   constructor (ac, light, board, door, screeen , beanch){
      this.ac=ac;
      this.light=light;
      this.board=board;
      this.door=door;
      this.screeen=screeen;
      this.beanch=beanch;}
      
     classroom (){
      console.log( `i need  ${this.light} light \n i need ${this.ac} degree rotate \n i need ${this.board} to be clean \n i need ${this.door} to be open \n i need ${this.screeen} to be closed \n i need ${this.beanch} to be arranged `)
      
         
      }
     }
const finalclass  = new room("white color" , "60", "black","wood","cotton", "steel");
   finalclass.classroom();
   
