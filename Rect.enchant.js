/**
  * �i�q�\���̐���
  * @param {number} w - �i�q�S�̂̂̉��T�C�Y
  * @param {number} h - �i�q�S�̂̂̏c�T�C�Y (depricated)
  * @param {number} wn - �������i�q��
  * @param {number} hn - �c�����i�q�� (depricated)
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
      * �C�ӂ̔z��ԍ��ɑ΂��Ē��F
      * @param {number} wn - ���F����Z���̉��ԍ�
      * @param {number} hn - ���F����Z���̏c�ԍ�
      * @param {number} r - ��
      * @param {number} g - ��
      * @param {number} b - ��
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
