// VARIABLE DIV
const content = document.getElementById("content");

// ARRAY
let data = [
  {
    url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4a864049-816a-479e-8736-51740e8b724b.jpg",
    question: "Which ocean lies on the east coast of the United States?",
    choice: ["Eastern", "Pacific", "Indian", "Atlantic"],
    answer: "Atlantic",
  },
  {
    url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4d101ba1-9275-4fb5-ba2c-5606e6c0274e.jpg",
    question: "Which is the world's highest mountain?",
    choice: ["K2", "Makalu", "Mount Everest", "Kilimanjaro"],
    answer: "Mount Everest",
  },
  {
    url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/07121a24-b34b-4711-9bfa-5287163e65ce.jpg",
    question: "Which of these cities is not in Europe?",
    choice: ["Prague", "Moscow", "Barcelona", "Reykjavik"],
    answer: "Moscow",
  },
  {
    url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/467a486b-be3a-4183-90ed-dd6867d5852d.jpg",
    question: "True or False: Iceland is covered in ice.",
    choice: [true, false],
    answer: false,
  },
  {
    url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
    question: "The United Kingdom is comprised of how many countries?",
    choice: [1, 2, 3, 4],
    answer: 4,
  },
  {
    url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
    question: "Which of the following countries do not border France?",
    choice: ["Germany", "Netherlands", "Spain", "Italy"],
    answer: "Netherlands",
  },
  {
    url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/6e99b817-7be7-4f8a-9146-3f602ac81fad.jpg",
    question: "Which U.S. state is the Grand Canyon located in?",
    choice: ["Wyoming", "Arizona", "New Mexico", "Nevada"],
    answer: "Arizona",
  },
  {
    url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/866f119d-e5e2-45ca-846c-b6d10a59d1e4.jpg",
    question: "Which is the smallest country, measured by total land area?",
    choice: ["Maldives", "Monaco", "Vatican"],
    answer: "Vatican",
  },
  {
    url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/13efaf72-d695-4f65-b043-2b805b6a88eb.jpg",
    question: "Which is the longest river in the world?",
    choice: ["Amazon River", "Congo River", "Yellow River", "Nile River"],
    answer: "Nile River",
  },
  {
    url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/1226f177-dc1a-4142-8875-bdaa177717d7.jpg",
    question: "Which is the largest body of water?",
    choice: ["indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Nile River"],
    answer: "Pacific Ocean",
  },
];

// LOOP THROUGH ARRAY
for (let i = 0; i <= data.length; i++) {
  // IMG
  const img = document.createElement("img");
  img.setAttribute("src", data[i].url); //TODO Syntax Error
  content.appendChild(img);

  // QUESTION
  const question = document.createElement("h2");
  question.innerText = data[i].question;
  content.appendChild(question);

  // FOR LOOP FOR CHOICES
  for (let a = 0; a < data[i].choice.length; a++) {
    const choice = document.createElement("button");
    choice.innerText = data[i].choice[a];
    content.appendChild(choice);

    const buttonClick = document.querySelectorAll("button");
    buttonClick.forEach((item) =>
      item.addEventListener("click", () => {
        // TODO not working properly
        if (item.innerText.toString() == data[i].answer.toString()) {
          choice.style.backgroundColor = "green";
          choice.style.color = "white";
          console.log("right choice!" + data[i].answer);
        } else {
          choice.style.backgroundColor = "red";
          choice.style.color = "white";
          console.log("wrong");
        }
      })
    );
  }
}

// ================= Alter Code ================

// const answer = data[i].answer
// img.src = data[i].url;

//   document.querySelector(
//     "#content"
//   ).innerHTML += ` <img src="${data[i].url}" alt=""> <h1> ${data[i].question} </h1> <button>${data[i].choice}</button> <button>${data[i].answer}</button> <br>`;
