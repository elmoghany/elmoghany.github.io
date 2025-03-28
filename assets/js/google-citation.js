/*

  github-stars.js - v1
  JavaScript library for counting stars on a repo or user/org
  githubStars("stretchr/arg.js")

  by Ryan Quinn
  Copyright (c) 2013 Stretchr, Inc.

  Please consider promoting this project if you find it useful.

  Permission is hereby granted, free of charge, to any person obtaining a copy of this
  software and associated documentation files (the "Software"), to deal in the Software
  without restriction, including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons
  to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies
  or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
  INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
  FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
  DEALINGS IN THE SOFTWARE.

*/

(function(exports) {
	exports.googleCitation = function (repo, callback) {
		var xmlhttp = new XMLHttpRequest(),
			url = ["http://cse.bth.se/~fer/googlescholar-api/googlescholar.php?user=W7-8dq4AAAAJ"],
			useCallback = (typeof(callback) == "function");

		//count the stars
		function countStars(response) {
			//don't care, just make it an array
			if (!(response instanceof Array)) {
				response = [response];
			}
			//start the count
			var stars = 0;
            response_pub = response.publications

			for (var i in response_pub) {
                if (response_pub[i].title=="Meta-Transfer Learning for Few-Shot learning")
				stars += parseInt(response_pub[i].citations);
			}

			return stars;
		}

		if (!useCallback) {
			//no callback, just wait for the response
			return countStars(JSON.parse(xmlhttp.responseText));
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
