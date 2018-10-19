
// 🍂class L.TileLayer.KerbalMaps
// Equirectangular tiles provided by tiles.kerbalmaps.com

L.TileLayer.KerbalMaps = L.TileLayer.extend({
	options: {
		// 🍂option body: String = 'kerbin'
		// Name of the celestial body (in lowercase)
		body: 'kerbin',
		// 🍂option style: String = 'sat'
		// Raster style. One of 'sat' (visible RGB), 'color' (terrain colour relief), 'slope' or 'biome'
		style: 'sat',

		minZoom: 0,
		maxZoom: 5,

		attribution: "Map tiles by <a href='https://github.com/saik0/'>Joel Pedraza</a>, <a href='http://www.kerbalmaps.com'>kerbalmaps.com</a>"
	},

	initialize: function(options) {
		var url = "http://tiles.kerbalmaps.com/{body}/{style}/{z}/{x}/{-y}.png"
		L.TileLayer.prototype.initialize.call(this, url, options);
	}
});


L.tileLayer.kerbalMaps = function(options) {
	return new L.TileLayer.KerbalMaps(options);
};
