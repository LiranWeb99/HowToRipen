$('#form').submit(function(e) {
    document.getElementById("submissionSucces").classList.remove("delete");
    document.getElementById("submit").classList.add("delete");
    e.preventDefault();
    $.ajax({
        url: "https://docs.google.com/forms/u/2/d/e/1FAIpQLSeBJHw1Q6YlwO_0s2OgMhuyQEj4PLvToM1N1G5BEYQRiZlCLQ/formResponse",
        data: $(this).serialize(),
        type: "POST",
        dataType: "xml",
        success: function(data) {
            console.log('Submission successful');
        },
        error: function(xhr, status, error) {
            console.log('Submission failed: ' + error);
        }
    });
});

//Cancel google form response + Send data to DB (EXCEL-drive)