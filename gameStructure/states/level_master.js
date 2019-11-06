LevelMasterState.prototype = {
  decideLevelState: function() {
    if (this.isFirstLevel() || this.getWinningPlayer() !== -1) {
      this.nextLevel();
    } else {
      this.nextRound();
    }
  },
  nextLevel: function() {
    this.levelData.level++;

    this.levelData.players.forEach(function(p) {
      p.score = 0;
    }, this);

    this.levelData.round = 1;

    this.game.state.start("level-intro", true, false, this.levelData);
  },
  nextRound: function() {
    this.levelData.round++;
    this.game.state.start("level-round", true, false, this.levelData);
  }
};
