pragma solidity ^0.4.18;

contract Coursetro {
    
   string fName;
   string fileAsString;
   
   function setInstructor(string _fName, string fileAsString) public {
       fName = _fName;
       fileAsString = fileAsString;
   }
    
}