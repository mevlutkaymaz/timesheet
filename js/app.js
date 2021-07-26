// Time entry defaults
$(function () {
    $('.timecard').timeEntry({ ampmPrefix: ' ' });
    $('.timecard').timeEntry({ spinnerImage: '' });
    /*    $('.timecard').timeEntry({defaultTime: '00:00AM'}); */
});


// Function to show / hide 3rd week and clear values when period is changed
$(window).on('load', function () {
    var PeriodSelector = jQuery('#PeriodSelector');
    PeriodSelector.change(function () {
        for (let j = 10; j <= 30; j++) {
            $("#in_1_" + j).val("");
            $("#out_1_" + j).val("");
            $("#in_2_" + j).val("");
            $("#out_2_" + j).val("");
            $("#total_d" + j).empty("");
            $("#break_d" + j).empty("");
            $("#total_w1").empty("");
            $("#total_w2").empty("");
            $("#total_w3").empty("");
            $("#overtime_w1").empty("");
            $("#overtime_w2").empty("");
            $("#overtime_w3").empty("");
            $("#total_regular").empty("");
            $("#total_overtime").empty("");
        }

        // 3 week periods for 2020-2021: 1, 5, 13, 19, 22

        if ($(this).val() == 'period1' || $(this).val() == 'period5' || $(this).val() == 'period13' || $(this).val() == 'period19' || $(this).val() == 'period22') {
            $('#week3').fadeIn(1000);
        }

        else { $('#week3').fadeOut(1000); }
    });
});


 /* Function to limit scheduled work hours between 0 and 120
        var scheduledhour = 0;
        function scheduledhourlimiter() {
            scheduledhour = 0;
            do {
                scheduledhour = parseInt(window.prompt("What's your scheduled work hours for this period? Interns enter 0.", ""), 10);
            } while (isNaN(scheduledhour) || scheduledhour > 120 || scheduledhour < 0);
 
            $('#scheduledhours').val(scheduledhour);
            calculate();
        }
        */


        // Function to fill out week days
        $(window).on('load', function () {
            var x = jQuery('#PeriodSelector');
            x.change(function () {
              
                if ($(this).val() == 'period2') {
                    $('#submitdate1').html("07/26/2021"); $('#submitdate2').html("08/08/2021"); filldays("2021-7-26");
                }
                if ($(this).val() == 'period3') {
                    $('#submitdate1').html("08/09/2021"); $('#submitdate2').html("09/22/2021"); filldays("2021-8-9");
                }
                if ($(this).val() == 'period4') {
                    $('#submitdate1').html("08/23/2021"); $('#submitdate2').html("09/05/2021"); filldays("2021-8-23");
                }
                if ($(this).val() == 'period5') {
                    $('#submitdate1').html("09/06/2021"); $('#submitdate2').html("09/19/2021"); filldays("2021-9-6");
                }
                if ($(this).val() == 'period6') {
                    $('#submitdate1').html("09/20/2021"); $('#submitdate2').html("10/03/2021"); filldays("2021-9-20");
                }
                if ($(this).val() == 'period7') {
                    $('#submitdate1').html("10/04/2021"); $('#submitdate2').html("10/17/2021"); filldays("2021-10-4");
                }
                if ($(this).val() == 'period8') {
                    $('#submitdate1').html("10/18/2021"); $('#submitdate2').html("10/31/2021"); filldays("2021-10-18");
                }
                if ($(this).val() == 'period9') {
                    $('#submitdate1').html("11/01/2021"); $('#submitdate2').html("11/14/2021"); filldays("2021-11-1");
                }
                if ($(this).val() == 'period10') {
                    $('#submitdate1').html("11/15/2021"); $('#submitdate2').html("11/28/2021"); filldays("2021-11-15");
                }
                if ($(this).val() == 'period11') {
                    $('#submitdate1').html("11/29/2021"); $('#submitdate2').html("12/12/2021"); filldays("2021-11-2");
                }
                if ($(this).val() == 'period12') {
                    $('#submitdate1').html("12/13/2021"); $('#submitdate2').html("12/26/2021"); filldays("2021-12-13");
                }
                if ($(this).val() == 'period13') {
                    $('#submitdate1').html("12/27/2021"); $('#submitdate2').html("01/09/2022"); filldays("2021-12-27");
                }
                if ($(this).val() == 'period14') {
                    $('#submitdate1').html("01/10/2022"); $('#submitdate2').html("01/23/2022"); filldays("2022-1-10");
                }
                if ($(this).val() == 'period15') {
                    $('#submitdate1').html("01/24/2022"); $('#submitdate2').html("02/06/2022"); filldays("2022-1-24");
                }
                if ($(this).val() == 'period16') {
                    $('#submitdate1').html("02/07/2022"); $('#submitdate2').html("02/20/2022"); filldays("2022-2-7");
                }
                if ($(this).val() == 'period17') {
                    $('#submitdate1').html("02/21/2022"); $('#submitdate2').html("03/06/2022"); filldays("2022-2-21");
                }
                if ($(this).val() == 'period18') {
                    $('#submitdate1').html("03/07/2022"); $('#submitdate2').html("03/20/2022"); filldays("2022-3-7");
                }
                if ($(this).val() == 'period19') {
                    $('#submitdate1').html("03/21/2022"); $('#submitdate2').html("04/03/2022"); filldays("2022-3-21");
                }
                if ($(this).val() == 'period20') {
                    $('#submitdate1').html("04/04/2022"); $('#submitdate2').html("04/17/2022"); filldays("2022-4-4");
                }
                if ($(this).val() == 'period21') {
                    $('#submitdate1').html("04/18/2022"); $('#submitdate2').html("05/01/2022"); filldays("2022-4-18");
                }
                if ($(this).val() == 'period22') {
                    $('#submitdate1').html("05/02/2022"); $('#submitdate2').html("05/15/2022"); filldays("2022-5-2");
                }
                if ($(this).val() == 'period23') {
                    $('#submitdate1').html("05/16/2022"); $('#submitdate2').html("05/29/2022"); filldays("2022-5-16");
                }
                if ($(this).val() == 'period24') {
                    $('#submitdate1').html("05/30/2022"); $('#submitdate2').html("06/12/2022"); filldays("2022-5-30");
                }
                calculate();
                $('.holidayWarning').show();
                $('#regularHoursDefLabel').show();
            });

            function filldays(sent_date) {

                $(".checkboxes").show();

                var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

                var wd = 0;
                var md = 0;
                var month_of_date = 0;
                var year_of_date = 0;

                for (let k = 0; k < 21; k++) {
                    var d = new Date(sent_date.replace(/-/g, '\/').replace(/T.+/, ''));  //If .replace not added, JS returns one previous day for new Date

                    d.setDate(d.getDate() + k);

                    wd = d.getDay();
                    md = d.getDate();

                    month_of_date = d.getMonth();
                    year_of_date = d.getFullYear();

                    $("#day" + k).html(dayNames[wd] + ", " + monthNames[month_of_date] + " " + md + ", " + year_of_date);
                    $("#holiday" + k).prop('checked', false);
                    $("#asterisk" + k).hide();
                } //Iteration ends here

                // Hide July 27 - 2020
                if (jQuery('#PeriodSelector').val() == "period1") {
                    $("#day0").html("");
                    $("#holiday0").hide();
                }

                // Hide August 1 - 2021
                if (jQuery('#PeriodSelector').val() == "period24") {
                    $("#day13").html("");
                    $("#holiday13").hide();
                }
            };
        });


        // Function to print asterisk next to selected days (holidays and non work days)
        function addAsteriskToDate(dayNumber) {
            var holiday_status = document.getElementById('holiday' + dayNumber).checked;

            if (holiday_status) { $("#asterisk" + dayNumber).show(); }
            else { $("#asterisk" + dayNumber).hide(); }

            calculate();

        };


        // Function to control cell width for rotated text
        $(document).ready(function () {
            $('.rotate').css('height', $('.rotate').width());
            $('.checkboxes').hide();
            $('.timeentry-control').hide();
            $('.holidayWarning').hide();
            $('#regularHoursDefLabel').hide();
        })


        var check_break = 0;
        var check_day = "";
        var check_daily_total = 0;
        // Function to check campus, name and position fields also errors before printing
        function check_before_print() {

            // Check for negative break
            check_break = 0;
            check_day = "";
            for (let i = 10; i < 31; i++) {
                check_break = parseFloat($("#break_d" + i).text());
                check_day = $("#day" + (i - 10)).text().slice(0, -6);
                if (check_break != NaN && check_break < 0) {
                    alert("You made a mistake on " + check_day + " entry. Click ok to correct it.");
                    $("#out_1_" + i).focus();
                    return;
                }
            }

            // Check for negative daily time total
            check_daily_total = 0;
            for (let i = 10; i < 31; i++) {
                check_daily_total = parseFloat($("#total_d" + i).text());
                check_day = $("#day" + (i - 10)).text().slice(0, -6);
                if (check_daily_total != NaN && check_daily_total < 0) {
                    alert("You made a mistake on " + check_day + " entry. Click ok to correct it.");
                    $("#in_1_" + i).focus();
                    return;
                }
            }

            // Check if name, position and campus fields are filled
            var name_field = jQuery('#fullname').val();
            var position_field = jQuery('#position').val();
            var campus_field = jQuery('#CampusSelector').val();

            if (name_field && position_field != "Choose Position" && campus_field != "Choose Campus") {
                window.print();
            } else {
                if (name_field && campus_field != "Choose Campus") {
                    alert("Please choose your job title before printing");
                    $('#position').focus();
                }
                else {
                    if (position_field != "Choose Position" && campus_field != "Choose Campus") {
                        alert("Please type your full name before printing");
                        $('#fullname').focus();
                    } else {
                        if (campus_field != "Choose Campus") {
                            alert("Please type your full name and choose job title before printing");
                            $('#fullname').focus();
                        }
                        else {
                            if (campus_field == "Choose Campus" && name_field && position_field != "Choose Position") {
                                alert("Please choose your campus before printing");
                                $('#CampusSelector').focus();
                            }
                            else {
                                alert("Please choose your campus, position and type your name before printing");
                                $('#CampusSelector').focus();
                            }
                        }
                    }
                }
            }
        }

        // Function to check if any day has more than 10 hours of work
        function checkTooMuchHour() {
            check_day = "";
            check_daily_total = 0;
            for (let i = 10; i < 31; i++) {
                check_daily_total = parseFloat($("#total_d" + i).text());
                check_day = $("#day" + (i - 10)).text().slice(0, -6);
                if (check_daily_total != NaN && check_daily_total >= 10) {
                    var toomuchHour = confirm(check_day + " shows " + check_daily_total + " hours of work. Click Cancel if you want to go back and check for a possible mistake. Or click OK to continue with printing.");
                    if (toomuchHour) {
                        window.print();
                    }
                    else {
                        $("#in_1_" + i).focus();
                        return;
                    }
                }
                else {
                    window.print();
                }
            }
        }

        // Function to hide Scheduled, Unscheduled, Absence hours if position is Intern
        function checkIntern() {
            var position_chosen = jQuery('#position').val();
            if (position_chosen == "Intern") {
                $('#scheduledhours').hide();
                $('#unscheduledhours').hide();
                $('#absence').hide();
                $('#total_tardy').hide();
            }
            else {
                $('#scheduledhours').show();
                $('#unscheduledhours').show();
                $('#absence').show();
                $('#total_tardy').show();
            }
        }

        // Function to do calculations
        function calculate() {
            //var row=field.id;

            /* Check if the pay period is chosen */
            var Period_chosen = jQuery('#PeriodSelector');
            var campus_chosen = jQuery('#CampusSelector');

            if (Period_chosen.val() == 'period0') {
                alert("Please choose the pay period before entering time");
                $('#PeriodSelector').focus();
            }


            var i = 10;
            var weekly_total = 0;
            var weekly_total_ot = 0;
            var overall_total_reg = 0;
            var overall_total_ot = 0;
            var week_1_reg = 0;
            var week_2_reg = 0;
            var week_3_reg = 0;
            var week_1_ot = 0;
            var week_2_ot = 0;
            var week_3_ot = 0;
            var holiday_total_hours = 0;
            var interimVar = 0;

            var daily_scheduled = 8;
            var week_1_scheduled = 0;
            var week_2_scheduled = 0;
            var week_3_scheduled = 0;
            var week_1_unscheduled = 0;
            var week_2_unscheduled = 0;
            var week_3_unscheduled = 0;
            var overall_total_scheduled = 0;
            var overall_total_unscheduled = 0;

            var week_1_absence = 0;
            var week_2_absence = 0;
            var week_3_absence = 0;
            var overall_total_absence = 0;
            var week_1_decimalAbsence = 0;
            var week_2_decimalAbsence = 0;
            var week_3_decimalAbsence = 0;
            
            var daily_tardy = 0;
            var total_tardy = 0;
            var week_1_tardy = 0;
            var week_2_tardy = 0;
            var week_3_tardy = 0;



            for (i = 10; i < 31; i++) {

                var time_in_1 = $("#in_1_" + i).val();
                var time_out_1 = $("#out_1_" + i).val();
                var time_in_2 = $("#in_2_" + i).val();
                var time_out_2 = $("#out_2_" + i).val();

                var hh_in_1 = Number(time_in_1.substr(0, 2));
                var mm_in_1 = Number(time_in_1.substr(3, 2));
                var ampm_in_1 = time_in_1.substr(6, 2);

                var hh_out_1 = Number(time_out_1.substr(0, 2));
                var mm_out_1 = Number(time_out_1.substr(3, 2));
                var ampm_out_1 = time_out_1.substr(6, 2);

                var hh_in_2 = Number(time_in_2.substr(0, 2));
                var mm_in_2 = Number(time_in_2.substr(3, 2));
                var ampm_in_2 = time_in_2.substr(6, 2);

                var hh_out_2 = Number(time_out_2.substr(0, 2));
                var mm_out_2 = Number(time_out_2.substr(3, 2));
                var ampm_out_2 = time_out_2.substr(6, 2);



                if (ampm_in_1 == "AM") {
                    if (hh_in_1 == 12)
                        hh_in_1 = 0;
                }
                if (ampm_in_1 == "PM") {
                    if (hh_in_1 != 12)
                        hh_in_1 = hh_in_1 + 12;
                }


                if (ampm_out_1 == "AM") {
                    if (hh_out_1 == 12)
                        hh_out_1 = 0;
                }
                if (ampm_out_1 == "PM") {
                    if (hh_out_1 != 12)
                        hh_out_1 = hh_out_1 + 12;
                }


                if (ampm_in_2 == "AM") {
                    if (hh_in_2 == 12)
                        hh_in_2 = 0;
                }
                if (ampm_in_2 == "PM") {
                    if (hh_in_2 != 12)
                        hh_in_2 = hh_in_2 + 12;
                }


                if (ampm_out_2 == "AM") {
                    if (hh_out_2 == 12)
                        hh_out_2 = 0;
                }
                if (ampm_out_2 == "PM") {
                    if (hh_out_2 != 12)
                        hh_out_2 = hh_out_2 + 12;
                }



                time_in_1 = new Date(2011, 0, 1, hh_in_1, mm_in_1, 0);
                time_out_1 = new Date(2011, 0, 1, hh_out_1, mm_out_1, 0);
                time_in_2 = new Date(2011, 0, 1, hh_in_2, mm_in_2, 0);
                time_out_2 = new Date(2011, 0, 1, hh_out_2, mm_out_2, 0);

                var time_diff = 0;
                var break_diff;

                if (ampm_in_1 && ampm_out_1 && ampm_in_2 && ampm_out_2) { time_diff = ((time_out_2 - time_in_2) + (time_out_1 - time_in_1)) / 1000; }
                else {
                    if (ampm_in_1 && ampm_out_1 && ampm_in_2) { time_diff = 0; }
                    else {
                        if (ampm_in_1 && ampm_out_1 && ampm_out_2) { time_diff = 0; }
                        else {
                            if (ampm_in_1 && ampm_in_2 && ampm_out_2) { time_diff = 0; }
                            else {
                                if (ampm_out_1 && ampm_in_2 && ampm_out_2) { time_diff = 0; }
                                else {
                                    if (ampm_in_1 && ampm_out_1) { time_diff = (time_out_1 - time_in_1) / 1000; }
                                    else {
                                        if (ampm_in_1 && ampm_out_2) { time_diff = (time_out_2 - time_in_1) / 1000; }
                                        else {
                                            if (ampm_in_2 && ampm_out_2) { time_diff = (time_out_2 - time_in_2) / 1000; }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                // Break calculation
                if (ampm_out_1 && ampm_in_2) {
                    break_diff = (time_in_2 - time_out_1) / 1000;
                    var break_diff_hours = Math.floor(break_diff / 3600);
                    var break_diff_minutes = Math.floor((break_diff - (break_diff_hours * 3600)) / 60);
                    var break_diff_decimal = break_diff / 3600;
                    break_diff_decimal = Math.round(break_diff_decimal * 100) / 100;

                    // Activate this to display break in hours and minutes
                    /*
                    if (break_diff_hours < 10) { break_diff_hours = "0" + break_diff_hours; }
                    if (break_diff_minutes < 10) { break_diff_minutes = "0" + break_diff_minutes; }
                    jQuery("#break_d" + i).html(break_diff_hours + ":" + break_diff_minutes);
                    */
                    jQuery("#break_d" + i).html(break_diff_decimal.toFixed(2));
                }
                else {
                    jQuery("#break_d" + i).html(" ");
                }

                // Daily total hours calculation
                var time_diff_hours = Math.floor(time_diff / 3600);
                var time_diff_minutes = Math.floor((time_diff - (time_diff_hours * 3600)) / 60);
                var time_diff_decimal;

                // Activate this to display daily total hour in hours and minutes
                /*
                var time_diff_hours_display;
                var time_diff_minutes_display;
                
                if (time_diff_hours < 10) { time_diff_hours_display = "0" + time_diff_hours; }
                else {
                    time_diff_hours_display = time_diff_hours;
                }
                if (time_diff_minutes < 10) { time_diff_minutes_display = "0" + time_diff_minutes; }
                else {
                    time_diff_minutes_display = time_diff_minutes;
                }
                jQuery("#total_d" + i).html(time_diff_hours_display + ":" + time_diff_minutes_display);
                */

                time_diff_decimal = time_diff / 3600;
                time_diff_decimal = Math.round(time_diff_decimal * 100) / 100;
                jQuery("#total_d" + i).html(time_diff_decimal.toFixed(2));


                // Daily absence calculation

                var dailyAbsence = 0;


                switch (true) {
                    case (time_diff_decimal == 0): dailyAbsence = 8; break;
                    case (time_diff_decimal > 0 && time_diff_decimal <= 2): dailyAbsence = 6; break;
                    case (time_diff_decimal > 2 && time_diff_decimal <= 4): dailyAbsence = 4; break;
                    case (time_diff_decimal > 4 && time_diff_decimal <= 6): dailyAbsence = 2; break;
                    case (time_diff_decimal > 6): dailyAbsence = 0; break;
                }

                var dailyDecimalAbsence = Math.max(0, (8 - time_diff_decimal));

                // Daily tardy calculation
                
                daily_tardy = 0;
                daily_tardy = ((time_diff_hours + ((time_diff_minutes) / 60))%2);

                // Eliminate time entry for July 27, 2020 and August 1,2021

                if (jQuery('#PeriodSelector').val() == "period1") {
                    jQuery("#total_d10").html("");
                    if (i == 10) {
                        time_diff_hours = 0;
                        time_diff_minutes = 0;
                        dailyAbsence = 0;
                        daily_scheduled = 0;
                        dailyDecimalAbsence = 0;
                        daily_tardy = 0;
                    }
                    else { daily_scheduled = 8; }
                }
                
                if (jQuery('#PeriodSelector').val() == "period24") {
                    jQuery("#total_d23").html("");
                    if (i == 23) {
                        time_diff_hours = 0;
                        time_diff_minutes = 0;
                        dailyAbsence = 0;
                        daily_scheduled = 0;
                        dailyDecimalAbsence = 0;
                        daily_tardy = 0;
                    }
                    else { daily_scheduled = 8; }
                }

                // Eliminate absence calculated for Saturdays and Sundays

                if (i == 15 || i == 16 || i == 22 || i == 23 || i == 29 || i == 30) { 
                  dailyAbsence = 0;
                  dailyDecimalAbsence = 0;
                  daily_tardy = 0;
                }

                // Eliminate absence calculated for 3rd week on 2 week periods
                // 3 week periods for 2020-2021: 1, 5, 13, 19, 22
                if (jQuery('#PeriodSelector').val() != "period1" && jQuery('#PeriodSelector').val() != "period5" && jQuery('#PeriodSelector').val() != "period13" && jQuery('#PeriodSelector').val() != "period19" && jQuery('#PeriodSelector').val() != "period22") {
                    if (i == 24 || i == 25 || i == 26 || i == 27 || i == 28) { dailyAbsence = 0; dailyDecimalAbsence = 0; daily_tardy = 0; }
                }

                // Eliminate absence calculated for marked holidays

                if (i != 15 && i != 16 && i != 22 && i != 23 && i != 29 && i != 30) {
                    var dayCounter = i - 10;

                    var holiday_status_calc = document.getElementById('holiday' + dayCounter).checked;

                    if (holiday_status_calc) {
                        dailyAbsence = 0;
                        dailyDecimalAbsence = 0;
                        daily_tardy = 0;
                    }
                }
                
                
                /* Total Tardy calculation */
                
                
                if(daily_tardy > 0 && (time_diff_hours + ((time_diff_minutes) / 60)) < 8 && daily_tardy < 1.83333333333333333333333333) { // 1.83 is 1 hour 50 minutes. Tardy is calculated only if tardy is more than 10 minutes. 
                    daily_tardy = 2 - daily_tardy;
                    total_tardy = total_tardy + daily_tardy;
                    if (i <= 16) {
                        week_1_tardy = week_1_tardy + daily_tardy;
                    }
                    if (i > 16 && i <= 23) {
                        week_2_tardy = week_2_tardy + daily_tardy;
                    }
                    if (i > 23 && i <= 30) {
                        week_3_tardy = week_3_tardy + daily_tardy;
                    }
                }
                jQuery("#total_tardy").html(total_tardy.toFixed(2));



                /* Week 1 totals calculation */
                if (i <= 16) {
                    weekly_total = weekly_total + time_diff_hours + ((time_diff_minutes) / 60);
                    
                    if (weekly_total < 40 && weekly_total >= 0) {
                        week_1_reg = weekly_total;
                        week_1_ot = 0;
                        interimVar = weekly_total + holiday_total_hours;
                        jQuery("#total_w1").html(interimVar.toFixed(2));
                        jQuery("#overtime_w1").html("0.00");
                    }
                    else {
                        if (weekly_total >= 40 && weekly_total > 0) {

                            weekly_total_ot = weekly_total - 40;
                            week_1_reg = 40;
                            week_1_ot = weekly_total_ot;
                            interimVar = 40 + holiday_total_hours;
                            jQuery("#total_w1").html(interimVar.toFixed(0));
                            jQuery("#overtime_w1").html(weekly_total_ot.toFixed(2));
                        }
                    }

                    // Calculate week 1 scheduled hours
                    if (i != 15 && i != 16 && i != 22 && i != 23 && i != 29 && i != 30) {
                        holiday_status_calc = document.getElementById('holiday' + dayCounter).checked;

                        if (!holiday_status_calc) {
                            week_1_scheduled = week_1_scheduled + daily_scheduled;
                        }


                    }

                    // Calculate Week 1 absence
                    week_1_absence = week_1_absence + dailyAbsence;
                    week_1_decimalAbsence = week_1_decimalAbsence + dailyDecimalAbsence;
                }

                
                /* Week 2 totals calculation */
                if (i == 17) { weekly_total = 0; holiday_total_hours = 0; interimVar = 0; }
                if (i > 16 && i <= 23) {
                    weekly_total = weekly_total + time_diff_hours + ((time_diff_minutes) / 60);
                    
                    if (weekly_total < 40 && weekly_total >= 0) {
                        week_2_reg = weekly_total;
                        week_2_ot = 0;
                        interimVar = weekly_total + holiday_total_hours;
                        jQuery("#total_w2").html(interimVar.toFixed(2));
                        jQuery("#overtime_w2").html("0.00");
                    }
                    else {
                        if (weekly_total >= 40 && weekly_total > 0) {

                            weekly_total_ot = weekly_total - 40;
                            week_2_reg = 40;
                            week_2_ot = weekly_total_ot;
                            interimVar = 40 + holiday_total_hours;
                            jQuery("#total_w2").html(interimVar.toFixed(0));
                            jQuery("#overtime_w2").html(weekly_total_ot.toFixed(2));
                        }
                    }

                    // Calculate week 2 scheduled hours
                    if (i != 15 && i != 16 && i != 22 && i != 23 && i != 29 && i != 30) {
                        holiday_status_calc = document.getElementById('holiday' + dayCounter).checked;

                        if (!holiday_status_calc) {
                            week_2_scheduled = week_2_scheduled + daily_scheduled;
                        }
                    }

                    // Calculate Week 2 absence
                    week_2_absence = week_2_absence + dailyAbsence;
                    week_2_decimalAbsence = week_2_decimalAbsence + dailyDecimalAbsence;
                }

                /* Week 3 totals calculation */
                if (i == 24) { weekly_total = 0; holiday_total_hours = 0; }
                if (i > 23 && i <= 30) {
                    weekly_total = weekly_total + time_diff_hours + ((time_diff_minutes) / 60);
                    
                    if (weekly_total < 40 && weekly_total >= 0) {
                        week_3_reg = weekly_total;
                        week_3_ot = 0;
                        interimVar = weekly_total + holiday_total_hours;
                        jQuery("#total_w3").html(interimVar.toFixed(2));
                        jQuery("#overtime_w3").html("0.00");
                    }
                    else {
                        if (weekly_total >= 40 && weekly_total > 0) {

                            weekly_total_ot = weekly_total - 40;
                            week_3_reg = 40;
                            week_3_ot = weekly_total_ot;
                            interimVar = 40 + holiday_total_hours;
                            jQuery("#total_w3").html(interimVar.toFixed(0));
                            jQuery("#overtime_w3").html(weekly_total_ot.toFixed(2));
                        }
                    }

                    // Calculate week 3 scheduled hours
                    if (i != 15 && i != 16 && i != 22 && i != 23 && i != 29 && i != 30) {
                        holiday_status_calc = document.getElementById('holiday' + dayCounter).checked;

                        if (!holiday_status_calc) {
                            week_3_scheduled = week_3_scheduled + daily_scheduled;
                        }
                    }

                    // Calculate Week 3 absence

                    week_3_absence = week_3_absence + dailyAbsence;
                    week_3_decimalAbsence = week_3_decimalAbsence + dailyDecimalAbsence;
                }
            } /* Iteration calculation ends here */

            // Eliminate scheduled hours for 3rd week on 2 week periods
            // 3 week periods for 2020-2021: 1, 5, 13, 19, 22
            if (jQuery('#PeriodSelector').val() != "period1" && jQuery('#PeriodSelector').val() != "period5" && jQuery('#PeriodSelector').val() != "period13" && jQuery('#PeriodSelector').val() != "period19" && jQuery('#PeriodSelector').val() != "period22") {
                week_3_scheduled = 0;
            }

            overall_total_reg = week_1_reg + week_2_reg + week_3_reg;
            overall_total_ot = week_1_ot + week_2_ot + week_3_ot;
            overall_total_absence = week_1_absence + week_2_absence + week_3_absence;

            // Weekly unscheduled hour calculation
            /* This is not to be activated
            if (week_1_reg >= 40 && week_1_absence == 0) { week_1_decimalAbsence = 0; }
            if (week_2_reg >= 40 && week_2_absence == 0) { week_2_decimalAbsence = 0; }
            if (week_3_reg >= 40 && week_3_absence == 0) { week_3_decimalAbsence = 0; }
            */

            //Central office decided to use weekly method for unscheduled calculation on 03/05/2018. Therefore wee_1_absence is used instead of week_1_decimalAbsence.
            week_1_unscheduled = Math.max(0, (week_1_reg - week_1_scheduled + week_1_tardy + week_1_absence));
            week_2_unscheduled = Math.max(0, (week_2_reg - week_2_scheduled + week_2_tardy + week_2_absence));
            week_3_unscheduled = Math.max(0, (week_3_reg - week_3_scheduled + week_3_tardy + week_3_absence));


            overall_total_scheduled = week_1_scheduled + week_2_scheduled + week_3_scheduled;
            overall_total_unscheduled = week_1_unscheduled + week_2_unscheduled + week_3_unscheduled;
            console.clear();
            console.log("Week 1 PTO Absence: " + week_1_absence);
            console.log("Week 1 Scheduled: " + week_1_scheduled);
            console.log("Week 1 Unscheduled: " + week_1_unscheduled);
            console.log("Week 1 Tardy: " + week_1_tardy);

            console.log("Week 2 PTO Absence: " + week_2_absence);
            console.log("Week 2 Scheduled: " + week_2_scheduled);
            console.log("Week 2 Unscheduled: " + week_2_unscheduled);
            console.log("Week 2 Tardy: " + week_2_tardy);

            console.log("Week 3 PTO Absence: " + week_3_absence);
            console.log("Week 3 Scheduled: " + week_3_scheduled);
            console.log("Week 3 Unscheduled: " + week_3_unscheduled);
            console.log("Week 3 Tardy: " + week_3_tardy);
            
            console.log("Daily tardy: " + daily_tardy);
            console.log("total tardy: " + total_tardy);
            /*
            if ((scheduledhour - overall_total_absence) > 0) {
                if (overall_total_reg > (scheduledhour - overall_total_absence)) {
                    unscheduledhour = overall_total_reg - (scheduledhour - overall_total_absence);
                }
                else {
                    unscheduledhour = 0;
                }
            }
            else {
                unscheduledhour = 0;
            }
            */

            jQuery("#total_regular").html(overall_total_reg.toFixed(2));
            jQuery("#total_overtime").html(overall_total_ot.toFixed(2));
            jQuery("#absence").html(overall_total_absence);
            jQuery("#unscheduledhours").html(overall_total_unscheduled.toFixed(2));
            jQuery('#scheduledhours').html(overall_total_scheduled);
        }