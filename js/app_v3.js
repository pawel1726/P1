document.addEventListener("DOMContentLoaded", function(event) {
	
	var intro = document.querySelector("#intro");
	$("#start_btn").delay(20000).show(0);
	$("#start_btn").on("click", function(event) {
		$(this).fadeOut(1000);
		$("#loading").show();

		var images = [];
		function preload() {
    		for (var i = 0; i < arguments.length; i++) {
        		images[i] = new Image();
        		images[i].src = preload.arguments[i];
    		}
    		
    		intro.style.display = "none";

		}

		//-- usage --//
	preload(
    	"img/boss.png",
    	"img/hero.png",
    	"img/hero_big_atk.png",
    	"img/hero_big.png",
    	"img/hppoint.png",
    	"img/hppoint_over.png",
    	"img/invent_bg.png",
    	"img/map2.png",
    	"img/medi.png",
    	"img/medi_over.png",
    	"img/powerpoint.png",
    	"img/powerpoint_over.png",
    	"img/s1.jpg",
    	"img/s2.jpg",
    	"img/s3.jpg",
    	"img/s4.jpg",
    	"img/skorio_ss.png",
    	"img/skoriodsrt_ss.png",
    	"img/snek_ss.png",
    	"img/roach_ss.png",
    	"img/special.jpg",
    	"img/tlo.jpg"
	)

	}); //start_btn

	var mHPplace = document.querySelector("#monsterHP");
	var mPowerplace = document.querySelector("#monsterPower");
	// var mAccuracyplace = document.querySelector("#monsterAccuracy");

	var atkBtn = document.querySelector("#atk");
	var invBtn = document.querySelector("#inv");

	var $inventory = $("#inventory");
	
	var playerHP = 100;
	var playerMaxHp = 100;
	var playerPowerNumber = 20;
	// var playerAcc = 30;

	$inventory.on( "click", "div", function( e ) {
    	e.preventDefault();
    	if( $( this ).hasClass("med") ) {
    		playerHP += 50;
    		if(playerHP > playerMaxHp) {
    			playerHP = playerMaxHp;
    			pHPplace.innerHTML = playerHP;

    			myKlocekHp.style.width = playerHP + "px";
    		} else {
    			pHPplace.innerHTML = playerHP;
    			myKlocekHp.style.width = playerHP + "px";
    		}
    		
    		$(this).remove();
    	} else if ( $( this ).hasClass("point_power") ) {
    		// playerPowerNumber = pPowerplace.innerHTML;
    		console.log(typeof playerPowerNumber);
    		playerPowerNumber = parseInt(playerPowerNumber);
    		console.log(typeof playerPowerNumber);

    		playerPowerNumber += 10;
    		pPowerplace.innerHTML = playerPowerNumber;
    		$(this).remove();
    	}	else if ( $( this ).hasClass("point_maxHP") ) {
    		// playerPowerNumber = pPowerplace.innerHTML;
    		// console.log(typeof playerMaxHp);
    		// playerPowerNumber = parseInt(playerMaxHp);
    		// console.log(typeof playerMaxHp);

    		playerMaxHp += 50;
    		pMaxHPplace.innerHTML = playerMaxHp;
    		myKlocekMax.style.width = playerMaxHp + "px";
    		$(this).remove();
    	}	
    	//console.log( $( this ).text() );
	});

	var xplace = document.querySelector("#map-x");
	var yplace = document.querySelector("#map-y");

	var mapBox = document.querySelector("#map-box");
	var myX = 3;
	var myY = 46;

	var pHPplace = document.querySelector("#playerHP");
	var pMaxHPplace = document.querySelector("#MaxHP");
	var pPowerplace = document.querySelector("#playerPowerPlace");
	// var pAccuracyplace = document.querySelector("#playerAccuracy"); 

	pHPplace.innerHTML = playerHP;
	pMaxHPplace.innerHTML = playerMaxHp;
	pPowerplace.innerHTML = playerPowerNumber;
	// pAccuracyplace.innerHTML = playerAcc;
	$('#hero').css( "left", "-=80");
	window.addEventListener("keydown", mapArrows, false);
	function mapArrows(e) {
		 var code = e.keyCode;

        switch(code) {
			// Left arrow key pressed
			case 37:

				if ( $('.active').prev().hasClass('blk') === true ) {
						console.log('zablokowane');
						
					} else {

					myX -= 1;
					xplace.innerHTML = myX;
					$('.active').prev().addClass('active');
					$('.active').next().removeClass('active');
						if(myX === 7){
							
							$('#map-box').css( "background-position-x", "+=20");
						} else {
							$('#hero').css( "left", "-=20");
						};
					
					
					$('#hero').css( "background-position-x", "-20px");
					$('#hero').css( "background-position-y", "0px");
					regenHP();
					czyWalka();
					}// if c
				break;
			// Up Arrow Pressed
			case 38:

				if ( $('tr').eq(myY - 1).children().eq(myX).hasClass('blk') ) {
						console.log('zablokowane');
						
					} else {

					$('tr').eq(myY).children().eq(myX).removeClass('active');
					myY -= 1;
					$('tr').eq(myY).children().eq(myX).addClass('active');
					yplace.innerHTML = myY;

					$('#map-box').css( "background-position-y", "+=20");
					$('#hero').css( "background-position-x", "0px");
					$('#hero').css( "background-position-y", "0px");
					
					regenHP();
					czyCat();
					czyWalka();                     
					}
					
				break;
			// Right Arrow Pressed
			case 39:

				if ( $('.active').next().hasClass('blk') === true ) {
						console.log('zablokowane');
						
					} else {

					myX += 1;
					xplace.innerHTML = myX;
					$('.active').next().addClass('active');
					$('.active').prev().removeClass('active');

					if(myX === 8){
							
							$('#map-box').css( "background-position-x", "-=20");
						} else {
							$('#hero').css( "left", "+=20");
						};
					
					$('#hero').css( "background-position-x", "-20px");
					$('#hero').css( "background-position-y", "-20px");
					regenHP();
					czyWalka();
					}
				break;
			// Down Arrow Pressed
			case 40:

				if ( $('tr').eq(myY + 1).children().eq(myX).hasClass('blk') ) {
						console.log('zablokowane');
						
					} else {

					$('tr').eq(myY).children().eq(myX).removeClass('active');
					myY += 1;
					yplace.innerHTML = myY;
					// $('.active').parent().next().children().eq(myX).addClass('active');
					// $('.active').parent().prev().children().eq(myX).addClass('active');
					$('tr').eq(myY).children().eq(myX).addClass('active');

					$('#map-box').css( "background-position-y", "-=20");
					$('#hero').css( "background-position-x", "-40px");
					$('#hero').css( "background-position-y", "-20px");
					regenHP();
					czyWalka();
				}
				break;
		}
	}; //switch?

		var myKlocekMax = document.querySelector("#pKlocekMaxHp");
		var myKlocekHp = document.querySelector("#pKlocekHp");
		
		myKlocekMax.style.width = playerMaxHp + "px";
		myKlocekHp.style.width = playerHP + "px";

		invBtn.addEventListener("click", function(event) {

			if($inventory.children('div.med').length === 0){
				console.log("nie masz medi");
			} else {

			$inventory.show();
			$inventory.children('div.point_maxHP').hide();
			$inventory.children('div.point_power').hide();
			$("#controls").hide();
			$inventory.one( "click", "div", function( e ) {

				if( $( this ).hasClass("med") ) {
    			playerHP += 50;
    				if(playerHP > playerMaxHp) {
    				playerHP = playerMaxHp;
    				pHPplace.innerHTML = playerHP;

    				myKlocekHp.style.width = playerHP + "px";
    				$inventory.hide();
    				monsterAtakujeTeraz();
    				$("#controls").show();
    				$inventory.children('div.point_maxHP').show();
					$inventory.children('div.point_power').show();
    			} 

    		
    		// $(this).remove().delay(300);
    		
    		}
			}); //one


		}// inventory niepuste
		});//invBtn

		atkBtn.addEventListener("click", function(event) {
			
			mhp = mHPplace.innerHTML;
			mpwr = mPowerplace.innerHTML;
			// php = pHPplace.innerHTML;
			playerPowerNumber = pPowerplace.innerHTML;
			

			mhp -= playerPowerNumber;
			console.log("monster hp po ataku player " + mhp);
			// console.log("player hp po ataku player " + php);
			mHPplace.innerHTML = mhp;
			
			
			$("#player").animate({ "left": "+=50px" }, "50" );
			
			$("#player").animate({ "left": "-=50px" }, "50" );
			$("#player").css("background-image", "url('./img/hero_big_atk.png')");

			$("#monsterImg").effect( "pulsate", "fast" );

			var monsterKlocekHp = document.querySelector("#mKlocekHp");
			// monsterKlocekMax.style.width = mhp + "px";
			// monsterKlocekHp.style.width = mhp + "px";


			mKlocek();

			if (mhp <= 0 && playerHP > 0 )  {  //walka sie konczy
				console.log("---------  MHP < 0 i PHP > 0 -----koniec walki");
				console.log("monster hp mniejsze niz zero " + mhp);
				
				mHPplace.innerHTML = "";
				mPowerplace.innerHTML = "";
				// mAccuracyplace.innerHTML = "";

				$("#monsterImg").effect( "explode", "fast" );
				$("#controls").fadeOut();
				$("#background").delay(2000).hide( "clip", 1000 );
				$(".monsterStats").delay(1000).fadeOut();
				$("#player").delay(1000).fadeOut();
				monsterKlocekHp.style.width = "0px";
				
				if (myX === 8 & myY === 2) {
					$("#winner").show();
				};

				$inventory.delay(1000).fadeIn();

				// $("#background").delay(1000).removeClass("bgAnimate");  // -------
				czyItem();

				window.addEventListener("keydown", mapArrows, false);
				// playerHP = php;


			} else if (mhp > 0 && playerHP > 0) { //monster atakuje teraz
				console.log("---------  MHP > 0 i PHP > 0 ------ ");
				
				console.log("monster hp wieksze niz zero " + mhp);
				playerHP -= mpwr;
				console.log("player hp po ataku monstera " + playerHP);
				
				$("#target").delay( 800 );
				$("#target").animate({ "left": "-=50px" }, "50" );
				$("#target").animate({ "left": "+=50px" }, "50" );
				$("#player").effect( "pulsate", "fast" );

				pKlocek();

				pHPplace.innerHTML = playerHP;
				if(playerHP < 0){
					console.log("---------  MHP > 0 i PHP < 0 ------");
					$("#controls").fadeOut();
					myKlocekHp.style.width = "0px";
					console.log("game over");

					$("#gameover").fadeIn();
				} //nested if


			}  // else if


		}); //end click

		function regenHP(){
			
			if (playerHP === playerMaxHp) {
				console.log("maxHP");
			} else if (playerHP < playerMaxHp)
				playerHP += 1;
				myKlocekHp.style.width = playerHP + "px";
				pHPplace.innerHTML = playerHP;
		};//regenHP

		function pKlocek(){ 
			setTimeout(function() { myKlocekHp.style.width = playerHP + "px"; }, 1000);			
		};

		function mKlocek(){ 
			var monsterKlocekHp = document.querySelector("#mKlocekHp"); 
			setTimeout(function() { monsterKlocekHp.style.width = mhp + "px"; }, 50);			
		};


		function monsterAtakujeTeraz(){
			mhp = mHPplace.innerHTML;
			mpwr = mPowerplace.innerHTML;
			// php = pHPplace.innerHTML;
			playerPowerNumber = pPowerplace.innerHTML;

			if (mhp > 0 && playerHP > 0) { //monster atakuje teraz
				console.log("---------  MHP > 0 i PHP > 0 ------ ");
				
				console.log("monster hp wieksze niz zero " + mhp);
				playerHP -= mpwr;
				console.log("player hp po ataku monstera " + playerHP);
				
				$("#target").delay( 800 );
				$("#target").animate({ "left": "-=50px" }, "50" );
				$("#target").animate({ "left": "+=50px" }, "50" );
				$("#player").effect( "pulsate", "fast" );

				pKlocek();

				pHPplace.innerHTML = playerHP;
				if(playerHP < 0){
					console.log("---------  MHP > 0 i PHP < 0 ------");
					$("#controls").fadeOut();
					myKlocekHp.style.width = "0px";
					console.log("game over");
					$("#gameover").fadeIn();
				} //nested if


			}  // else if
		}; //monsterAtakujeTeraz

		function czyCat(){
			if ((myX === 12 & myY === 35) && ( $inventory.children('div.cat') ).length === 0) {
				
				$("#dangerous").fadeIn().delay(2500).fadeOut();
				var item = document.createElement("div");

						item.className = "item cat";
						
						$inventory.append(item);
			};
		}
		

		function czyWalka(){
					
					var rndm = Math.floor((Math.random() * 10) + 1);
					console.log("czy fajt " + rndm);
					
					if (myX === 12 && myY === 35) {
						rndm = 1;
					};

					if (myX === 8 && myY === 2) {
						rndm = 9;
					}

					if(rndm > 8) {
						
						function losujMonster(){
							
							if (myY >= 45) {
								level = 1;
								minimum = 0;
							} else if (myY >= 33) {
								level = 2;
								minimum = 20;
							} else if (myY >= 16) {
								level = 3;
								minimum = 40;
							} else if (myY >= 1) {
								level = 4;
								minimum = 60;
							}
							
							var mHP = Math.floor((Math.random() * 50) + 1) + minimum;
							var mPower = Math.floor((Math.random() * 25) + 1) + minimum;
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
							// mAccuracyplace.innerHTML = wonsz.Accuracy;    ACCURACY OUT

							if (myX === 8 & myY === 2) {
								mHPplace.innerHTML = 500;         
								mPowerplace.innerHTML = 100;
								mHP = 500;
								
							}


							var monsterKlocekMax = document.querySelector("#mKlocekMaxHp");
							var monsterKlocekHp = document.querySelector("#mKlocekHp");

							monsterKlocekHp.style.width = mHP + "px";
							monsterKlocekMax.style.width = mHP + "px";


							window.removeEventListener("keydown", mapArrows, false);

							monsterPictures = new Array( "skorio_ss.png" , "skoriodsrt_ss.png" , "snek_ss.png" , "roach_ss.png");
							whatPicture = Math.floor((Math.random() * monsterPictures.length) );

							monsterPic = document.querySelector("#monsterImg");
							fullMonsterPath = "url('./img/" + monsterPictures[whatPicture] + "')";
							monsterPic.style.backgroundImage = fullMonsterPath;

							if (myX === 8 & myY === 2) {
								monsterPic.style.backgroundImage = "url('./img/boss.png')";  
							}


							bgPic = document.querySelector("#background");
							if (myY >= 45) {
								BgPath = "url('./img/s1.jpg')";
							} else if (myY >= 33) {
								BgPath = "url('./img/s2.jpg')";
							} else if (myY >= 16) {
								BgPath = "url('./img/s3.jpg')";
							} else if (myY >= 1) {
								BgPath = "url('./img/s4.jpg')";
							}

							if (myX === 8 & myY === 2) {
								BgPath = "url('./img/special.jpg')";      
							}

							bgPic.style.backgroundImage = BgPath;
							// $("#monsterImg").css("background-image", "url('./img/' + monsterPictures[whatPicture] + ' ')");
							$inventory.fadeOut();
							// $("#background").css("background-image", "url('./img/s1.jpg')");
							$("#background").removeClass("bgAnimate");
							$("#background").show( "clip", 1000 );
							$("#background").addClass("bgAnimate");
							$("#player").show( "drop", 1000 );
							$("#controls").fadeIn();
							// $("#monsterImg").css("background-image", "url('./img/skoriodsrt_s.png')");
							$("#monsterImg").delay("2000").show( "bounce", "fast" );
							$(".monsterStats").delay(2000).fadeIn();
							

						} //end losujMonster

						losujMonster();

					} //end czy walka
	} 


		function czyItem(){
					
					var rndm2 = Math.floor((Math.random() * 10) + 1);
					console.log("czy item " + rndm2);

					if(rndm2 >= 1 && rndm2 < 6) {
						console.log("wypadnie");
						var item = document.createElement("div");
						// var t = document.createTextNode("med");
						item.className = "item med";
						

						// item.appendChild(t);
						$inventory.append(item); 
					} 

					else if (rndm2 >= 6 && rndm2 < 8) {
						var item = document.createElement("div");
						// var t = document.createTextNode("med");
						item.className = "item point_power";
						

						// item.appendChild(t);
						$inventory.append(item);
					}

					else if (rndm2 >= 8 && rndm2 <= 10) {
						var item = document.createElement("div");
						// var t = document.createTextNode("med");
						item.className = "item point_maxHP";
						

						// item.appendChild(t);
						$inventory.append(item);
					}

				} //czyItem

}); //DOM loaded end

