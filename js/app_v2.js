document.addEventListener("DOMContentLoaded", function(event) {
	
	var mHPplace = document.querySelector("#monsterHP");
	var mPowerplace = document.querySelector("#monsterPower");
	var mAccuracyplace = document.querySelector("#monsterAccuracy");

	var atkBtn = document.querySelector("#atk");

	var $inventory = $("#inventory");
	
	$inventory.on( "click", "div", function( e ) {
    	e.preventDefault();
    	if( $( this ).hasClass("med") ) {
    		playerHP += 50;
    		pHPplace.innerHTML = playerHP;
    		$(this).remove();
    	} else if ( $( this ).hasClass("point") ) {}
    	//console.log( $( this ).text() );
	});




	var xplace = document.querySelector("#map-x");
	var yplace = document.querySelector("#map-y");

	var mapBox = document.querySelector("#map-box");
	var myX = 14;
	var myY = 3;

	var miniX = 2;
	var miniY = 1;

	var playerHP = 110;
	var playerPower = 30;
	var playerAcc = 30;

	var pHPplace = document.querySelector("#playerHP");
	var pPowerplace = document.querySelector("#playerPower");
	var pAccuracyplace = document.querySelector("#playerAccuracy"); 

	pHPplace.innerHTML = playerHP;
	pPowerplace.innerHTML = playerPower;
	pAccuracyplace.innerHTML = playerAcc;

	window.addEventListener("keydown", mapArrows, false);
	function mapArrows(e) {
		 var code = e.keyCode;

        switch(code) {
			// Left arrow key pressed
			case 37:
				miniX -= 1;
				console.log(miniX);
				if(miniX === 1){
					$('#map-box').css( "background-position-x", "+=20");
					$('#hero').css( "background-position-x", "-20px");
					$('#hero').css( "background-position-y", "0px");
					console.log("miniX rowne 1 wiec tylko mini");
				}
				else if (miniX === 0){
					if ( $('.active').prev().hasClass('blk') === true ) {
						console.log('zablokowane');
						miniX = 1;
					} else {
						$('#map-box').css( "background-position-x", "+=20");
						$('#hero').css( "background-position-x", "-20px");
						$('#hero').css( "background-position-y", "0px");
						myX -= 1;
						xplace.innerHTML = myX;
						$('.active').prev().addClass('active');
						$('.active').next().removeClass('active');
						miniX = 2;
						console.log("miniX rowne 0 wiec miniXto 2");
					}

				} //else if miniX=0


				break;
			// Up Arrow Pressed
			case 38:
				
				miniY -= 1;
				console.log(miniY);
				if(miniY === 1){
					$('#map-box').css( "background-position-y", "+=20");
					$('#hero').css( "background-position-x", "0px");
					$('#hero').css( "background-position-y", "0px");
					console.log("miniX rowne 1 wiec tylko mini");
					czyWalka();
				}
				else if (miniY === 0){
					if ( $('tr').eq(myY - 1).children().eq(myX).hasClass('blk') ) {
						console.log('zablokowane');
						miniY = 1;
					} else {
						$('#map-box').css( "background-position-y", "+=20");
						$('#hero').css( "background-position-x", "0px");
						$('#hero').css( "background-position-y", "0px");

						$('tr').eq(myY).children().eq(myX).removeClass('active');

						myY -= 1;
						yplace.innerHTML = myY;
						$('tr').eq(myY).children().eq(myX).addClass('active');
						miniY = 2;
						console.log("miniX rowne 0 wiec miniXto 2");
						czyWalka();
					}

				} //else if miniY=3

				
				break;
			// Right Arrow Pressed
			case 39:
				miniX += 1;
				console.log(miniX);
				if(miniX === 2){
					$('#map-box').css( "background-position-x", "-=20" );
					$('#hero').css( "background-position-x", "-20px");
					$('#hero').css( "background-position-y", "-20px");
					console.log("miniX rowne 1 wiec tylko mini");
				}
				else if (miniX === 3){
					if ( $('.active').next().hasClass('blk') === true ) {
						console.log('zablokowane');
						miniX = 2;
					} else {
						$('#map-box').css( "background-position-x", "-=20" );
						$('#hero').css( "background-position-x", "-20px");
						$('#hero').css( "background-position-y", "-20px");
						myX += 1;
						xplace.innerHTML = myX;
						$('.active').next().addClass('active');
						$('.active').prev().removeClass('active');
						miniX = 1;
						console.log("miniX rowne 0 wiec miniXto 2");
					}

				} //else if miniX=3

				break;
			// Down Arrow Pressed
			case 40:
				
				miniY += 1;
				console.log(miniY);
				if(miniY === 2){
					$('#map-box').css( "background-position-y", "-=20");
					$('#hero').css( "background-position-x", "-40px");
					$('#hero').css( "background-position-y", "-20px");
					console.log("miniX rowne 1 wiec tylko mini");
				}
				else if (miniY === 3){
					if ( $('tr').eq(myY + 1).children().eq(myX).hasClass('blk') ) {
						console.log('zablokowane');
						miniY = 2;
					} else {
						$('#map-box').css( "background-position-y", "-=20");
						$('#hero').css( "background-position-x", "-40px");
						$('#hero').css( "background-position-y", "-20px");

						$('tr').eq(myY).children().eq(myX).removeClass('active');

						myY += 1;
						yplace.innerHTML = myY;
						$('tr').eq(myY).children().eq(myX).addClass('active');
						miniY = 1;
						console.log("miniX rowne 0 wiec miniXto 2");
					}

				} //else if miniY=3



				break;
		}
	}; //switch?

	
		
		atkBtn.addEventListener("click", function(event) {
			
			 mhp = mHPplace.innerHTML;
			 mpwr = mPowerplace.innerHTML;
			 // php = pHPplace.innerHTML;
			 playerPower = pPowerplace.innerHTML;
			

			console.log('klikniecie_v2 xxxxxxxxxxxxxxxxxxxxxx');
			console.log("monster hp " + mhp);
			console.log("player hp " + playerHP)
			mhp -= playerPower;
			console.log("monster hp po ataku player " + mhp);
			// console.log("player hp po ataku player " + php);
			mHPplace.innerHTML = mhp;
			
			if (mhp <= 0 && playerHP > 0 )  {  //walka sie konczy
				console.log("---------  MHP < 0 i PHP > 0 -----koniec walki");
				console.log("monster hp mniejsze niz zero " + mhp);
				
				mHPplace.innerHTML = "";
				mPowerplace.innerHTML = "";
				mAccuracyplace.innerHTML = "";

				$("#monsterImg").fadeOut();
				$("#controls").fadeOut();

				czyItem();

				window.addEventListener("keydown", mapArrows, false);
				// playerHP = php;


			} else if (mhp > 0 && playerHP > 0) { //monster atakuje teraz
				console.log("---------  MHP > 0 i PHP > 0 ------ ");
				
				console.log("monster hp wieksze niz zero " + mhp);
				playerHP -= mpwr;
				console.log("player hp po ataku monstera " + playerHP);
				pHPplace.innerHTML = playerHP;

				if(playerHP < 0){
					console.log("---------  MHP > 0 i PHP < 0 ------");
					$("#controls").fadeOut();
					console.log("game over");
				} //nested if


			}  // else if


		}); //end click

	



		function czyWalka(){
					
					var rndm = Math.floor((Math.random() * 10) + 1);
					console.log("czy fajt " + rndm);
					if(rndm > 6) {
						
						function losujMonster(){
		
							var mHP = Math.floor((Math.random() * 100) + 1);
							var mPower = Math.floor((Math.random() * 100) + 1);
							var mAccu = (Math.random() * 1);

							var Monster = function(HP, Power, Accuracy){
								this.HP = HP;
								this.Power = Power;
								this.Accuracy = Accuracy;
							}

							var wonsz = new Monster(mHP, mPower, mAccu);
							console.log(wonsz);

							// var current_monster_HP = wonsz.HP;
							// var current_monster_Power = wonsz.Power;
							// var current_monster_Accuracy = wonsz.Accuracy;

							mHPplace.innerHTML = wonsz.HP;
							mPowerplace.innerHTML = wonsz.Power;
							mAccuracyplace.innerHTML = wonsz.Accuracy;

							window.removeEventListener("keydown", mapArrows, false);

							$("#controls").fadeIn();
							$("#monsterImg").fadeIn();
							
						} //end losujMonster

						losujMonster();

					} //end czy walka
	} 


		function czyItem(){
					
					var rndm2 = Math.floor((Math.random() * 10) + 1);
					console.log("czy item " + rndm2);

					if(rndm2 > 1) {
						console.log("wypadnie");
						var item = document.createElement("div");
						// var t = document.createTextNode("med");
						item.className = "item med";
						

						// item.appendChild(t);
						$inventory.append(item); 

					} 
				} //czyItem

}); //DOM loaded end

