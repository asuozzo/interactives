var locations = [
    {
        "owner": "100 North Main St LLC",
        "address": "100 N. Main St.",
        "description": "Gym, Offices",
        "acres": 0.07,
        "value": 211300,
        "lat": 44.1979169,
        "long": -72.502416
    },
    {
        "owner": "240 South Main Street Corporation",
        "address": "240 & 236 S. Main St.",
        "description": "Two Office Buildings",
        "acres": 0.66,
        "value": 351900,
        "lat": 44.183039,
        "long": -72.499372
    },
    {
        "owner": "386 North Main Street LLC",
        "address": "386 & 388 N. Main St.",
        "description": "Five Apartments, Production Studio",
        "acres": 0.28,
        "value": 379100,
        "lat": 44.202734,
        "long": -72.508527
    },
    {
        "owner": "386 North Main Street LLC",
        "address": "398 N. Main St.",
        "description": "Three Apartments",
        "acres": 0.27,
        "value": 220500,
        "lat": 44.203106,
        "long": -72.5088119999999
    },
    {
        "owner": "47 North Main Street LLC",
        "address": "40 Elm St.",
        "description": "Parking Lot",
        "acres": 0.13,
        "value": 66000,
        "lat": 44.1984574,
        "long": -72.501032
    },
    {
        "owner": "47 North Main Street LLC",
        "address": "47 & 59 N. Main St.",
        "description": "Restaurant, Offices, Retail, Apartments",
        "acres": 0.58,
        "value": 1037300,
        "lat": 44.197627,
        "long": -72.501441
    },
    {
        "owner": "Goldsbury Avenue Development LLC",
        "address": "Alden Ave. Lot 68",
        "description": "Vacant Lot",
        "acres": 0.11,
        "value": 3000,
        "lat": 44.21134,
        "long": -72.508067
    },
    {
        "owner": "Goldsbury Avenue Development LLC",
        "address": "Avon St. Lots 32-34",
        "description": "Three Vacant Lots",
        "acres": 0.32,
        "value": 8800,
        "lat": 44.211147,
        "long": -72.508765
    },
    {
        "owner": "Goldsbury Avenue Development LLC",
        "address": "Goldsbury Ave. Lots 101-110",
        "description": "Nine Vacant Lots",
        "acres": 0.96,
        "value": 28700,
        "lat": 44.210451,
        "long": -72.506533
    },
    {
        "owner": "Goldsbury Avenue Development LLC",
        "address": "Hillside Ave. Lot 15",
        "description": "Vacant Lot",
        "acres": 0.09,
        "value": 4070,
        "lat": 44.2097098,
        "long": -72.5101049
    },
    {
        "owner": "Goldsbury Avenue Development LLC",
        "address": "Lyon Ave. Lot 81-88, 90-95",
        "description": "14 Vacant Lots",
        "acres": 1.41,
        "value": 39900,
        "lat": 44.211062,
        "long": -72.507461
    },
    {
        "owner": "Thomas Lauzon",
        "address": "67 Clifton St.",
        "description": "One-Family House",
        "acres": 0.39,
        "value": 136700,
        "lat": 44.19796,
        "long": -72.48494
    },
    {
        "owner": "Thomas & Karen Lauzon",
        "address": "58 Spaulding St.",
        "description": "One-Family House",
        "acres": 0.1,
        "value": 90000,
        "lat": 44.1950022,
        "long": -72.4984989
    },
    {
        "owner": "Thomas & Karen Lauzon",
        "address": "1 Orange St.",
        "description": "Two Apartments",
        "acres": 0.15,
        "value": 97950,
        "lat": 44.1919672999999,
        "long": -72.4959004
    },
    {
        "owner": "Thomas & Karen Lauzon",
        "address": "125 Nelson St.",
        "description": "One-Family House",
        "acres": 8.63,
        "value": 346000,
        "lat": 44.195255,
        "long": -72.487274
    },
    {
        "owner": "Thomas & Karen Lauzon",
        "address": "109 S. Main St.",
        "description": "Apartment, Office",
        "acres": 0.23,
        "value": 155100,
        "lat": 44.1908098,
        "long": -72.4989828
    },
    {
        "owner": "Thomas & Karen Lauzon",
        "address": "112 Summer St.",
        "description": "Two Apartments",
        "acres": 0.06,
        "value": 140800,
        "lat": 44.2026289999999,
        "long": -72.506027
    },
    {
        "owner": "Metro 159 LLC",
        "address": "159 N. Main St.",
        "description": "Retail",
        "acres": 0.27,
        "value": 454800,
        "lat": 44.198692,
        "long": -72.502937
    },
    {
        "owner": "Metro 51 LLC",
        "address": "51 Prospect St.",
        "description": "Feed Store",
        "acres": 0.79,
        "value": 209430,
        "lat": 44.1967139,
        "long": -72.5029531
    },
    {
        "owner": "Metro Development LLC",
        "address": "322 N. Main St.",
        "description": "Two Retail Shops and Offices",
        "acres": 0.74,
        "value": 870000,
        "lat": 44.2006622,
        "long": -72.5064494
    },
    {
        "owner": "Metro Development LLC",
        "address": "540 N. Main St.",
        "description": "Industrial",
        "acres": 1.16,
        "value": 957300,
        "lat": 44.20778,
        "long": -72.5139482
    },
    {
        "owner": "Metro Development LLC",
        "address": "85 S. Main St.",
        "description": "Commercial/Industrial",
        "acres": 1.02,
        "value": 484700,
        "lat": 44.19212,
        "long": -72.500524
    },
    {
        "owner": "Metro Development LLC",
        "address": "136 S. Main St.",
        "description": "Commercial Garage",
        "acres": 0.01,
        "value": 160000,
        "lat": 44.1890672,
        "long": -72.4981851
    },
    {
        "owner": "Metro Development LLC",
        "address": "181 S. Main St.",
        "description": "Auto Sales",
        "acres": 0.91,
        "value": 359500,
        "lat": 44.1858575,
        "long": -72.4992755999999
    },
    {
        "owner": "Metro Development LLC",
        "address": "3 Williams Lane",
        "description": "Parking Lot",
        "acres": 0.54,
        "value": 71500,
        "lat": 44.1987531,
        "long": -72.5055055999999
    },
    {
        "owner": "Metro Development LLC",
        "address": "7 Williams Lane",
        "description": "Vacant Land",
        "acres": 1.24,
        "value": 80700,
        "lat": 44.1983727,
        "long": -72.5052846
    },
    {
        "owner": "Metro Development LLC",
        "address": "11 Williams Lane",
        "description": "Land and Propane Tank",
        "acres": 0.47,
        "value": 143900,
        "lat": 44.1988256,
        "long": -72.5048466
    },
    {
        "owner": "Metro Development One LLC",
        "address": "21 Metro Way",
        "description": "Offices and Transitional Housing",
        "acres": 4.83,
        "value": 1402600,
        "lat": 44.1978,
        "long": -72.504074
    },
    {
        "owner": "Metro Development One LLC",
        "address": "31 Metro Way",
        "description": "Vacant Land",
        "acres": 0.11,
        "value": 13800,
        "lat": 44.1969875,
        "long": -72.5033443
    },
    {
        "owner": "The Reynolds House LLC",
        "address": "102 S. Main St.",
        "description": "Bed & Breakfast",
        "acres": 0.52,
        "value": 139400,
        "lat": 44.1914952,
        "long": -72.4990966
    }
];