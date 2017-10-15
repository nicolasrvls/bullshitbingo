var dim = 4;
var matwin = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var BS = false;

$("td").click(
	function() {
		$(this).toggleClass("checked");
		var row=parseInt($(this).attr("row"))-1;
		var col=parseInt($(this).attr("col"))-1;
		if (matwin[row][col]==0){
			matwin[row][col]=1;
		} else {
			matwin[row][col]=0;
		};
		checkwin();
	});

function checkwin () {
	var bullshit = false;

	$("td").removeClass("win");
	winrow = [];
	wincol = [];

	for (var i = 0; i < dim ; i++) {
		s = i+1;
		if (sumrow(i) == 4) {
			winrow.push(s);
		}
	};
	for (var i = 0; i < dim ; i++) {
		s = i+1;
		if (sumcol(i) == 4) {
			wincol.push(s);
		}
	};
	for (var i = 0; i < winrow.length; i++) {
		s=winrow[i];
		$("[row='"+s+"']").addClass("win");
		bullshit = true;
	};
	for (var i = 0; i < wincol.length; i++) {
		s=wincol[i];
		$("[col='"+s+"']").addClass("win");
		bullshit = true;
	};
	if (sumdiagdroit()) {
		for (var i = 1; i < 5; i++) {
			$("[row='"+i+"'][col='"+i+"']").addClass("win");
			bullshit = true;
		};
	};
	if (sumdiaganti()) {
		for (var i = 1; i < 5; i++) {
			s=5-i;
			$("[row='"+i+"'][col='"+s+"']").addClass("win");
			bullshit = true;
		};
	};

	if (!BS && bullshit) {
		BS = true;
		toggleBullshit();
	};
}

function sumrow (i) {
	var s = 0;
	for (var k = matwin.length - 1; k >= 0; k--) {
		s = s + matwin[i][k]
	};
	return s
}

function sumcol (i) {
	var s = 0;
	for (var k = matwin.length - 1; k >= 0; k--) {
		s = s + matwin[k][i]
	};
	return s
}

function sumdiagdroit () {
	s= 0;
	for (var i = 0; i < 4; i++) {
		s += matwin[i][i];
	};
	return s==4;
}

function sumdiaganti () {
	s= 0;
	for (var i = 0; i < 4; i++) {
		s += matwin[i][3-i];
	};
	return s==4;
}

function toggleBullshit () {
	$(".bullshit").toggleClass("bsvisible");

	setTimeout(function() {
		$(".bullshit").toggleClass("bsvisible");
		//BS = false;
	},2000);
}




function init () {
	var random;
	var cells = $("td");
	for (var i = 0; i < dim*dim; i++) {
		random = Math.floor(Math.random() * cartes.length);
		cells.eq(i).text(cartes[random]);
		var index = cartes.indexOf(cartes[random]);
		cartes.splice(index, 1);
	};
}

init();
