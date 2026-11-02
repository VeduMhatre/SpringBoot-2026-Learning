
function showFields() {
	let calculator = document.getElementById("calculator").value;
	let fields = document.getElementById("fields");
	let title = document.getElementById("calculatorTitle");
	let result = document.getElementById("result");
	let select = document.getElementById("calculator");
	document.getElementById("calculatorNumber").textContent =
		String(select.selectedIndex + 1).padStart(2, "0") + " / 0" + select.options.length;

	result.hidden = true;

	let output = "";

	if (calculator === "trainlength") {
		title.innerHTML = "Train Length";

		output += '<div class="question-box">';
		output += 'E.g. A train travels at 60 km/h and takes 9 seconds to pass a pole. Calculate the length of the train.';
		output += '</div>';

		output += '<label>Train Speed</label>';
		output += '<div class="input-row">';
		output += '<input type="number" id="speed" step="any" min="0" placeholder="Enter speed" required>';
		output += '<select id="speedUnit">';
		output += '<option value="km/h">Km/h</option>';
		output += '<option value="m/s">M/s</option>';
		output += '</select>';
		output += '</div>';

		output += '<label>Time</label>';
		output += '<div class="input-row">';
		output += '<input type="number" id="time" step="any" min="0" placeholder="Enter time" required>';
		output += '<select id="timeUnit">';
		output += '<option value="seconds">Seconds</option>';
		output += '<option value="minutes">Minutes</option>';
		output += '<option value="hour">Hours</option>';
		output += '</select>';
		output += '</div>';
	}

	else if (calculator === "platformlength") {
		title.innerHTML = "Platform Length";

		output += '<div class="question-box">';
		output += 'E.g. A train of length 150 metres travels at 60 km/h and takes 20 seconds to cross a platform. Calculate the platform length.';
		output += '</div>';

		output += '<label>Train Speed</label>';
		output += '<div class="input-row">';
		output += '<input type="number" id="speed" step="any" min="0" placeholder="Enter speed" required>';
		output += '<select id="speedUnit">';
		output += '<option value="km/h">Km/h</option>';
		output += '<option value="m/s">M/s</option>';
		output += '</select>';
		output += '</div>';

		output += '<label>Train Length (metres)</label>';
		output += '<input type="number" id="trainlength" step="any" min="0" placeholder="Enter train length" required>';

		output += '<label>Time to Cross Platform</label>';
		output += '<div class="input-row">';
		output += '<input type="number" id="time" step="any" min="0" placeholder="Enter time" required>';
		output += '<select id="timeUnit">';
		output += '<option value="seconds">Seconds</option>';
		output += '<option value="minutes">Minutes</option>';
		output += '<option value="hour">Hours</option>';
		output += '</select>';
		output += '</div>';
	}

	else if (calculator === "relativespeed") {
		title.innerHTML = "Relative Speed";

		output += '<div class="question-box">';
		output += 'E.g. Two trains travel at speeds of 60 km/h and 40 km/h in the same direction. Calculate their relative speed.';
		output += '</div>';

		output += '<label>First Train Speed</label>';
		output += '<div class="input-row">';
		output += '<input type="number" id="speedtrain1" step="any" min="0" placeholder="Enter speed for train 1" required>';
		output += '<select id="speedUnit1">';
		output += '<option value="km/h">Km/h</option>';
		output += '<option value="m/s">M/s</option>';
		output += '</select>';
		output += '</div>';

		output += '<label>Second Train Speed</label>';
		output += '<div class="input-row">';
		output += '<input type="number" id="speedtrain2" step="any" min="0" placeholder="Enter speed for train 2" required>';
		output += '<select id="speedUnit2">';
		output += '<option value="km/h">Km/h</option>';
		output += '<option value="m/s">M/s</option>';
		output += '</select>';
		output += '</div>';

		output += '<label>Direction</label>';
		output += '<select id="direction">';
		output += '<option value="same">Same Direction</option>';
		output += '<option value="opposite">Opposite Direction</option>';
		output += '</select>';
	}

	else if (calculator === "traincrossingtime") {
		title.innerHTML = "Train Crossing Time";

		output += '<div class="question-box">';
		output += 'E.g.  Two trains of lengths 120 metres and 180 metres travel at 60 km/h and 40 km/h in opposite directions. Calculate the time taken to cross each other.';
		output += '</div>';

		output += '<label>First Train Length (metres)</label>';
		output += '<input type="number" id="trainlength1" step="any" min="0" placeholder="Enter length of train 1" required>';

		output += '<label>Second Train Length (metres)</label>';
		output += '<input type="number" id="trainlength2" step="any" min="0" placeholder="Enter length of train 2" required>';

		output += '<label>First Train Speed</label>';
		output += '<div class="input-row">';
		output += '<input type="number" id="speedtrain1" step="any" min="0" placeholder="Enter speed of train 1" required>';
		output += '<select id="speedUnit1">';
		output += '<option value="km/h">Km/h</option>';
		output += '<option value="m/s">M/s</option>';
		output += '</select>';
		output += '</div>';

		output += '<label>Second Train Speed</label>';
		output += '<div class="input-row">';
		output += '<input type="number" id="speedtrain2" step="any" min="0" placeholder="Enter speed of train 2" required>';
		output += '<select id="speedUnit2">';
		output += '<option value="km/h">Km/h</option>';
		output += '<option value="m/s">M/s</option>';
		output += '</select>';
		output += '</div>';

		output += '<label>Direction</label>';
		output += '<select id="direction">';
		output += '<option value="same">Same Direction</option>';
		output += '<option value="opposite" selected>Opposite Direction</option>';
		output += '</select>';
	}

	else if (calculator === "oppositetrainmeet") {
		title.innerHTML = "Meeting Speed Ratio";

		output += '<div class="question-box">';
		output += 'E.g. Two trains meet and take 9 hours and 16 hours respectively to reach their destinations. Calculate their speed ratio.';
		output += '</div>';

		output += '<label>First Train Time After Meeting (hours)</label>';
		output += '<input type="number" id="time1AfterMeeting" step="any" min="0" placeholder="Enter time taken for train 1 to reach destination" required>';

		output += '<label>Second Train Time After Meeting (hours)</label>';
		output += '<input type="number" id="time2AfterMeeting" step="any" min="0" placeholder="Enter time taken for train 2 to reach destination" required>';
	}

	else if (calculator === "trainspeed") {
		title.innerHTML = "Train Speed";

		output += '<div class="question-box">';
		output += 'E.g. A train of length 200 metres passes a person walking at 5 km/h in the same direction in 10 seconds. Calculate the train speed.';
		output += '</div>';

		output += '<label>Train Length (metres)</label>';
		output += '<input type="number" id="trainLength" step="any" min="0" placeholder="Enter train length" required>';

		output += '<label>Time to Pass Person</label>';
		output += '<div class="input-row">';
		output += '<input type="number" id="time" step="any" min="0" placeholder="Enter time" required>';
		output += '<select id="timeUnit">';
		output += '<option value="seconds">Seconds</option>';
		output += '<option value="minutes">Minutes</option>';
		output += '<option value="hour">Hours</option>';
		output += '</select>';
		output += '</div>';

		output += '<label>Person Speed</label>';
		output += '<div class="input-row">';
		output += '<input type="number" id="personSpeed" step="any" min="0" placeholder="Enter person speed" required>';
		output += '<select id="speedUnit">';
		output += '<option value="km/h">Km/h</option>';
		output += '<option value="m/s">M/s</option>';
		output += '</select>';
		output += '</div>';

		output += '<label>Direction</label>';
		output += '<select id="direction">';
		output += '<option value="same">Same Direction</option>';
		output += '<option value="opposite">Opposite Direction</option>';
		output += '</select>';
	}

	fields.innerHTML = output;
}


