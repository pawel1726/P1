document.addEventListener("DOMContentLoaded", function(event) {
	
	var mHPplace = document.querySelector("#monsterHP");
	var mPowerplace = document.querySelector("#monsterPower");
	var mAccuracyplace = document.querySelector("#monsterAccuracy");

	var atkBtn = document.querySelector("#atk");
	

	var mapBox = document.querySelector("#map-box");
	var myX = 0;
	var myY = 0;
	var playerHP = 110;
	var playerPower = 30;
	var playerAcc = 30;

	var pHPplace = document.querySelector("#playerHP");
	var pPowerplace = document.querySelector("#playerPower");
	var pAccuracyplace = document.querySelector("#playerAccuracy"); 

	pHPplace.innerHTML = playerHP;
	pPowerplace.innerHTML = playerPower;
	mAccuracyplace.innerHTML = playerAcc;

	window.addEventListener("keydown", mapArrows, false);
	function mapArrows(e) {
		 var code = e.keyCode;

        switch(code) {
			// Left arrow key pressed
			case 37:
				$('#map-box').css( "background-position-x", "+=10");
				$('#hero').css( "background-position-x", "-20px");
				$('#hero').css( "background-position-y", "0px");
				break;
			// Up Arrow Pressed
			case 38:
				$('#map-box').css( "background-position-y", "+=10");
				$('#hero').css( "background-position-x", "0px");
				$('#hero').css( "background-position-y", "0px");
				function czyWalka(){
					
					var rndm = Math.floor((Math.random() * 10) + 1);
					console.log("czy fajt " + rndm);
					if(rndm > 6) {
						// alert("walka");
						function losujMonster(){
		
							var mHP = Math.floor((Math.random() * 100) + 1);
							var mPower = Math.floor((Math.random() * 100) + 1);
							var mAccu = (Math.random() * 1);
							// console.log(mHP);
							// console.log(mPower);
							// console.log(mAccu);


							var Monster = function(HP, Power, Accuracy){
								this.HP = HP;
								this.Power = Power;
								this.Accuracy = Accuracy;
							}

							var wonsz = new Monster(mHP, mPower, mAccu);
							console.log(wonsz);

							var current_monster_HP = wonsz.HP;
							var current_monster_Power = wonsz.Power;
							var current_monster_Accuracy = wonsz.Accuracy;

							mHPplace.innerHTML = current_monster_HP;
							mPowerplace.innerHTML = current_monster_Power;
							mAccuracyplace.innerHTML = current_monster_Accuracy;

							window.removeEventListener("keydown", mapArrows, false);


							$("#controls").fadeIn();
							$("#monsterImg").fadeIn();
							walka(current_monster_HP, current_monster_Power, current_monster_Accuracy,
								playerHP, playerPower, playerAcc);

						} //end losujMonster

						losujMonster();



					} else {

					}
				}
				czyWalka();
				break;
			// Right Arrow Pressed
			case 39:
				$('#map-box').css( "background-position-x", "-=10" );
				$('#hero').css( "background-position-x", "-20px");
				$('#hero').css( "background-position-y", "-20px");
				break;
			// Down Arrow Pressed
			case 40:
				$('#map-box').css( "background-position-y", "-=10");
				$('#hero').css( "background-position-x", "0");
				$('#hero').css( "background-position-y", "20");
				break;
		}
	}; //switch?

	function walka(Xmhp, mpwr, macc, Xphp, ppwr, pacc){
		
		atkBtn.addEventListener("click", function(event) {
			
			var mhp = mHPplace.innerHTML;
			var php = pHPplace.innerHTML;
			console.log('klikniecie xxxxxxxxxxxxxxxxxxxxxx');
			console.log("monster hp " + mhp);
			console.log("player hp " + php)
			mhp -= playerPower;
			console.log("monster hp po ataku player " + mhp);
			// console.log("player hp po ataku player " + php);
			mHPplace.innerHTML = mhp;
			
			if (mhp <= 0 && php > 0 )  {  //walka sie konczy
				console.log("---------  MHP < 0 i PHP > 0 -----koniec walki");
				console.log("monster hp mniejsze niz zero " + mhp);
				
				mHPplace.innerHTML = "";
				mPowerplace.innerHTML = "";
				mAccuracyplace.innerHTML = "";

				$("#monsterImg").fadeOut();
				$("#controls").fadeOut();
				window.addEventListener("keydown", mapArrows, false);
				playerHP = php;


			} else if (mhp > 0 && php > 0) { //monster atakuje teraz
				console.log("---------  MHP > 0 i PHP > 0 ------ ");
				
				console.log("monster hp wieksze niz zero " + mhp);
				php -= mpwr;
				console.log("player hp po ataku monstera " + php);
				pHPplace.innerHTML = php;

				if(php < 0){
					console.log("---------  MHP > 0 i PHP < 0 ------");
					$("#controls").fadeOut();
					console.log("game over");
				}


			}  


		}); //end click
	} //end walka

}); //DOM loaded end

// transform: translate(50px, 100px);
// background-position: 50px 100px; 