$(function () {
  $(".add-class").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");

    var newSubject = {
        subject_name: $("#add-subject").val().trim(),
    };

    $.ajax("/api/subjects", {
      type: "POST",
      data: newSubject
    }).then(function () {
      console.log("Created new subject.");
      location.reload();
    });
  });

  $(".not-devoured").on("click", function(event) {
    var id = $(this).data("id");
    console.log(id);

    var devouredState = {
      devoured: true,
    };


    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function () {
      console.log("Devoured burger #", id);
      location.reload();
    }).fail(function(err){
      console.log(err);
    });
  });

  $(".devoured").on("click", function (event) {
    var id = $(this).data("id");
    console.log(id);

    // var devouredState = {
    //   devoured: true,
    // };

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
      // data: devouredState
    }).then(function () {
      console.log("Deleted burger #", id);
      location.reload();
    }).fail(function(err){
      console.log("Error: " + err);
    });

  });
});
