ol.proj.get("EPSG:2154").setExtent([354118.874915, 6902438.855561, 400554.855447, 6931150.722311]);
var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Parcelle_Verger_cotentin_0 = new ol.format.GeoJSON();
var features_Parcelle_Verger_cotentin_0 = format_Parcelle_Verger_cotentin_0.readFeatures(json_Parcelle_Verger_cotentin_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Parcelle_Verger_cotentin_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Parcelle_Verger_cotentin_0.addFeatures(features_Parcelle_Verger_cotentin_0);var lyr_Parcelle_Verger_cotentin_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcelle_Verger_cotentin_0, 
                style: style_Parcelle_Verger_cotentin_0,
                title: '<img src="styles/legend/Parcelle_Verger_cotentin_0.png" /> Parcelle_Verger_cotentin'
            });

lyr_Parcelle_Verger_cotentin_0.setVisible(true);
var layersList = [baseLayer,lyr_Parcelle_Verger_cotentin_0];
lyr_Parcelle_Verger_cotentin_0.set('fieldAliases', {'IDU': 'IDU', 'N__INAO': 'N__INAO', 'CP': 'CP', 'VILLE': 'VILLE', 'NOM_DU_VER': 'NOM_DU_VER', 'AOC_POTENT': 'AOC_POTENT', 'MODE_DE_CO': 'MODE_DE_CO', 'ARBRES_ISO': 'ARBRES_ISO', 'SURFACE_CA': 'SURFACE_CA', 'SURFACE_PL': 'SURFACE_PL', 'PLANTEE_CA': 'PLANTEE_CA', });
lyr_Parcelle_Verger_cotentin_0.set('fieldImages', {'IDU': 'TextEdit', 'N__INAO': 'TextEdit', 'CP': 'TextEdit', 'VILLE': 'TextEdit', 'NOM_DU_VER': 'TextEdit', 'AOC_POTENT': 'TextEdit', 'MODE_DE_CO': 'TextEdit', 'ARBRES_ISO': 'TextEdit', 'SURFACE_CA': 'TextEdit', 'SURFACE_PL': 'TextEdit', 'PLANTEE_CA': 'TextEdit', });
lyr_Parcelle_Verger_cotentin_0.set('fieldLabels', {'IDU': 'no label', 'N__INAO': 'header label', 'CP': 'header label', 'VILLE': 'header label', 'NOM_DU_VER': 'header label', 'AOC_POTENT': 'header label', 'MODE_DE_CO': 'header label', 'ARBRES_ISO': 'header label', 'SURFACE_CA': 'header label', 'SURFACE_PL': 'header label', 'PLANTEE_CA': 'header label', });
lyr_Parcelle_Verger_cotentin_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});