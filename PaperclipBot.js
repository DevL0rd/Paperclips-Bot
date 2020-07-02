var _$ = $;
var waitForMarketingUpgradeTime = 20000;
function log(text) {
    console.log(text);
}
function clickThings() {
    if (unsoldClips < 600) {
        clipClick(1);
    }
    computeStuff();
    stockWire();
}
function timeToMarketUpgrade() {

    // (avgRev
}
function balanceThings() {
    balanceSellRate();
    getUpgrades();
    if (!_$("#btnLowerPrice").disabled) {
        getAutoClippers();
    }
    doTourny();
    upgradeInvestmentEngine();
    getMarketing();
    getCpusAndMemory();
}
function pickStrat() {
    var bestStrat = getBestStrat();
    _$("#stratPicker").value = bestStrat;
}
function getBestStrat() {
    var bestStrat;
    for (i in strats) {
        var strat = strats[i];
        if (strat.active) bestStrat = i;
    }
    return bestStrat;
}
function doTourny() {
    if (!_$("#btnNewTournament").disabled) {
        log("Starting new tournament with best strat.");
        _$("#btnNewTournament").click();
        pickStrat();
        _$("#btnRunTournament").click();
    }
}
function getAutoClippers() {
    if (_$("#megaClipperDiv").style.display == "none") {
        if (wireCost + clipperCost <= funds) {
            _$("#btnMakeClipper").click()
            log("Buying auto clippers.")
        }
    } else {
        if (wireCost + megaClipperCost <= funds) {
            _$("#btnMakeMegaClipper").click()
            log("Buying mega clippers.")
        }
    }

}
function getMarketing() {
    if (!_$("#btnExpandMarketing").disabled) {
        _$("#btnExpandMarketing").click()
        log("Buying marketing upgrade.")
    }
}
function getCpusAndMemory() {
    if (trust > 0) {
        if (processors < 5) {
            log("Buying processor.")
            _$("#btnAddProc").click()
        } else {
            if (memory < 50) {
                log("Buying memory.")
                _$("#btnAddMem").click()
            } else {
                if (processors < 20) {
                    log("Buying processor.")
                    _$("#btnAddProc").click()
                } else {
                    log("Buying memory.")
                    _$("#btnAddMem").click()
                }
            }
        }
    }
}
function upgradeInvestmentEngine() {
    if (!_$("#btnImproveInvestments").disabled) {
        log("Buying investment engine upgrade.")
        _$("#btnImproveInvestments").click()
    }
}
function balanceSellRate() {
    if (avgSales >= clipRate * 0.8) {
        _$("#btnRaisePrice").click();
    } else {
        _$("#btnLowerPrice").click();
    }
}
function getUpgrades() {
    var upgrds = _$("#projectListTop").getElementsByClassName("projectButton")
    for ($upgrd of upgrds) {
        if ($upgrd.style.visibility == "visible" && !$upgrd.disabled) {
            $upgrd.click();
            log("Got upgrade.")
            return //don't click all, it is glitchy
        }
    }
}
function stockWire() {
    if (!wireBuyerStatus && wire <= 100 && wireCost <= funds) {
        _$("#btnBuyWire").click();
        log("Bought 'Wire'.");
    }
}
function computeStuff() {
    var q = 0;
    for (var i = 0; i < qChips.length; i++) {
        if (qChips[i].active) q += qChips[i].value;

    }
    if (q > 0) qComp();
}
var clickInterval;
var balanceInterval
function start() { clickInterval = setInterval(clickThings, 1); balanceInterval = setInterval(balanceThings, 2000) }
function stop() { clearInterval(clickInterval); clearInterval(balanceInterval); }
stop();
start();