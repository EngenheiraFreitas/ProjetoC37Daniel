class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
  // escreva aqui o código para ocultar os elementos da questão
      question.hide();
    // escreva o código aqui para mudar a cor de fundo
      background("Yellow");
    // escreva o código para exibir um cabeçalho indicando o resultado do Quiz
      textSize(30);
      text("Resultado do Questionário", 120, 100);
      text("-------------------------",320, 65);

    // chame getContestantInfo () aqui
      Contestant.getPlayerInfo();

    // escreva a condição para verificar se contestantInfor não é indefinido
      if(allContestants !== undefined){
        debbuger;
        var display_Answers = 230;
        fill("Blue");
        textSize(20);
        text("Jogador que respondeu a resposta correta é destacado na cor verde", 130, 230);
        for(var plr in allContestants){
          debugger;
           var corretAns = "2";
           if(correctAns === allContestants[plr].answer)
            fill("Green");
           else
            fill("red");

            display_Answers+=30;
            textSize(20);
            text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
        }
      }

    // escreva aqui o código para adicionar uma nota

    // escreva o código para destacar o competidor que respondeu corretamente
    
     
    }
  }


