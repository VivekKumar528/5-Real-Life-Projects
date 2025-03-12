var arr = [
  {
    dp: "https://images.unsplash.com/photo-1615212814093-f56085658024?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1562894369-193bedce28e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
  },

  {
    dp: "https://images.unsplash.com/photo-1617922304319-48eba6011532?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ5fHx8ZW58MHx8fHx8",
    story:
      "https://images.unsplash.com/photo-1508606572321-901ea443707f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUyfHx8ZW58MHx8fHx8",
  },

  {
    dp: "https://plus.unsplash.com/premium_photo-1668485966765-a4ef334fb7eb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1670297116249-e129fd722ae0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
  },

  {
    dp: "https://images.unsplash.com/photo-1508285296015-c0b524447532?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
    story:
      "https://images.unsplash.com/photo-1559828801-04565cd31e27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
  },
];
var stories = document.querySelector("#stories");
var clutter = "";
arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
          <img id="${idx}" src="${elem.dp}" alt="" />
        </div>`;
});
stories.innerHTML = clutter;

stories.addEventListener("click", function (dets) {
  var value = arr[dets.target.id].story;
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector(
    "#full-screen"
  ).style.backgroundImage = `url(${value})`;

  setTimeout(function () {
    document.querySelector("#full-screen").style.display = "none";
  }, 3000);
});
