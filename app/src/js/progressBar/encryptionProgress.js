const progressBarContainer = document.querySelector("#progress-bar-container");
const progressBar = document.querySelector("#progress-bar");
const messageBox = document.querySelector("#message-box");

export function encryptionProgress() {
  progressBar.classList.remove("bg-[limegreen]");
  progressBar.classList.add("bg-[#db3d3d]");
  progressBar.classList.add("progress-on");
  //
  progressBarContainer.classList.remove("bg-[#82de6f]");
  progressBarContainer.classList.add("bg-[#c86464]");
  progressBarContainer.classList.remove("opacity-10");
  //
  messageBox.innerHTML = "";
  messageBox.innerHTML = `Encrypting Files <span class="text-[red]">●</span> Do Not Close`;
  messageBox.classList.remove("opacity-10");
}
