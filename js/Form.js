class Form{
    constructor(){

    }
    display(){
        var title=createElement('h1');
        title.html("Car Racing Game");
        title.position(130,200);
        var input=createInput("name");
        var button =createButton("play");
        var greeting=createElement("h3");

        input.position(130,250)
        button.position(200,250)

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name=input.value();

            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            
            greeting.html("Hello"+name);
            greeting.position(130,250);
        })
    }

}