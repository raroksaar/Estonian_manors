var square = {
    "type": "FeatureCollection",
    "features": [
//        {
 //           "type": "Feature",
//           "geometry": {
//				// Alatskivi   [S'58.5930199', N'58.6098346', E'27.1181135', W'27.1481482']
//				//SE to SW to NW to NE to SE  
//                "type": "LineString",
//                "coordinates": [
//				    // clockwise starting from South East point
//                    [27.1181135, 58.5930199],
					// vector, i.e line, from SE point to SW point
//					[27.1481482, 58.5930199],
					// vector from SW to NW
//					[27.1481482, 58.6098346],
					// vector from NW to NE
//					[27.1181135, 58.6098346],
					// vector from NE to SW
//					[27.1181135, 58.5930199]
					
  //              ]
//            },
//            "properties": {
//                'popupContent': 'Alatskivi<br><a href="https://www.mois.ee/tartu/alatskivi.shtml">Mõisa Poortal - Estonian Manors</a>',
//                "underConstruction": false
//            },
//            "id": 1
//        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
					[25.8765170, 57.8470549],
					[25.9749974, 57.8470549],
					[25.9749974, 57.9280127],
					[25.8765170, 57.9280127],
					[25.8765170, 57.8470549]
				
                ]
            },
            "properties": {
                "popupContent": "Aitsra bounding box.",
                "underConstruction": false
            },
            "id": 2
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
					//Ahula küla, Järva vald, Järva maakond, 73401, Eesti
					//['59.1007529', '59.1297178', '25.7008305', '25.7629614']
					[25.7008305, 59.1007529],
					[25.7629614, 59.1007529],
					[25.7629614, 59.1297178],
					[25.7008305, 59.1297178],
					[25.7008305, 59.1007529]
                ]
            },
            "properties": {
                "popupContent": "Ahula küla, Järva vald, Järva maakond",
                "underConstruction": false
            },
            "id": 3
        }
    ]
};





// draws large circle
var approximate = {
    "type": "FeatureCollection",
    "features": [
		    {
            "geometry": {
                "type": "Point",
                "coordinates": [
					27.129707, 58.603866

                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": 'Alatskivi loss<br><a href="https://www.mois.ee/tartu/alatskivi.shtml">Mõisa Poortal - Estonian Manors</a>'
            },
            "id": 51
        },
		{
			"geometry": {"coordinates": [25.47661, 58.850228], "type": "Point"}, "properties": {"popupContent": 'Kirna mõis<br><a href="https://www.mois.ee/jarva/kirna.shtml">Mõisa Poortal - Estonian Manors</a>'}, "type": "Feature"
			
		},


		    {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    25.698102,
                    59.096909
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Seidla rüütlimõis Järva-Madise kihelkonnas Järvamaal 59.096909, 25.698102"
            },
            "id": 51
        },
		{
            "geometry": {
                "type": "Point",
                "coordinates": [
                    26.057667,
                    59.070663
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": '<b>Aavere rüütlimõis</b><br><a href="https://www.mois.ee/jarva/aavere.shtml">Mõisa Poortal - Estonian Manors</a>'
            },
            "id": 54
        },
		
  ///////
    
        
    ]
};

var exactloc = {

    "type": "FeatureCollection",
    "features": [
	    {
            "geometry": {
                "type": "Point",
                "coordinates": [
					27.129707, 58.603866

                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": 'Alatskivi loss<br><a href="https://www.mois.ee/tartu/alatskivi.shtml">Mõisa Poortal - Estonian Manors</a>'
            },
            "id": 51
        },

        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    25.698102,
                    59.096909
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "Seidla rüütlimõis Järva-Madise kihelkonnas Järvamaal 59.096909, 25.698102"
            },
            "id": 51
        },

        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    26.057667,
                    59.070663
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": '<b>Aavere rüütlimõis</b><br><a href="https://www.mois.ee/jarva/aavere.shtml">Mõisa Poortal - Estonian Manors</a>'
            },
            "id": 54
        },
		
		{
			"geometry": {"coordinates": [25.47661, 58.850228], "type": "Point"}, "properties": {"popupContent": 'Kirna mõis<br><a href="https://www.mois.ee/jarva/kirna.shtml">Mõisa Poortal - Estonian Manors</a>'}, "type": "Feature"	
		}

	
    ]
};

var knights = {
    "type": "FeatureCollection",
    "features": [
			{
            "geometry": {
                "type": "Point",
                "coordinates": [
				    25.328611, 59.248055
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": 'Alavere rüütlimõis <br><a href="https://www.mois.ee//harju/alavere.shtml">Mõisa Poortal - Estonoan Manors</a>'
            },
            "id": 55
        },

			{
            "geometry": {
                "type": "Point",
                "coordinates": [
                    26.138889,
                    59.4225
                ]
            },
            "type": "Feature",
            "properties": {
				 "popupContent": '<b>Aaspere rüütlimõis</b><br><a href="https://www.mois.ee/viru/aaspere.shtml">Mõisa Poortal - Estonian Manors</a>'
            }
        },
		{
            "geometry": {
                "type": "Point",
                "coordinates": [
				27.387222, 59.3725
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": 'Edise mõis rüütlimõis Jõhvi kihelkonnas Virumaal<br><a href="https://www.mois.ee/viru/edise.shtml">Mõisa Poortal - Estonoan Manors</a> <br><a href="https://et.wikipedia.org/wiki/Edise_m%C3%B5is">Vikipeedia</a>'
            },
            "id": 58
        },
		{
			"geometry": {"coordinates": [24.777692, 58.6868], "type": "Point"}, "properties": {"Country: ": "Eesti", "popupContent": 'Kaisma rüütlimõis  Pärnu-Jaagupi kihelkonnas Pärnumaa<br><a href="https://et.wikipedia.org/wiki/Kaisma_m%C3%B5is">Vikipeedia</a>'}, "type": "Feature"
			
		},
		{
			"geometry": {"coordinates": [24.765067, 59.023431], "type": "Point"}, "properties": {"Country: ": "Eesti", "popupContent": 'Alu rüütlimõis Rapla kihelkonnas Harjumaal<br><a href="https://www.mois.ee/harju/alu.shtml">Mõisa Poortal - Estonian Manors</a>'}, "type": "Feature"
		},

	]
};




