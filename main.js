$(function() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }

  const contact = function(e) {
    e.preventDefault;
  };

  $("#submit").on("click", contact);

  $(".bar").on("click", openNav);

  // $("#myBtn").click(function() {
  //   console.log("workign");
  //   $("#myModal").modal();
  // });

  $("#myBtn").click(function() {
    $("#myModal").modal();
  });

  // const modal = document.getElementById("myModal");
  // const btn = document.getElementById("myBtn");
  const span = document.getElementsByClassName("close")[0];

  // console.log(btn);

  // btn.click = function() {
  //   console.log("blegh");
  //   modal.style.display = "block";
  // };

  // span.onclick = function() {
  //   modal.style.display = "none";
  // };

  // window.onclick = function(event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // };
});
