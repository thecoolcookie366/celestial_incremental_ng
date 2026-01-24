addLayer("ch", {
    name: "The Legendary People", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "TLP", // This appears on the layer's node. Default is the id with the first letter capitalized
    row: 1,
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,

        celestialIndex: new Decimal(0),
        celestialTexts: ["", "", "",],

        matosDisplay: new Decimal(0),
    }},
    automate() {},
    nodeStyle() {
        return {
            background: "linear-gradient(45deg, #abcdef 0%, #fedcba 100%)",
            "background-origin": "border-box",
            "border-color": "#aabbcc",
        }
    },
    tooltip: "The Legendary People",
    color: "#abcdef",
    branches: ["cp"],
    update(delta) {
        let onepersec = new Decimal(1)
        
        player.ch.celestialTexts = [
            "Gatekeeper, the Celestial of Gates",
            "Cookie, the Celestial of NG+",
            "smileyfr, the Celestial of fr",
            "Domain, the Celestial of Silliness",
            "Galaxy, the Astral Celestial",
            "Leca, the Celestial of B...?",
            "KittyM, the Semi-Celestial of Cats",
            "Ona, the Non-Celestial of Money",
            "EVEYTING SMIER, THE ??? OF WES.",
        ]
    },
    clickables: {
        11: {
            title() { return "<h1>⚔" },
            canClick() { return true },
            unlocked() { return true },
            tooltip() { return "Gatekeeper, the Celestial of Gates" },
            onClick() {
                player.ch.celestialIndex = new Decimal(0)
            },
            style: { width: '50px', "min-height": '50px' }, // Tav
        },
        12: {
            title() { return "<h1>🍪" },
            canClick() { return true },
            unlocked() { return true },
            tooltip() { return "Cookie, the Celestial of NG+" },
            onClick() {
                player.ch.celestialIndex = new Decimal(1)
            },
            style: { width: '50px', "min-height": '50px' }, // Cante
            branches: [11],
        },
        13: {
            title() { return "<h1>F" },
            canClick() { return true },
            unlocked() { return true },
            tooltip() { return "smileyfr, the Celestial of fr" },
            onClick() {
                player.ch.celestialIndex = new Decimal(2)
            },
            style: { width: '50px', "min-height": '50px' }, // Jocus
            branches: [12],
        },
        14: {
            title() { return player.ma.matosDefeated ? "<h1>🇭" : "<h1>?" },
            canClick() { return player.ma.matosDefeated },
            unlocked() { return true },
            tooltip() { return player.ma.matosDefeated ? "Domain, the Celestial of Silliness" : "" },
            onClick() {
                player.ch.celestialIndex = new Decimal(3)
            },
            style: { width: '50px', "min-height": '50px' }, // Matos
            branches() {return player.ma.matosDefeated ? [13] : []},
        },
        15: {
            title() { return player.ir.iriditeDefeated ? "<h1>✦" : "<h1>?" },
            canClick() { return player.ir.iriditeDefeated },
            unlocked() { return true },
            tooltip() { return player.ir.iriditeDefeated ? "Galaxy, the Astral Celestial" : "" },
            onClick() {
                player.ch.celestialIndex = new Decimal(4)
            },
            style: { width: '50px', "min-height": '50px' }, // Iridite
            branches() {return player.ir.iriditeDefeated ? [14] : []},
        },
        16: {
            title() { return player.bee.bees.gte("1e1.79e308") ? "<h1>🐝" : "<h1>?" },
            canClick() { return player.bee.bees.gte("1e1.79e308") },
            unlocked() { return true },
            tooltip() { return player.bee.bees.gte("1e1.79e308") ? "Leca, the Celestial of B...?" : "" },
            onClick() {
                player.ch.celestialIndex = new Decimal(5)
            },
            style: { width: '50px', "min-height": '50px' }, // Aleph
            branches() {return player.bee.bees.gte("1e1.79e308") ? [15] : []},
        },
        17: {
            title() { return player.bee.bees.gte("1e1.79e308") && player.sma.eclipseShards.gte(1e3) ? "<h1>Ψ" : "<h1>?" },
            canClick() { return player.bee.bees.gte("1e1.79e308") && player.sma.eclipseShards.gte(1e3) },
            unlocked() { return true },
            tooltip() { return player.bee.bees.gte("1e1.79e308") && player.sma.eclipseShards.gte(1e3) ? "KittyM, the Semi-Celestial of Cats" : "" },
            onClick() {
                player.ch.celestialIndex = new Decimal(6)
            },
            style: { width: '50px', "min-height": '50px' }, // Tera
            branches() {return player.bee.bees.gte("1e1.79e308") && player.sma.eclipseShards.gte(1e3) ? [16] : []},
        },
        18: {
            title() { return player.bee.bees.gte("1e1.79e308") && player.cb.paragonShards.gte(100) ? "<h1>$" : "<h1>?" },
            canClick() { return player.bee.bees.gte("1e1.79e308") && player.cb.paragonShards.gte(100) },
            unlocked() { return true },
            tooltip() { return player.bee.bees.gte("1e1.79e308") && player.cb.paragonShards.gte(100) ? "Ona, the Non-Celestial of Money" : "" },
            onClick() {
                player.ch.celestialIndex = new Decimal(7)
            },
            style: { width: '50px', "min-height": '50px' }, // Zar
            branches() {return player.bee.bees.gte("1e1.79e308") && player.cb.paragonShards.gte(100) ? [17,11] : []},
        },
        19: {
            title() { return "<h1>∑" },
            canClick() { return player.tad.hiveExpand && player.sma.eclipseShards.gte(1e3) && player.cb.paragonShards.gte(100) },
            unlocked() { return true },
            tooltip() { return player.tad.hiveExpand && player.sma.eclipseShards.gte(1e3) && player.cb.paragonShards.gte(100) ? "IT'S HIM." : "???"},
            onClick() {
                player.ch.celestialIndex = new Decimal(8)
            },
            style: { width: '75px', "min-height": '75px' }, //nova
        },

        //prison
        101: {
            title() { return "<h1>?" },
            canClick() { return false },
            unlocked() { return true },
            onClick() {
                //
            },
            style: { width: '75px', "min-height": '75px' }, //aniciffo
        },
        102: {
            title() { return "<h1>?" },
            canClick() { return false },
            unlocked() { return true },
            onClick() {
                //
            },
            style: { width: '75px', "min-height": '75px' }, //
        },
        103: {
            title() { return "<h1>?" },
            canClick() { return false },
            unlocked() { return true },
            onClick() {
                //
            },
            style: { width: '75px', "min-height": '75px' }, //
        },
        104: {
            title() { return "<h1>?" },
            canClick() { return false },
            unlocked() { return true },
            onClick() {
                //
            },
            style: { width: '75px', "min-height": '75px' }, //
        },
        105: {
            title() { return "<h1>?" },
            canClick() { return false },
            unlocked() { return true },
            onClick() {
                //
            },
            style: { width: '75px', "min-height": '75px' }, //
        },
        106: {
            title() { return "<h1>?" },
            canClick() { return false },
            unlocked() { return true },
            onClick() {
                //
            },
            style: { width: '75px', "min-height": '75px' }, //
        },

    },
    bars: {},
    upgrades: {},
    buyables: {},
    milestones: {},
    challenges: {},
    infoboxes: {
        1: {
            title: "Gatekeeper, the Celestial of Gates",
            body() { return "placeholder" },
            unlocked() { return player.ch.celestialIndex.eq(0) },      
        },
        2: {
            title: "Cookie, the Celestial of NG+",
            body() { return "placeholder" },
            unlocked() { return player.ch.celestialIndex.eq(1) },      
        },
        3: {
            title: "smileyfr, the Celestial of fr",
            body() { return "placeholder" },
            unlocked() { return player.ch.celestialIndex.eq(2) },      
        },
        4: {
            title: "Domain, the Celestial of Silliness",
            body() { return "placeholder" },
            unlocked() { return player.ch.celestialIndex.eq(3) },      
        },
        5: {
            title: "Galaxy, the Astral Celestial",
            body() { return "placeholder" },
            unlocked() { return player.ch.celestialIndex.eq(4) },      
        },
        6: {
            title: "Leca, the Celestial of B...?",
            body() { return "placeholder" },
            unlocked() { return player.ch.celestialIndex.eq(5) },      
        },
        7: {
            title: "KittyM, the Semi-Celestial of Cats",
            body() { return "placeholder" },
            unlocked() { return player.ch.celestialIndex.eq(6) },      
        },
        8: {
            title: "Ona, the Non-Celestial of Money",
            body() { return "placeholder" },
            unlocked() { return player.ch.celestialIndex.eq(7) },      
        },
        9: {
            title: "EVEYTING SMIER, THE ??? OF WES",
            body() { return "placeholder" },
            unlocked() { return player.ch.celestialIndex.eq(8) },      
        },
    },
    microtabs: {
        stuff: {
            "Hall": {
                buttonStyle() { return { color: "white", borderRadius: "5px" } },
                unlocked() { return true },
                content: [
                    ["microtabs", "hall", { 'border-width': '0px' }],
                ]
            },
            "???": {
                buttonStyle() { return {			   
                background: "black",
				backgroundOrigin: "border-box",
				borderColor: "red",
				color: "red",borderRadius: "5px"  } },
                unlocked() { return player.ma.secondAreaUnlocked },
                content: [
                    ["blank", "25px"],
                    ["row", [["raw-html", function () { return "Celestial Constellation ??? - ????????????" }, { "color": "red", "font-size": "24px", "font-family": "monospace" }],]],
                    ["blank", "50px"],
                    ["row", [["clickable", 101],]],
                    ["blank", "25px"],
                    ["row", [ ["raw-html", function () { return "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" }, { "color": "white", "font-size": "12.5px", "font-family": "monospace" }], ["clickable", 102], ]],
                                        ["blank", "25px"],
                    ["row", [["clickable", 103], ["raw-html", function () { return "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" }, { "color": "white", "font-size": "12.5px", "font-family": "monospace" }],]],
                    ["blank", "25px"],
                    ["row", [ ["raw-html", function () { return "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" }, { "color": "white", "font-size": "12.5px", "font-family": "monospace" }], ["clickable", 104], ]],
                                        ["blank", "25px"],
                    ["row", [["clickable", 105],]],
                    ["blank", "25px"],
                    ["row", [ ["raw-html", function () { return "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" }, { "color": "white", "font-size": "12.5px", "font-family": "monospace" }], ["clickable", 106], ]],
                ]
            },
        },
        hall: {
            "Hall": {
                buttonStyle() { return { color: "white", borderRadius: "5px" } },
                unlocked() { return true },
                content: [
                    ["row", [["raw-html", () => { return "<small>Celestial Constellation #" + formatWhole(player.ch.celestialIndex.add(1)) + "</small><br>" + player.ch.celestialTexts[player.ch.celestialIndex] }, { "color": "white", "font-size": "24px", "font-family": "monospace" }],]],
                    ["blank", "25px"],
                    ["row", [["clickable", 12], ["blank", ["50px", "25px"]], ["clickable", 13]]],
                    ["blank", "12.5px"],
                    ["row", [["clickable", 11], ["blank", ["200px", "25px"]], ["clickable", 14]]],
                    ["blank", "6.125px"],
                    ["clickable", 19],
                    ["blank", "6.125px"],
                    ["row", [["clickable", 18], ["blank", ["200px", "25px"]], ["clickable", 15]]],
                    ["blank", "12.5px"],
                    ["row", [["clickable", 17], ["blank", ["50px", "25px"]], ["clickable", 16]]],
                    ["blank", "25px"],
                    ["infobox", 1],
                    ["infobox", 2],
                    ["infobox", 3],
                    ["infobox", 4],
                    ["infobox", 5],
                    ["infobox", 6],
                    ["infobox", 7],
                    ["infobox", 8],
                    ["infobox", 9],
                ]
            },
            "Matos Perks": {
                buttonStyle() { return { color: "white", borderRadius: "5px" } },
                unlocked() { return player.ch.celestialIndex.eq(3) && player.ch.matosDisplay.eq(1) },
                content: [
                    ["blank", "25px"],
                    ["style-column", [
                        ["row", [["raw-html", function () { return "Perks - Matos" }, { "color": "white", "font-size": "24px", "font-family": "monospace" }],]],
                    ], {width: "1000px", border: "3px solid rgb(27, 0, 36)", backgroundImage: "linear-gradient(120deg,rgb(138, 14, 121) 0%,rgb(168, 12, 51) 100%)", borderBottom: "5px", paddingTop: "5px", paddingBottom: "5px", borderRadius: "15px 15px 0px 0px"}],
                    ["style-column", [
                        ["row", [["raw-html", function () { return "Perks - Matos" }, { "color": "white", "font-size": "24px", "font-family": "monospace" }],]],
                    ], {width: "1000px", border: "3px solid rgb(27, 0, 36)", backgroundImage: "linear-gradient(120deg,rgb(138, 14, 121) 0%,rgb(168, 12, 51) 100%)", paddingTop: "5px", paddingBottom: "5px", borderRadius: "0px 0px 15px 15px"}]
                ]
            },
        },
    },
    tabFormat: [
        ["buttonless-microtabs", "stuff", { 'border-width': '0px' }],
        ["blank", "25px"],
    ],
    layerShown() { return player.startedGame && player.fu.defeatedJocus && !player.sma.inStarmetalChallenge}
})
