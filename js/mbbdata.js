// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var playerData = {

	'Pick A Player': {
		'name': 'Pick A Player',
		'per': "",
		'position': "",
		'3PP': "",
		'blocks': "",
		'steals': "",
		'fg': "",
		'pic': "https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg"
	},

	'Grayson Allen': {
		'name': 'Grayson Allen',
		'per': 16.199837571088676,
		'position': 'SG',
		'3PP': 33.51,
		'blocks': 0.06,
		'steals': 0.76,
		'fg': 38.24,
		'pic': "http://images.performgroup.com/di/library/sporting_news/33/bd/grayson-allenjpg_yxuxinnuv6541oiv6gkpolrr0.jpg?t=-1705841121&w=960&quality=70"
	},

	'Marques Bolden': {
		'name': 'Marques Bolden',
		'per': 0.1,
		'position': 'C',
		'3PP': 0.00,
		'blocks': 0.29,
		'steals': 0.08,
		'fg': 19.23,
		'pic': 'http://img.bleacherreport.net/img/images/photos/003/637/995/hi-res-088b5b2513fe54ae3c9cd8d78ef30004_crop_north.jpg?1478555011&w=630&h=420'
	},

	'Javin DeLaurier': {
		'name': 'Javin DeLaurier',
		'per': 0.1,
		'position': 'PF',
		'3PP': 0.00,
		'blocks': 0.33,
		'steals': 0.33,
		'fg': 52.78,
		'pic': 'http://cdn4.sportngin.com/attachments/photo/4775/3579/Javin_Montgomery-Delaurier_NBA_Top_100_medium.jpg'
	},

	'Harry Giles': {
		'name': 'Harry Giles',
		'per': 5.585555629309125,
		'position': 'PF',
		'3PP': 0.00,
		'blocks': 0.65,
		'steals': 0.35,
		'fg': 51.75,
		'pic': 'http://www.newsobserver.com/sports/college/acc/duke/duke-now/piwpok/picture121912558/alternates/FREE_640/DUKETENN9SP121916CEL'
	},
	
	'Frank Jackson': {
		'name': 'Frank Jackson',
		'per': 19.016979377271408,
		'position': 'PG',
		'3PP': 40.40,
		'blocks': 0.06,
		'steals': 0.56,
		'fg': 45.39,
		'pic': 'http://cdn.fansided.com/wp-content/blogs.dir/175/files/2016/11/9672531-frank-jackson-ncaa-basketball-grand-canyon-duke-850x560.jpg'
	},
	'Amile Jefferson': {
		'name': 'Amile Jefferson',
		'per': 25.512815449174305,
		'position': 'PF',
		'3PP': 0.00,
		'blocks': 1.85,
		'steals': 0.69,
		'fg': 60.76,
		'pic': 'http://content.sny.tv/assets/images/0/7/6/173825076/cuts/PQFEIDPPPTAIPGZ.20151209214056_h5h4fnq7_mou7xm5z.jpg'
	},
	'Matt Jones': {
		'name': 'Matt Jones',
		'per': 25.902077735451837,
		'position': 'SG',
		'3PP': 33.19,
		'blocks': 0.16,
		'steals': 1.70,
		'fg': 38.05,
		'pic': 'http://dukereport.com/wp-content/uploads/2014/10/Matt_Jones_Duke.jpg'
	},
	'Luke Kennard': {
		'name': 'Luke Kennard',
		'per': 30.566331849390878,
		'position': 'SG',
		'3PP': 45.42,
		'blocks': 0.35,
		'steals': 0.84,
		'fg': 49.39,
		'pic': 'http://image.cdnllnwnl.xosnetwork.com/pics33/800/HG/HGKWMZYULKJJEMB.20151129201506.jpg'
	},
	'Justin Robinson': {
		'name': 'Justin Robinson',
		'per': 0.1,
		'position': 'SF',
		'3PP': 0.00,
		'blocks': 0.00,
		'steals': 0.00,
		'fg': 0.00,
		'pic': 'http://image.cdnllnwnl.xosnetwork.com/pics33/400/IK/IKKEIIRINNPYKSE.20151105190300.jpg'
	},
	'Jayson Tatum': {
		'name': 'Jayson Tatum',
		'per': 25.344380259675262,
		'position': 'SF',
		'3PP': 31.67,
		'blocks': 0.46,
		'steals': 0.55,
		'fg': 45.41,
		'pic': 'https://s3media.247sports.com/Uploads/Assets/261/154/6_5154261.jpg'
	}
};

var mappings = {
	"pos": "position",
	"fg": "fg",
	"3p": "3PP",
	"b": "blocks",
	"s": "steals"
}


function updateStats(side) {
	var item = document.getElementById(side);
	var value = item.options[item.selectedIndex].value;
	var player = playerData[value];
	var prefix = "#l-";
	if (side == "p-right") {
		prefix = "#r-";
	}
	for (var key in mappings) {
		$(prefix + key).text(player[mappings[key]]);
	}

	$(prefix + "pic").attr('src', player['pic']);

	// $(prefix + "pos").text(player['position']);
	// $(prefix + "fg").text(player['fg']);
	// $(prefix + "3p").text(player['3PP']);
	// $(prefix + "b").text(player['blocks']);
	// $(prefix + "s").text(player['steals']);
	

	$("#tweet-quote").addClass("disabled");

	return player;
}




$(document).ready(function() {
	updateStats("p-left");
	updateStats("p-right");


	//define comparison button behavior
	$("#compare-button").on("click", function() {
		var lp = updateStats("p-left");
		var rp = updateStats("p-right");

		if (lp.name == "Pick A Player" || rp.name == "Pick A Player") {
			alert("Please pick a player!");
			return;
		}

		$("#tweet-quote").removeClass("disabled");

	var wp = lp.per / (rp.per + lp.per);
	var twt = '@DukeMBB '+ lp.name + ' has a ' + String(Number((wp * 100).toFixed(1))) + ' percent chance of beating ' + rp.name;

	twt = 'https://twitter.com/intent/tweet?text=' + twt + "&hashtags=DUKEMBB"
	twt = twt.replace(/ /g, "+");
	$("#tweet-quote").attr('href', twt);

	//start animations
	$('#container').empty();
	var bar = new ProgressBar.Circle(container, {
		color: '#FFEA82',
		trailColor: '#eee',
		trailWidth: 1,
		duration: 1500,
		easing: 'easeOut',
		text: {
			className: 'progressbar__label',
			value: '',
			alignToBottom: false
		},
		strokeWidth: 6,
		from: {
			color: '#FFEA82',
			a: 0
		},
		to: {
			color: '#FF3E3E',
			a: 1
		},
		// Set default step function for all animate calls
		step: function(state, circle) {
			circle.path.setAttribute('stroke', state.color);
			var value = Math.round(circle.value() * 100);
			if (circle.value() === 0) {
				circle.setText('');
			} else {
				circle.setText(lp['name'] + ' ' + value + "% Chance of Winning");
			}
			circle.text.style.color = state.color;
			}
		});

	bar.text.style.fontSize = "2.5vw";
	bar.animate(wp);
	});

});