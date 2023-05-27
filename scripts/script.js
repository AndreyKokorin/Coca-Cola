const questionBanka = document.querySelector(".animationQuest"),
      colaZ = document.querySelector(".colZ"),
      banka = document.querySelector(".banka"),
      question = document.querySelector(".question"),
      lines = document.querySelector(".images__item7"),
      colZ = document.querySelector(".colZ"),
      dinamictext = [document.querySelector(".subtitle"), document.querySelector(".hashtag")],
      massage = document.querySelector(".images__item8"),
      footer = document.querySelector(".footer");

questionBanka.addEventListener("click", () => {
    banka.classList.add("offquestionanim");
    question.classList.add("offquestionanim");
    lines.classList.add("dnone");
    colZ.classList.add("onBank");
    massage.classList.add("massagemove");
    dinamictext.forEach(item => item.classList.add("opacityOn"));
    footer.classList.add("opacity1")
})
