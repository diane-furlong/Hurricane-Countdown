window.onload = function(e){

    var $clock = $('#currentDay'),
        eventTime = moment('04-08-2021 16:00:00', 'DD-MM-YYYY HH:mm:ss').unix(),
        currentTime = moment().unix(),
        diffTime = eventTime - currentTime,
        duration = moment.duration(diffTime * 1000, 'milliseconds'),
        interval = 1000;

    // if time to countdown
    if(diffTime > 0) {

        var $mo = $('<div class="months" ></div>').appendTo($clock),
            $d = $('<div class="days" ></div>').appendTo($clock),
            $h = $('<div class="hours" ></div>').appendTo($clock),
            $m = $('<div class="minutes" ></div>').appendTo($clock),
            $s = $('<div class="seconds" ></div>').appendTo($clock);

        setInterval(function(){

            duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
            var mo = moment.duration(duration).months()
                d = moment.duration(duration).days(),
                h = moment.duration(duration).hours(),
                m = moment.duration(duration).minutes(),
                s = moment.duration(duration).seconds();

            //d = $.trim(d).length === 1 ? '0' + d : d;
            // h = $.trim(h).length === 1 ? '0' + h : h;
            // m = $.trim(m).length === 1 ? '0' + m : m;
            // s = $.trim(s).length === 1 ? '0' + s : s;

            // show how many hours, minutes and seconds are left
            $mo.text(mo+" months, "+d+" days, "+h+" hours, "+m+" minutes, "+s+" seconds");
 

        }, interval);

    }
    
    }
