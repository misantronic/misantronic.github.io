(function(w) {
	/**
	 * minc.js
	 * @param {Array} a An Array containing the URLs/Paths to your scripts
	 * @param {Array} [b] An Array containing the URLs/Paths to you fallback-scripts
	 * @returns {Function}
	 * @constructor
	 */
	function $(a, b) {
		b = b || [];
		return (function _(j, k) {
			var r, i, L, g,
				m = Minc.m,
				M = [],
				C = w.console;

			/**
			 * Success method when all scripts are loaded
			 * @param {Function} c callback
			 */
			_.done = function(c) {
				r = c
			};

			// CommonJS
			//if(!w.module) module = {};
			//Object[k="defineProperty"] && Object[k](module, "exports", {
			//	get: function() { return {} },
			//	set: function(v) {
			//		!j && (M[i] = v)
			//	}
			//});

			!function l(s, d, o, t, I) {
				j = 0;
				// AMD define()
				(w.define =
					/**
					 *
					 * @param {Function|String|Array} x Module function or moduleName or dependencies
					 * @param {Function|Array} y Module function or dependencies
					 * @param {Function|undefined} z Module function or undefined
					 */
						function(x, y, z) {
						j = 1;
						// check multi-use of parameters
						x.call ? (z = x, x = "", y = []) : x.pop ? (z = y, y = x, x = "") : y.call && (z = y, y = []);

						// save module
						m.push({ i: x, d: y, m: z });

						if(L=y.length)
							for(d=L, o = []; d--;) { 		// parse dependencies
								for(g=m.length; g--;) 		// parse modules
									if(m[g] && y[d] == m[g].i)
										o.push(m[g].m());

								L != o.length && 			// validate dependencies
								C && C.log("Missing", y)

								M.push(z.apply(w, o));		// assign module callback
							}
						else 								// assign module callback
							M.push(z())
					}
				).amd = 1;

				// load
				with(document)
					(d=createElement(t = s.substr(-4) == '.css' ? "link" : "script"))[t == "link" ? "href" : "src"] = s.replace(/https*:/, ""),
						t == "link" ?

							// load CSS
						(I = setInterval(function(q) {
							try {
								if(d.sheet || d[q="styleSheet"] && d[q].rules && d[q].rules[0]) {
									try { a[++i] ? l(a[i]) : r && r.apply(_, M); } catch(e) {}
									clearInterval(I)
								}
							} catch(e) {
								try { a[++i] ? l(a[i]) : r && r.apply(_, M); } catch(e) {}
								clearInterval(I)
							}
						}, 5)) && (d.rel = "stylesheet")

							:

							// load JS
							d.onload = d.onreadystatechange = d.onerror = function(e) {
								(e = e || this).type == "error" && b[i]
									? l(b[i])
									: e.type == "load" || e[g="readyState"] == "loaded" || e[g] == "complete"
									? a[++i] ? l(a[i]) : r && r.apply(_, M)
									: 0
							},

						getElementsByTagName("head")[0].appendChild(d)
			}(a[i=0]);

			return _
		})()
	}

	$.m = [];

	w["Minc"] = $

})(window);