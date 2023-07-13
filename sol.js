/*

**Question 1**

Given two strings s and t, *determine if they are isomorphic*.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

**Example 1:**

**Input:** s = "egg", t = "add"

**Output:** true

*/

// Solution

function isIsomorphic(s, t) {
	if (s.length !== t.length) {
		return false; // Strings must have the same length to be isomorphic
	}

	const charMapS = {}; // Mapping of characters from s to t
	const charMapT = {}; // Mapping of characters from t to s

	for (let i = 0; i < s.length; i++) {
		const charS = s[i];
		const charT = t[i];

		// Check if the mappings conflict
		if (
			(charMapS[charS] && charMapS[charS] !== charT) ||
			(charMapT[charT] && charMapT[charT] !== charS)
		) {
			return false;
		}

		// Create new mappings if the characters are not already mapped
		if (!charMapS[charS] && !charMapT[charT]) {
			charMapS[charS] = charT;
			charMapT[charT] = charS;
		}
	}

	return true;
}

/*

**Question 2**

Given a string num which represents an integer, return true *if* num *is a **strobogrammatic number***.

A **strobogrammatic number** is a number that looks the same when rotated 180 degrees (looked at upside down).

**Example 1:**

**Input:** num = "69"

**Output:**

true

*/

// Solution

function isStrobogrammatic(num) {
	const mapping = {
		0: "0",
		1: "1",
		6: "9",
		8: "8",
		9: "6",
	};

	let left = 0;
	let right = num.length - 1;

	while (left <= right) {
		if (!(num[left] in mapping) || mapping[num[left]] !== num[right]) {
			return false;
		}
		left = left + 1;
		right = right - 1;
	}

	return true;
}

/*

 **Question 4**

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

**Example 1:**

**Input:** s = "Let's take LeetCode contest"

**Output:** "s'teL ekat edoCteeL tsetnoc"

*/

// Solution

function reverse(s) {
	let words = s.split(" ");
	let result = "";
	for (let i = 0; i < words.length; i++) {
		words[i] = words[i].split("").reverse().join("");
	}
	result = words.join(" ");
	return result;
}

/*

 **Question 8**

You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

**Example 1:**

**Input:** coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

**Output:** true

*/

// Solution

function isStraightLine(coordinates) {
	let slope =
		(coordinates[1][1] - coordinates[0][1]) /
		(coordinates[1][0] - coordinates[0][0]);
	for (let i = 1; i < coordinates.length - 1; i = i + 1) {
		let newSlope =
			(coordinates[i + 1][1] - coordinates[i][1]) /
			(coordinates[i + 1][0] - coordinates[i][0]);
		if (!slope === newSlope) {
			return false;
		}
	}
	return true;
}
