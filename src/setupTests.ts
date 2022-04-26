import "@testing-library/jest-dom";
// import Schema from "async-validator";
// Schema.warning = function () {};
global.matchMedia =
	global.matchMedia ||
	function () {
		return {
			matches: false,
			addListener: function () {},
			removeListener: function () {},
		};
	};
