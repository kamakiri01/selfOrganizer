/**
  * 格子構造の生成
  * @param {number} w - 格子全体のの横サイズ
  * @param {number} h - 格子全体のの縦サイズ (depricated)
  * @param {number} wn - 横方向格子数
  * @param {number} hn - 縦方向格子数 (depricated)
  *
  */
var Latis = enchant.Class.create(enchant.Sprite, {
    initialize: function(w, h, wn, hn){
            enchant.Sprite.call(this, w, h);
            var sf = new enchant.Surface(w, h);
            sf.context.fillStyle = "rgb(" + 255 + "," + 255 + "," + 255 + ")";
            sf.context.fillRect(0, 0, w, h);
            this.surface = sf;
            this.image = this.surface;
            this.wn = wn;
            this.hn = hn;
            this.sideLength = Math.floor(w / wn);

    },
    /**
      * 任意の配列番号に対して着色
      * @param {number} wn - 着色するセルの横番号
      * @param {number} hn - 着色するセルの縦番号
      * @param {number} r - 赤
      * @param {number} g - 緑
      * @param {number} b - 青
      */
    setCellColor: function(wn, hn, r, g, b){
            var px = this.sideLength * wn;
            var py = this.sideLength * hn;
            this.image.context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            this.image.context.fillRect(px, py, this.sideLength, this.sideLength);
    },
    clear: function(){
            this.image.context.fillStyle = "rgb(" + 255 + "," + 255 + "," + 255 + ")";
            this.image.context.fillRect(0, 0, this.width, this.height);
    }
});
