class Quiz
{
    constructor(){}

    getState()
    {
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function (data){
        gameState = data.val();
      })
    }

    updateState(state)
    {
      database.ref('/').update({
      gameState: state
      });
    }

    play()
    {
      //quiz.hide();
      backgroundColor = "yellow";
      let resultTitle = createElement("h1");
      resultTitle.html("RESULTS");
      resultTitle.position(100,10);
      Person.getPersoninfo();
      if(allPeople !== undefined)
      {
        var display_pos = 130;
         var correctAnswer = 2;
    for(var ppl in allPeople){
      if (correctAnswer === allPeople[ppl].answer)
        fill('lime')
      else
        fill('orangered');
      textSize(15);
      text(allPeople[ppl].name + ": " + allPlayers[ppl].answer, 120,display_pos);
    }
  }
}

async start(){
    if(gameState === 0){
        contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      quiz = new Question()
      quiz.display();
    }
  }
}