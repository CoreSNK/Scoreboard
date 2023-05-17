const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "Houston",
      points: 107,
      isWinner: true,
    },
    homeTeam: {
      team: "Golden State",
      points: 101,
      isWinner: false,
    },
  },
];

const makeChart = (games) => {
  const ulParent = document.createElement("ul");
  for (let game of games) {
    const { homeTeam, awayTeam } = game;
    const gameLi = document.createElement("li");
    const { team: hTeam, points: hPoints } = homeTeam;
    const { team: aTeam, points: aPoints } = awayTeam;
    const teamNames = `${aTeam} @ ${hTeam}`;
    let scoreLine;
    if (aPoints > hPoints) {
      scoreLine = `<b>${aPoints}</b>-${hPoints}`;
    } else {
      scoreLine = `${aPoints} - <b>${hPoints}</b>`;
    }
    const warriors = hTeam === "Golden State" ? homeTeam : awayTeam;
    gameLi.classList.add(warriors.isWinner ? "win" : "loss");
    gameLi.innerHTML = `${teamNames} ${scoreLine}`;
    ulParent.appendChild(gameLi);
  }
  return ulParent;
};

const chart1 = makeChart(warriorsGames);
document.body.prepend(chart1);
