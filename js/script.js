$(document).ready(function() {
	// hide results template and error alerts on initial page load
	$("#results").hide();
	$(".alert").hide();

	// prevent ability to type negative numbers or spaces in input fields
	$("[type='number']").bind("keydown", function(e) {
		var code = e.keyCode || e.which;

		if (code == 189 || code == 173 || code == 32 || code == 69 || code == 109) {
			return false;
		}
	});
	/// fator conersao
	var fatorconv= 0.11  //kg co2/ Kwh
	// pot medias em watts
	var potmarcondi = 2000;
	var potmventi = 65;
	var potmChuv = 5300;
	var potmLuzf = 15 ;
	var potmLuzi = 40; 
	var potmTv = 110;
	var potmFog = 9120;
	var potmGela = 250;
	var potmMicro = 1500;
	var potmMaqlavarr = 500;
	var potmMaqlavarl = 1500;
	var potmLiq= 300;
	var potmFerr= 1000;
	var potmSeca= 1400;
	var potmCel = 0;
	var potmNote = 0;



	


	$("#calculate-btn").on("click", function() {
		var calculateAndDisplayScore = function() {
			window.scrollTo(0, 400);
			// hide form template if all inputs are completed
			$("#form").hide();

			// get input values
			var arcondiInput = document.getElementById("arcond").value;
			var ventiInput = document.getElementById("venti").value;
			var chuvInput = document.getElementById("chuv").value;
			var luziInput = document.getElementById("luzi").value;
			var luzfInput = document.getElementById("luzf").value;
			var tvInput = document.getElementById("tv").value;
			var fogInput = document.getElementById("fog").value;
			var gelaInput = document.getElementById("gela").value;
			var microInput = document.getElementById("micro").value;
			var maqlavarrInput = document.getElementById("maqlavarr").value;
			var maqlavarlInput = document.getElementById("maqlavarl").value;
			var maqlavarlInput = document.getElementById("maqlavarl").value;
			var liqInput = document.getElementById("liq").value;
			var ferrInput = document.getElementById("ferr").value;
			var secaInput = document.getElementById("seca").value;
			var celInput = document.getElementById("cel").value;
			var noteInput = document.getElementById("note").value;
			var carGasInput = document.getElementById("carGas").value;
			var carEtaInput = document.getElementById("carEta").value;
			var carDieInput = document.getElementById("carDie").value;
			var motoGasInput = document.getElementById("motoGas").value;
			var motoEtaInput = document.getElementById("motoEta").value;
			var onibusInput = document.getElementById("onibus").value;

			
			// set variables for calculating each component score
			var arcondiScore = "";
			var ventiScore = "";
			var chuvScore = "";
			var luzScore = "";
			var tvScore = "";
			var FogScore = "";
			var gelaScore = "";
			var microScore = "";
			var liqScore = "";
			var maqlavarrScore = "";
			var maqlavarlScore = "";
			var liqScore = "";
			var ferrScore ="";
			var secaScore = "";
			var noteScore = "";
			var carGasScore= "";
			var carEtaScore= "";
			var carDieScore="";
			var motoGasScore="";
			var motoEtaScore = "";
			var onibubsInput = "";

			var totalScore = "";

	
			// chuveiro

			if (chuvInput === 0 || chuvInput === "undefined") {
				chuvScore = 0;
			} else {
				chuvScore = chuvInput * potmChuv *fatorconv *365 ;
			}
			// ar condicionado

			if (arcondiInput === 0 || arcondiInput === "undefined") {
				arcondiScore = 0;
			} else {
				arcondiScore =  arcondiInput * potmarcondi *fatorconv *365 ;;
			}
			// ventilador 

			if (ventiInput === 0 || ventiInput === "undefined") {
				ventiScore = 0;
			} else {
				ventiScore =  ventiInput * potmventi *fatorconv *365 ;;
			}
			// Lampadas 
			if (luziInput === 0 || luziInput === "undefined") {
				luziScore = 0;
			} else {
				luziScore = potmLuzi * luziInput *fatorconv *365;
			}

			if (luzfInput === 0 || luzfInput === "undefined") {
				luzfScore = 0;
			} else {
				luzfScore = potmLuzf * luzfInput *fatorconv *365;
			}
			// tv
			if (tvInput === 0 || tvInput === "undefined") {
				tvScore = 0;
			} else {
				tvScore = tvInput  * potmTv * fatorconv *365;
			}
			// fogao
			if (fogInput === 0 || fogInput === "undefined") {
				fogScore = 0;
			} else {
				fogScore =  potmFog * fogInput *fatorconv *365;
			}
			// geladeira
			if (gelaInput === 0 || gelaInput === "undefined") {
				gelaScore = 0;
			} else {
				gelaScore =  potmGela* gelaInput *fatorconv *365;
			}
			// microondas
			if (microInput === 0 || microInput === "undefined") {
				microScore = 0;
			} else {
				microScore =  potmMicro* microInput *fatorconv *365;
			}
			// maquina de lavar roupas
			if (maqlavarrInput === 0 || maqlavarrInput === "undefined") {
				maqlavarrScore = 0;
			} else {
				maqlavarrScore =  potmMaqlavarr* maqlavarrInput *fatorconv *365;
			}
			// maquina de lavar loucas
			if (maqlavarlInput === 0 || maqlavarlInput === "undefined") {
				maqlavarlScore = 0;
			} else {
				maqlavarlScore =  potmMaqlavarl* maqlavarlInput *fatorconv *365;
			}
			//liquidificador
			if (liqInput === 0 || liqInput === "undefined") {
				liqScore = 0;
			} else {
				liqScore =  potmLiq *liqInput * fatorconv *365;
			}
			//Ferro
			if (ferrInput === 0 || ferrInput === "undefined") {
				ferrScore = 0;
			} else {
				ferrScore =  potmFerr *ferrInput * fatorconv *365;
			}
			//secador 
			if (secaInput === 0 || secaInput === "undefined") {
				secaScore = 0;
			} else {
				secaScore =  potmSeca *secaInput * fatorconv *365;
			}
			//celular 
			if (celInput === 0 || celInput === "undefined") {
				celScore = 0;
			} else {
				celScore =  potmCel *celInput * fatorconv *365;
			}
			//notebook
			if (noteInput === 0 || noteInput === "undefined") {
				noteScore = 0;
			} else {
				noteScore =  potmNote *noteInput * fatorconv *365;
			}

			//Locomocao

			//carro etanol
			if (carEtaInput === 0 || carEtaInput === "undefined") {
				carEtaScore = 0;
			} else {
				carEtaScore =  carEtaInput * 1507.44/8.9 ;
			}
			//carro Diesel
			if (carDieInput === 0 || carDieInput === "undefined") {
				carDieScore = 0;
			} else {
				carDieScore =  carDieInput * 2393.6/15.2;
			}

			//moto etanol
			if (motoEtaInput === 0 || motoEtaInput === "undefined") {
				motoEtaScore = 0;
			} else {
				motoEtaScore =  motoEtaInput * 1507.44/24.7 ;
			}
			//Onibus
			if (OnibusInput === 0 || OnibusInput === "undefined") {
				OibusScore = 0;
			} else {
				OnibusScore =  onibusInput * 2393.6/2.5 ;
			}

		

			

			// calculate total score and round to nearest whole integer
			totalScore = Math.round(energyScore + travelScore + wasteScore);
			var formattedScore = totalScore.toLocaleString("en");
			// console.log(totalScore);

			document.getElementById("score").innerHTML = formattedScore;

			// display results
			$("#results").show();

			// refresh page when recalculate button clicked
			$("#recalculate-btn").on("click", function() {
				location.reload();
				window.scrollTo(0, 0);
			});
		}


	});	
});