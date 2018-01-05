/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* the js */

(function($){
    $.fn.countdown = function(custom_options) {
        var options = {
            'lang': "fr"
            //'timestamp': integer
        };

        //var timestamp_url = './buenos-aires.php?callback=var%20data%20=';
        var timestamp_url = 'https://countdown.omegawatches.com/minisites/buenosaires2018/buenos-aires.php';

        var to_nice_number = function(number) {
            number = String(number);
            if (number.length < 2) {
                number = "0" + number;
            }
            return number;
        };

        var local_get_time = function(tz_offset) {
            var utc = new Date().getTime() / 1000;
            var local = utc - tz_offset * 60;
            return local;
        };
        var utc_get_time = function() {
            var utc = new Date().getTime() / 1000;
            return utc;
        };

        var translations = {
            'de': {
                'days': "TAGE",
                'day': "TAG",
                'hours': "H",
                'minutes': "MIN",
                'seconds': "S"
            },
            'en': {
                'days': "DAYS",
                'day': "DAY",
                'hours': "HRS",
                'minutes': "MINS",
                'seconds': "SECS"
            },
            'fr': {
                'days': "JOURS",
                'day': "JOUR",
                'hours': "HRS",
                'minutes': "MINS",
                'seconds': "SECS"
            },
            'es': {
                'days': "D&Iacute;AS",
                'day': "D&Iacute;A",
                'hours': "HRS",
                'minutes': "MINS",
                'seconds': "SEGS"
            }


        };
        $.extend(options, custom_options);
        translations = translations[options.lang];

        this.each(function(){

            var _self = $(this);
            var tz_offset = new Date().getTimezoneOffset();
            var $countdown = _self.find(".countdown");
            var $days = _self.find(".days_remaining");
            var $hours = _self.find(".hours_remaining");
            var $minutes = _self.find(".minutes_remaining");
            var $seconds = _self.find(".seconds_remaining");
            var $all_countdown_digits = _self.find(".cd_remain");
            var $clock = _self.find(".clock");
            var $clock_hours = _self.find(".clock_hours");
            var $clock_minutes = _self.find(".clock_minutes");
            var $clock_seconds = _self.find(".clock_seconds");
            var target = 0;

            _self.find(".days_label").html(translations.days);
            _self.find(".hours_label").html(translations.hours);
            _self.find(".minutes_label").html(translations.minutes);
            _self.find(".seconds_label").html(translations.seconds);
            _self.find("p").html(translations.bis_zur);

            var update_remaining = function () {
                var current_utc = utc_get_time();
                //var timeDiff = Math.abs(target_time.getTime() - current_time.getTime());
                var timeDiff = target - current_utc;

                if (timeDiff <= 0 && timeDiff > -10) {
                    // blink mode
                    if ($all_countdown_digits.is(":visible")) {
                        $all_countdown_digits.hide(0);
                    } else {
                        $all_countdown_digits.show(0);
                    }
                } else if (timeDiff <= 0) {
                    // clock mode
                    $clock.show(0);
                    $countdown.hide(0);
                    var current = local_get_time(tz_offset);
                    var hours = Math.ceil((current / (3600)) % 24) - 1;
                    var minutes = Math.ceil((current / (60)) % 60) - 1;
                    var seconds = Math.ceil(current % 60) - 1;
                    $clock_hours.html(to_nice_number(hours));
                    $clock_minutes.html(to_nice_number(minutes));
                    $clock_seconds.html(to_nice_number(seconds));
                } else {
                    // countdown mode
                    $countdown.show(0);
                    var diffDays = Math.ceil(timeDiff / (3600 * 24)) - 1;
                    var diffHours = Math.ceil((timeDiff / (3600)) % 24) - 1;
                    var diffMinutes = Math.ceil((timeDiff / (60)) % 60) - 1;
                    var diffSeconds = Math.ceil(timeDiff % 60) - 1;
                    $days.html(to_nice_number(diffDays));
                    $hours.html(to_nice_number(diffHours));
                    $minutes.html(to_nice_number(diffMinutes));
                    $seconds.html(to_nice_number(diffSeconds));
                    if (diffDays == 1) {
                        _self.find(".days_label").html(translations.day);
                    } else if (diffDays == 0) {
                        _self.find(".days_label").html(translations.days);
                    }
                }
            };

            if (options.timestamp) {
                target = options.timestamp;
                update_remaining();
                window.setInterval(update_remaining(), 1000);
            } else {
                $.ajax({
                    type: "GET",
                    url: timestamp_url,
                    dataType: "script",
                    context: _self,
                    error: function(xmlhttp, error_msg){
                        console.log("could not load timestamp for countdown!");
                    },
                    success: function() {
                        target = new Date(data.targetDate).getTime();
                        update_remaining();
                        setInterval(update_remaining, 1000);
                    }
                });
            };
        })
    }
});
