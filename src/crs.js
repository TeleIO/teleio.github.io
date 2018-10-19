
// Radiuses values from http://wiki.kerbalspaceprogram.com

// Datums
L.Datum = L.Datum || {};

L.Datum.Kerbin = L.extend({}, L.CRS.Earth, {
	R: 600000
});

L.Datum.Mun = L.extend({}, L.CRS.Earth, {
	R: 200000
});

L.Datum.Minmus = L.extend({}, L.CRS.Earth, {
	R: 60000
});


// CRSs
L.CRS.Kerbin = {};
L.CRS.Kerbin.Equirectangular = L.extend({}, L.Datum.Kerbin, {
	code: 'KSP:30001',
	projection: L.Projection.LonLat,
	transformation: new L.Transformation(1 / 180, 1, -1 / 180, 0.5)
});

L.CRS.Mun = {};
L.CRS.Mun.Equirectangular = L.extend({}, L.Datum.Mun, {
	code: 'KSP:31001',
	projection: L.Projection.LonLat,
	transformation: new L.Transformation(1 / 180, 1, -1 / 180, 0.5)
});

L.CRS.Minmus = {};
L.CRS.Minmus.Equirectangular = L.extend({}, L.Datum.Minmus, {
	code: 'KSP:32001',
	projection: L.Projection.LonLat,
	transformation: new L.Transformation(1 / 180, 1, -1 / 180, 0.5)
});



