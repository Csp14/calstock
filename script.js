$(document).ready(function() {
    $('#stockForm').submit(function(e) {
        e.preventDefault();
        var tickerSymbol = $('#tickerSymbol').val();
        
        $.ajax({
            type: 'POST',
            url: '/analyze',
            data: { tickerSymbol: tickerSymbol },
            success: function(data) {
                $('#results').show();
                $('#signal').text('Signal: ' + data.signal);
                $('#ema5').text('EMA 5-day: ' + data.ema5);
                $('#ema10').text('EMA 10-day: ' + data.ema10);
                $('#ema20').text('EMA 20-day: ' + data.ema20);
            },
            error: function(error) {
                $('#results').show();
                $('#signal').text('');
                $('#ema5').text('');
                $('#ema10').text('');
                $('#ema20').text('');
                alert('Error fetching data: ' + error.responseJSON.error);
            }
        });
    });
});