function validateInputs() {
	let inputs = document.querySelectorAll("#fields input[type='number']");

	for (let i = 0; i < inputs.length; i++) {
		let value = Number(inputs[i].value);
		let allowZero = inputs[i].id === "personSpeed";
		if (inputs[i].value === "" || value < 0 || (value === 0 && !allowZero)) {
			alert(allowZero
				? "Please enter a value of zero or more."
				: "Please enter a value greater than zero.");
			inputs[i].focus();
			return false;
		}
	}

	return true;
}


function calculate(event) {
	event.preventDefault();

	if (validateInputs() === false) {
		return;
	}

	let calculator = document.getElementById("calculator").value;
	let params = new URLSearchParams();

	if (calculator === "trainlength") {
		params.append("speed", document.getElementById("speed").value);
		params.append("time", document.getElementById("time").value);
		params.append("speedUnit", document.getElementById("speedUnit").value);
		params.append("timeUnit", document.getElementById("timeUnit").value);
	}

	else if (calculator === "platformlength") {
		params.append("speed", document.getElementById("speed").value);
		params.append("trainlength", document.getElementById("trainlength").value);
		params.append("time", document.getElementById("time").value);
		params.append("speedUnit", document.getElementById("speedUnit").value);
		params.append("timeUnit", document.getElementById("timeUnit").value);
	}

	else if (calculator === "relativespeed") {
		let speed1 = Number(document.getElementById("speedtrain1").value);
		let speed2 = Number(document.getElementById("speedtrain2").value);

		let unit1 = document.getElementById("speedUnit1").value;
		let unit2 = document.getElementById("speedUnit2").value;

		if (unit1 === "m/s") {
			speed1 = speed1 * 18 / 5;
		}

		if (unit2 === "m/s") {
			speed2 = speed2 * 18 / 5;
		}

		params.append("speedtrain1", speed1);
		params.append("speedtrain2", speed2);
		params.append("direction", document.getElementById("direction").value);
		params.append("speedUnit", "km/h");
	}

	else if (calculator === "traincrossingtime") {
		let speed1 = Number(document.getElementById("speedtrain1").value);
		let speed2 = Number(document.getElementById("speedtrain2").value);

		let unit1 = document.getElementById("speedUnit1").value;
		let unit2 = document.getElementById("speedUnit2").value;

		if (unit1 === "m/s") {
			speed1 = speed1 * 18 / 5;
		}

		if (unit2 === "m/s") {
			speed2 = speed2 * 18 / 5;
		}

		params.append("trainlength1", document.getElementById("trainlength1").value);
		params.append("trainlength2", document.getElementById("trainlength2").value);
		params.append("speedtrain1", speed1);
		params.append("speedtrain2", speed2);
		params.append("direction", document.getElementById("direction").value);
		params.append("speedUnit", "km/h");
	}

	else if (calculator === "oppositetrainmeet") {
		params.append("time1AfterMeeting", document.getElementById("time1AfterMeeting").value);
		params.append("time2AfterMeeting", document.getElementById("time2AfterMeeting").value);
	}

	else if (calculator === "trainspeed") {
		params.append("trainLength", document.getElementById("trainLength").value);
		params.append("time", document.getElementById("time").value);
		params.append("personSpeed", document.getElementById("personSpeed").value);
		params.append("speedUnit", document.getElementById("speedUnit").value);
		params.append("timeUnit", document.getElementById("timeUnit").value);
		params.append("direction", document.getElementById("direction").value);
	}

	let options = {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		},
		body: params.toString()
	};

	let result = document.getElementById("result");
	let resultText = document.getElementById("resultText");

	fetch("https://railway-computation.onrender.com/api/" + calculator, options)
	.then(res => {
		if (!res.ok) throw new Error("Server returned " + res.status);
		return res.text();
	})
	.then(msg => {
		resultText.textContent = msg;
		result.hidden = false;
	})
	.catch(err => {
		alert("Calculation Issue: " + err);
	});
}

document.getElementById("calculator").addEventListener("change", showFields);
document.getElementById("calculatorForm").addEventListener("submit", calculate);

showFields();
