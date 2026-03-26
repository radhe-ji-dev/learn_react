function Button(state) {
	return function () {
		return {
			play: function () {
				if (state === 'play') return state;
				if (state === 'pause') {
					state = 'play';
					return state;
				}
				if (state === 'mute') {
					state = 'play';
					return state;
				}
			},
			pause: function () {
				state = 'pause';
				return state;
			},
			mute: function () {
				state = 'mute';
				return state;
			},
		};
	};
}
let btn1 = new Button('play');
let objbtn1 = new btn1();
console.log(objbtn1.play());
console.log(objbtn1.pause());
console.log(objbtn1.play());
console.log(objbtn1.pause());
console.log(objbtn1.mute());
console.log(objbtn1.pause());
console.log(objbtn1.mute());
console.log(objbtn1.play());
console.log(objbtn1.pause());
