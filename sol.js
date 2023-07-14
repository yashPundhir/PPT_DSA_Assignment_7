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
	
**Question 3**

Given two non-negative integers, num1 and num2 represented as string, return *the sum of* num1 *and* num2 *as a string*.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

**Example 1:**

**Input:** num1 = "11", num2 = "123"

**Output:**

"134"

*/

// Solution

function addStrings(num1, num2) {
	let i = num1.length - 1;
	let j = num2.length - 1;
	let carry = 0;
	let sum = "";

	while (i >= 0 || j >= 0) {
		const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
		const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
		const digitSum = digit1 + digit2 + carry;

		sum = (digitSum % 10) + sum;
		carry = Math.floor(digitSum / 10);

		i--;
		j--;
	}

	if (carry > 0) {
		sum = carry + sum;
	}

	return sum;
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

**Question 5**

Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

**Example 1:**

**Input:** s = "abcdefg", k = 2

**Output:**

"bacdfeg"

*/

// Solution

function reverseSegments(s, k) {
	const chars = s.split("");

	for (let i = 0; i < chars.length; i += 2 * k) {
		let start = i;
		let end = Math.min(i + k - 1, chars.length - 1);

		while (start < end) {
			const temp = chars[start];
			chars[start] = chars[end];
			chars[end] = temp;
			start++;
			end--;
		}
	}

	return chars.join("");
}

/*
	
**Question 6**

Given two strings s and goal, return true *if and only if* s *can become* goal *after some number of **shifts** on* s.

A **shift** on s consists of moving the leftmost character of s to the rightmost position.

- For example, if s = "abcde", then it will be "bcdea" after one shift.

**Example 1:**

**Input:** s = "abcde", goal = "cdeab"

**Output:**

true

*/

// Solution

function isEqual(s, goal) {
	let turn = 0;
	if (s.length !== goal.length) {
		return false;
	}
	while (turn < s.length) {
		let tempArr = s.split("");
		let el = tempArr.shift();
		s = [...tempArr, el].join("");
		if (s === goal) {
			return true;
		}
		turn = turn + 1;
	}
	return false;
}

// ***************************
// ***************************
// ***************************
// ***************************

// Alternate Solution

function canShift(s, goal) {
	if (s.length !== goal.length) {
		return false;
	}

	let turn = 0;

	while (turn < s.length && s !== goal) {
		s = s.substring(1) + s[0];
		turn++;
	}

	return s === goal;
}

/*
	
**Question 7**

Given two strings s and t, return true *if they are equal when both are typed into empty text editors*. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

**Example 1:**

**Input:** s = "ab#c", t = "ad#c"

**Output:** true

**Explanation:**

Both s and t become "ac".

*/

// Solution

function isEqual(s, t) {
	const stackS = [];
	const stackT = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] === "#") {
			stackS.pop();
		} else {
			stackS.push(s[i]);
		}
	}

	for (let i = 0; i < t.length; i++) {
		if (t[i] === "#") {
			stackT.pop();
		} else {
			stackT.push(t[i]);
		}
	}

	return stackS.join("") === stackT.join("");
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
		if (slope !== newSlope) {
			return false;
		}
	}
	return true;
}
