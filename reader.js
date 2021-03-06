// Reader class     
define([], function() {

    // str is the data to be read
    var Reader = function(str) {
        this.data = str;
        this.currPos = 0;
        this.dataLength = str.length;
    }

    Reader.prototype.nextChar = function() {
        if (this.currPos >= this.dataLength) {
            return -1; // end of stream
        }
        return this.data[this.currPos++];
    };

    // n is the number of characters to be retracted
    Reader.prototype.retract = function(n) {
        if (n == undefined) {
            n = 1;
        }
        this.currPos -= n;
        if (this.currPos < 0) {
            this.currPos = 0;
        }
    };

    return Reader;
});
