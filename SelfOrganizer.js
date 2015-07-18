var SelfOrganizer = function(wlen, hlen){
    var Cell = function(r, g, b){
        this.r = r;
        this.g = g;
        this.b = b;
        this.getColor = function(){
            return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
        };
    };
    var maxColorValue = 250;
    var minColorValue = 100;
    var map = [];
    var wlen = wlen;
    var hlen = hlen;
    //������
    var init = function(){
        for(var i=0;i<wlen;i++){
            map[i] = [];
            for(var j=0;j<hlen;j++){
                //var r = Math.floor(Math.random() * (maxColorValue - minColorValue) + minColorValue);
                var r = Math.floor(Math.random() * 50 + 200);
                var g = Math.floor(Math.random() * (maxColorValue - minColorValue) + minColorValue);
                var b = Math.floor(Math.random() * (maxColorValue - minColorValue) + minColorValue);
                map[i][j] = new Cell(r, g, b);
                map[i][j].i = i;
                map[i][j].j = j;
            }
        }
    };
    /**
      * �����Z���̎���3-8�̃Z����z�񉻂��ĕԂ�
      * @return {Array.<Cell>}
      */
    var getNearestCells = function(cell){
        var result = [];
        var wn = map.length;
        var hn = map[0].length;
        for(var i=0;i<3;i++){
            for(var j=0;j<3;j++){
                if(map[cell.i-1+i] !== undefined){
                    if(map[cell.i-1+i][cell.j-1+j] !== undefined){
                        result.push(map[cell.i-1+i][cell.j-1+j]);
                    }
                }
            }
        }
        return result;
    }

    /**
      * �Ώۂ̃Z���ɑ΂��ĐF��������
      * @param {cell} cell
      * @param {r} r  
      * @param {g} g  
      * @param {b} b 
      * @param {Number} scale - 0-1�̐V�����F����߂�䗦 
      */
    var confuseCellColor = function(cell, r, g, b, scale){
        var newR  = r * scale + cell.r * (1 - scale);
        var newG  = g * scale + cell.g * (1 - scale);
        var newB  = b * scale + cell.b * (1 - scale);
        cell.r = parseInt(newR, 10);
        cell.g = parseInt(newG, 10);
        cell.b = parseInt(newB, 10);
    };
    /**
      * �����F�ɍł��߂��Z����Ԃ�
      * @param {r} r  
      * @param {g} g  
      * @param {b} b 
      * @return {Cell}
      */
    var getNearestColorCell = function(r, g, b){
        //�F�̋����}�b�v�𐶐�
        var distMap = [];
        for(var i=0;i<wlen;i++){
            distMap[i] = [];
            for(var j=0;j<hlen;j++){
                var distR = Math.pow(map[i][j].r - r, 2);
                var distG = Math.pow(map[i][j].g - g, 2);
                var distB = Math.pow(map[i][j].b - b, 2);
                var dist = Math.sqrt(distR + distG + distB);
                distMap[i][j] = {};
                distMap[i][j].n = dist;
                distMap[i][j].i = map[i][j].i;
                distMap[i][j].j = map[i][j].j;
            }
        }
        //�ŏ��̋�����I��
        for(var i=0;i<wlen;i++){
            distMap[i].sort(function(a,b){
                    if( a.n < b.n ) return -1;
                    if( a.n > b.n ) return 1;
                    return 0;
            });
        }
        distMap.sort(function(a,b){
                if( a[0].n < b[0].n ) return -1;
                if( a[0].n > b[0].n ) return 1;
                return 0;
        });
        return distMap[0][0];
    }
    /**
      * ��A�̏�ԑ���
      */
     var evolution = function(){
         //�����_���ɖ\�I����F�𐶐�
         //var r = Math.floor(Math.random() * (maxColorValue - minColorValue) + minColorValue);
         var r = Math.floor(Math.random() * 50 + 200);
         var g = Math.floor(Math.random() * (maxColorValue - minColorValue) + minColorValue);
         var b = Math.floor(Math.random() * (maxColorValue - minColorValue) + minColorValue);
         //���������F�ɂ����Ƃ��߂��F�̃Z�����擾
         var targ = getNearestColorCell(r, g, b);
         //�\�I����Z���z����擾
         var confusingCells = getNearestCells(targ);
         //�F�̖\�I
         confuseCellColor(targ, r, g, b, 0.2);
         for(var i=0;i<confusingCells.length;i++){
            confuseCellColor(confusingCells[i], r, g, b, 0.3);
         }
    };
    return {
        map: map,
        wlen: wlen,
        hlen: hlen,
        init: init,
        evolution: evolution
        
    }
};
this.SelfOrganizer = SelfOrganizer;
//usage
//var Selforganizer = Selforganizer || require('thisFileName').Selforganizer;
