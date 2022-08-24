let mode1 = document.getElementById("mode1");
let mode2 = document.getElementById("mode2");
let mode3 = document.getElementById("mode3");
let crnt_mode = document.getElementById("crnt_mode");
let heading = document.getElementById("heading_main");
let screen = document.getElementById("screen");
let keypad_container = document.getElementById("keypad_container");
let buttons = Array.from(document.querySelectorAll("button"));
let dlet = document.getElementById("delete");
let reset = document.getElementById("reset");
let equal = document.getElementById("equal");
let tgl_area = document.getElementById("tgl_area");
var audio = new Audio("./click_sound.wav");

mode1.addEventListener("click", mode1_layout);
mode2.addEventListener("click", mode2_layout);
mode3.addEventListener("click", mode3_layout);
reset.addEventListener("click", resetfunct);
equal.addEventListener("click", equalfunct);
dlet.addEventListener("click", deletefunct);

// Timeout for Preloader
setTimeout(() => {
  document.getElementById("loading").style.display = "none";
}, 2450);

function mode1_layout() {
  document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
  audio.play();
  crnt_mode.classList.remove("tgl_active_3");
  crnt_mode.classList.remove("tgl_active_2");
  crnt_mode.classList.add("tgl_active_1");

  tgl_area.classList.remove("tgl_mode_3");
  tgl_area.classList.remove("tgl_mode_2");
  tgl_area.classList.add("tgl_mode_1");

  heading.classList.remove("head3");
  heading.classList.remove("head2");
  heading.classList.add("head1");

  screen.classList.remove("scrn_3");
  screen.classList.remove("scrn_2");
  screen.classList.add("scrn_1");

  keypad_container.classList.remove("kpd_con_3");
  keypad_container.classList.remove("kpd_con_2");
  keypad_container.classList.add("kpd_con_1");

  buttons.forEach((button) => {
    button.classList.remove("Btn_thm_3");
    button.classList.remove("Btn_thm_2");
    button.classList.add("Btn_thm_1");
  });
  dlet.classList.remove("Btn_thm_3");
  dlet.classList.remove("Btn_thm_2");
  dlet.classList.remove("Btn_thm_1");
  dlet.classList.remove("del3");
  dlet.classList.remove("del2");
  dlet.classList.add("del1");

  reset.classList.remove("Btn_thm_3");
  reset.classList.remove("Btn_thm_2");
  reset.classList.remove("Btn_thm_1");
  reset.classList.remove("reset_thm_3");
  reset.classList.remove("reset_thm_2");
  reset.classList.add("reset_thm_1");

  equal.classList.remove("Btn_thm_3");
  equal.classList.remove("Btn_thm_2");
  equal.classList.remove("Btn_thm_1");
  equal.classList.remove("equal_thm_3");
  equal.classList.remove("equal_thm_2");
  equal.classList.add("equal_thm_1");
}

function mode2_layout() {
  document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
  audio.play();
  crnt_mode.classList.remove("tgl_active_1");
  crnt_mode.classList.remove("tgl_active_3");
  crnt_mode.classList.add("tgl_active_2");

  tgl_area.classList.remove("tgl_mode_3");
  tgl_area.classList.remove("tgl_mode_1");
  tgl_area.classList.add("tgl_mode_2");

  heading.classList.remove("head3");
  heading.classList.remove("head1");
  heading.classList.add("head2");

  screen.classList.remove("scrn_3");
  screen.classList.remove("scrn_1");
  screen.classList.add("scrn_2");

  keypad_container.classList.remove("kpd_con_3");
  keypad_container.classList.remove("kpd_con_1");
  keypad_container.classList.add("kpd_con_2");

  buttons.forEach((button) => {
    button.classList.remove("Btn_thm_3");
    button.classList.remove("Btn_thm_1");
    button.classList.add("Btn_thm_2");
  });
  dlet.classList.remove("Btn_thm_3");
  dlet.classList.remove("Btn_thm_2");
  dlet.classList.remove("Btn_thm_1");
  dlet.classList.remove("del3");
  dlet.classList.remove("del1");
  dlet.classList.add("del2");

  reset.classList.remove("Btn_thm_3");
  reset.classList.remove("Btn_thm_2");
  reset.classList.remove("Btn_thm_1");
  reset.classList.remove("reset_thm_3");
  reset.classList.remove("reset_thm_1");
  reset.classList.add("reset_thm_2");

  equal.classList.remove("Btn_thm_3");
  equal.classList.remove("Btn_thm_2");
  equal.classList.remove("Btn_thm_1");
  equal.classList.remove("equal_thm_3");
  equal.classList.remove("equal_thm_1");
  equal.classList.add("equal_thm_2");
}
function mode3_layout() {
  document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
  audio.play();
  crnt_mode.classList.remove("tgl_active_1");
  crnt_mode.classList.remove("tgl_active_2");
  crnt_mode.classList.add("tgl_active_3");

  tgl_area.classList.remove("tgl_mode_1");
  tgl_area.classList.remove("tgl_mode_2");
  tgl_area.classList.add("tgl_mode_3");

  heading.classList.remove("head1");
  heading.classList.remove("head2");
  heading.classList.add("head3");

  screen.classList.remove("scrn_1");
  screen.classList.remove("scrn_2");
  screen.classList.add("scrn_3");

  keypad_container.classList.remove("kpd_con_2");
  keypad_container.classList.remove("kpd_con_2");
  keypad_container.classList.add("kpd_con_3");

  buttons.forEach((button) => {
    button.classList.remove("Btn_thm_1");
    button.classList.remove("Btn_thm_2");
    button.classList.add("Btn_thm_3");
  });
  dlet.classList.remove("Btn_thm_3");
  dlet.classList.remove("Btn_thm_2");
  dlet.classList.remove("Btn_thm_1");
  dlet.classList.remove("del1");
  dlet.classList.remove("del2");
  dlet.classList.add("del3");

  reset.classList.remove("Btn_thm_3");
  reset.classList.remove("Btn_thm_2");
  reset.classList.remove("Btn_thm_1");
  reset.classList.remove("reset_thm_1");
  reset.classList.remove("reset_thm_2");
  reset.classList.add("reset_thm_3");

  equal.classList.remove("Btn_thm_3");
  equal.classList.remove("Btn_thm_2");
  equal.classList.remove("Btn_thm_1");
  equal.classList.remove("equal_thm_1");
  equal.classList.remove("equal_thm_2");
  equal.classList.add("equal_thm_3");
}

screen.innerHTML = "";

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    audio.play();
    screen.innerHTML += event.target.value;
  });
});

function resetfunct() {
  screen.innerHTML = "";
}
function equalfunct() {
  if (screen.innerHTML == "") {
    screen.innerHTML = "";
  } else {
    screen.innerHTML = eval(screen.innerHTML);
  }
}
function deletefunct() {
  screen.innerHTML = screen.innerHTML.slice(0, -1);
}
