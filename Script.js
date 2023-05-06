function Hesapla() {
    // Get values from the current input fields
    let vize = Number($('#vize').val());
    let final = Number($('#final').val());

    // Calculate the final value
    let total = vize * 0.3 + final * 0.7;

    // Write the final value and state
    $('#sonuc').html(total);
    $('#durum').html(total >= 40 ? 'Geçtin' : 'Kaldın');
}

$(function () {
    // Initialize the element with target event handlers
    $('input').change(Hesapla);
});