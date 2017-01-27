document.addEventListener("DOMContentLoaded", function(event) {
	var mapBox = document.querySelector("#map-box");
	var myX = 0;
	var myY = 0;
	var playerHP = 100;
	var playerPower = 30;

	var pHPplace = document.querySelector("#playerHP");
	var pPowerplace = document.querySelector("#playerPower");
	var pAccuracyplace = document.querySelector("#playerAccuracy"); 

	pHPplace.innerHTML = playerHP;
	pPowerplace.innerHTML = playerPower;

	$(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
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
							console.log(mHP);
							console.log(mPower);
							console.log(mAccu);


							var Monster = function(HP, Power, Accuracy){
								this.HP = HP;
								this.Power = Power;
								this.Accuracy = Accuracy;
							}

							var wonsz = new Monster(mHP, mPower, mAccu);
							console.log(wonsz);

							var mHPplace = document.querySelector("#monsterHP");
							var mPowerplace = document.querySelector("#monsterPower");
							var mAccuracyplace = document.querySelector("#monsterAccuracy");

							var current_monster_HP = wonsz.HP;

							mHPplace.innerHTML = current_monster_HP;
							mPowerplace.innerHTML = wonsz.Power;
							mAccuracyplace.innerHTML = wonsz.Accuracy;

							while(current_monster_HP > 0) {
								playerHP -= wonsz.Power;
								console.log("wonsz atakuje za " + wonsz.Power)
								pHPplace.innerHTML = playerHP;
								var akcja = prompt("a-atak, x")
								if (akcja === "A") {
									current_monster_HP -= playerPower;
									mHPplace.innerHTML = current_monster_HP;
								} else if (akcja === X) {
									current_monster_HP = 0;
									mHPplace.innerHTML = current_monster_HP;
								}
							} //endwhile

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
	});

	

}); //DOM loaded end

// transform: translate(50px, 100px);
// background-position: 50px 100px; 