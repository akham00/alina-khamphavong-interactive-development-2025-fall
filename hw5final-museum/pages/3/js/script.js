let MyString = 'test';


let MyStringArray = MyString.split("LinkMark");
console.log(MyStringArray);
MyStringArray.forEach(function(individualString, MyStringArrayindex){
    /* console.log(individualString); */
    if(individualString.startsWith("<a ") && individualString.endsWith("</a>")){
        console.log(individualString);
        let separators = ['</a>', '<a ', 'href="', '"', '>'];
        
        let AElement = individualString;
       
        console.log(AElement);
        separators.forEach(function(separator, index){
            console.log(AElement);
            AElement = AElement.replace(separator, "/Separator/");
            console.log(AElement);
        });
        
        let AElementArray = AElement.split("/Separator/");
        console.log(AElementArray); 
        
        AElementArray = AElementArray.filter(function(el){
            return el !== "";
        });
        
        console.log(AElementArray);
        
        MyStringArray[MyStringArrayindex] = AElementArray;
        console.log(MyStringArray);
    }; /* */
    
});


let PartsIteration = 0;
let CharactersIteration = 0;
let PartsArrayLength = MyStringArray.length;
let CurrentPartTotalCharacterNumber;
function typenext(){
    // console.log(MyStringArray[PartsIteration]); 
    let partType = typeof(MyStringArray[PartsIteration]);
    if(partType == "string"){
        CurrentPartTotalCharacterNumber = MyStringArray[PartsIteration].length;
        // console.log("string"); 
        $("#typewriting-target").append(MyStringArray[PartsIteration][CharactersIteration]);
        CharactersIteration = CharactersIteration + 1;
        if(CharactersIteration == CurrentPartTotalCharacterNumber){
            PartsIteration = PartsIteration + 1;
            CharactersIteration = 0;
        }
    }else if(partType == "object"){
        if(CharactersIteration == 0){
            CurrentPartTotalCharacterNumber = MyStringArray[PartsIteration][1].length;
            console.log(MyStringArray[PartsIteration][0]);
            console.log("appdendlink");
            $("#typewriting-target").append('<a href="' + MyStringArray[PartsIteration][0] + '" class="link' + PartsIteration + '"></a>');
            $(".link" + PartsIteration).append(MyStringArray[PartsIteration][1][CharactersIteration]);
            CharactersIteration = CharactersIteration + 1;
            if(CharactersIteration == CurrentPartTotalCharacterNumber){
                PartsIteration = PartsIteration + 1;
                CharactersIteration = 0;
            }
        }else{
            $(".link" + PartsIteration).append(MyStringArray[PartsIteration][1][CharactersIteration]);
            CharactersIteration = CharactersIteration + 1;
            if(CharactersIteration == CurrentPartTotalCharacterNumber){
                PartsIteration = PartsIteration + 1;
                CharactersIteration = 0;
            }
        }
        console.log("object");
    }
    
    if(PartsIteration < PartsArrayLength){
        let typeTimeout = setTimeout(function(){typenext()},100);
    }
    
    console.log("one iteration finished");
};
typenext();

