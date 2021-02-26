class Question 
{
    constructor()
    {
        this.title = createElement("h2");
        this.question = createElement("h2");
        this.option1 = createElement("h2");
        this.option2 = createElement("h2");
        this.option3 = createElement("h2");
        this.option4 = createElement("h2");
        this.button = createButton("Submit");
        this.input1 = createInput("Your name?");
        this.input2 = createInput("Please, Type your answer");
        this.yeet = createElement("h2");
        this.correct = createElement("h2")
    }

    hide()
    {
        this.title.hide();
        this.question.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
    }


    display()
    {
       this.title.html("@DeeeeeP Learning");
       this.title.position(180,0);
       this.title.style('color:white');
       // this.title.size(1);

       // Question
       this.question.html("Jack ___________ English, Spanish and a bit of French.");
       this.question.position(180, 420);

       // Option1
       this.option1.html("1: Speak");
       this.option1.position(200, 480);
       // this.option1.style('color:lightpink');
       
       // Option2
       this.option2.html("2: Speaks");
       this.option2.position(200, 540);
       // this.option2.style('color:lightpink');
       
       // Option3
       this.option3.html("3: Keeps speaking");
       this.option3.position(200, 600);
       // this.option3.style('color:lightpink');
       
       // Option4
       this.option4.html("4: Is speaking");
       this.option4.position(200, 660);
       // this.option4.style('color:lightpink');

       // Input1
       this.input1.position(280, 280);
       this.input1.size(450, 60);
       
       // Input2
       this.input2.position(340, 825);
       this.input2.size(300, 60);
       
       // Button
       this.button.position(425, 950);
       this.button.size(150, 50);
       this.button.style('size:100');
       this.button.mousePressed(()=>{
       // Hide data 
       this.title.hide();
       this.input1.hide();
       this.input2.hide();
       this.button.hide();
       contestant.answer = this.input2.value();
       contestant.name = this.input1.value();
       contestantCount+=1;
       contestant.index = contestantCount;
       contestant.update();
       contestant.updateCount(contestantCount);
       this.yeet.html("Your choice: " + contestant.answer)
       this.yeet.position(230, 300);
       if(contestant.answer==="2")
       {
        fill('lime');
        this.correct.html("CORRECT!!!");
        this.correct.position(300,330);
       }
      else
      {
        fill('red')
        this.correct.html("WRONG!!!");
        this.correct.position(300,330);
      }
    });




}
}