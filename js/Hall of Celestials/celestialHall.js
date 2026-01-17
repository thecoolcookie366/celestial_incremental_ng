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
            background: "linear-gradient(45deg, #8801aa 0%, #0260fe 100%)",
            "background-origin": "border-box",
            "border-color": "#2e0054",
        }
    },
    tooltip: "The Legendary People",
    color: "#0260fe",
    branches: ["cp"],
    update(delta) {
        let onepersec = new Decimal(1)
        
        player.ch.celestialTexts = [
            "Gatekeeper, the Celestial of Gates",
            "Cookie, the Celestial of NG+",
            "smileyfr, the Celestial of fr",
            "Domain, the Celestial of Silliness",
            "Iridite, the Astral Celestial",
            "Aleph, the Celestial of Swarms",
            "Tera, the Celestial of Tiers",
            "Zar, the Celestial of Chance",
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
            tooltip() { return player.ir.iriditeDefeated ? "Iridite, the Astral Celestial" : "" },
            onClick() {
                player.ch.celestialIndex = new Decimal(4)
            },
            style: { width: '50px', "min-height": '50px' }, // Iridite
            branches() {return player.ir.iriditeDefeated ? [14] : []},
        },
        16: {
            title() { return false ? "<h1>ℵ" : "<h1>?" },
            canClick() { return false },
            unlocked() { return true },
            onClick() {
                player.ch.celestialIndex = new Decimal(5)
            },
            style: { width: '50px', "min-height": '50px' }, // Aleph
            branches() {return false ? [15] : []},
        },
        17: {
            title() { return "<h1>?" },
            canClick() { return false },
            unlocked() { return true },
            onClick() {
                //player.ch.celestialIndex = new Decimal(6)
            },
            style: { width: '50px', "min-height": '50px' }, // Tera
        },
        18: {
            title() { return "<h1>?" },
            canClick() { return false },
            unlocked() { return true },
            onClick() {
                //player.ch.celestialIndex = new Decimal(7)
            },
            style: { width: '50px', "min-height": '50px' }, // Zar
        },
        19: {
            title() { return "<h1>∑" },
            canClick() { return false },
            unlocked() { return true },
            onClick() {
                //player.ch.celestialIndex = new Decimal(8)
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
            title: "Domain, the Celestial of Machinery",
            body() { return "placeholder" },
            unlocked() { return player.ch.celestialIndex.eq(3) },      
        },
        5: {
            title: "Iridite, the Astral Celestial",
            body() { return "The first of the novasent, Iridite was born as a member of the celestial hunting corporation. Living her entire life under these conditions, she never got to live her life like a normal human being. One day, she went on a mission that somehow got her turned into a celestial. When she was a celestial, she became obsessed with how celestials are made, and conducted many experiments on countless universes. Nova took sight of this, and asked her to join him as a novasent. She agreed, and was tasked with finding a universe suitable enough for Nova to take over as his own. That's how Nova discovered the domain of singularity." },
            unlocked() { return player.ch.celestialIndex.eq(4) },      
        },
        6: {
            title: "Aleph, the Celestial of Swarms",
            body() { return "From everything that I have heard, Aleph has always been a very strange celestial. She has always lived solely for the sake of furthering the existance of her swarm, even if it might be at the cost of her own well-being. It seems the only thing that matters to her is a prosperous swarm." },
            unlocked() { return player.ch.celestialIndex.eq(5) },      
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
