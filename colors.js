var Tag = {
    swapColor: function (tag) {
        color = $(tag).css('color');
        bgcolor = $(tag).css('background-color');
        $(tag).css('color', bgcolor);
        $(tag).css('background-color', color);
    },
    setColor: function (tag, color) {
        $(tag).css('color', color);
    }
};

function nightDayHandler(self) {
    $(document).ready(function() {
        if (self.value == 'day') {
            Tag.swapColor('body');
            Tag.setColor('a, h1', 'red');
            self.value = 'night';
        } else {
            Tag.swapColor('body');
            Tag.setColor('a, h1', 'blue');
            self.value = 'day';
        }
    });
}
