var inputLists = [];
var r = {};

var getValues = function () {
  title = document.getElementById("title");
  description = document.getElementById("description");
  return title, description;
};

var mainFunction = function () {
  inputLists.push({
    token: Math.floor(Math.random() * 90000) + 10000,
    title: title.value,
    description: description.value,
  });
  console.log(inputLists);
  return inputLists;
};

var results = function () {
  var parentSection = document.getElementById("results");
  parentSection.innerHTML = "";
  inputLists.forEach(function (entry) {
    var section = `
    <div class="alert alert-primary d-flex align-items-center justify-content-between" role="alert">
    <span>${entry.title}</span>
    <span>
    <button type="button" class="btn btn-success px-4" data-bs-toggle="modal" data-bs-target="#Modal${entry.token}">Show</button>
    <button type="button" class="btn btn-danger px-4" onclick="deleteItem(${entry.token})">Delete</button>
    </span>
    <!-- Modal -->
    <div class="modal fade" id="Modal${entry.token}" tabindex="-1" aria-labelledby="Modal${entry.token}Label" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="Modal${entry.token}Label">${entry.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ${entry.description}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    `;

    parentSection.insertAdjacentHTML("beforeend", section);
  });
};

var save = function () {
  getValues();
  mainFunction();
  results();
};

var deleteItem = function (tok) {
  var index = inputLists.findIndex((x) => x.token === tok);
  console.log(index);
  if (index > -1) {
    // only splice array when item is found
    inputLists.splice(index, 1); // 2nd parameter means remove one item only
  }
  results();
};
