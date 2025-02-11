const scriptures = [
    { scripture: "Romans 8:38-39", date: "1 January", person: "Mom" },
    { scripture: "Psalm 119:105", date: "2 January", person: "Eniola" },
    { scripture: "Hebrews 10:23", date: "3 January", person: "Imisi" },
    { scripture: "Proverbs 3:5-6", date: "4 January", person: "Mom" },
    { scripture: "Galatians 2:20", date: "5 January", person: "Eniola" },
    { scripture: "1 John 4:4", date: "6 January", person: "Imisi" },
    { scripture: "Isaiah 41:10", date: "7 January", person: "Mom" },
    { scripture: "2 Peter 1:3", date: "8 January", person: "Eniola" },
    { scripture: "Romans 12:2", date: "9 January", person: "Imisi" },
    { scripture: "Matthew 19:26", date: "10 January", person: "Mom" },
    { scripture: "Psalms 91:1-3", date: "11 January", person: "Eniola" },
    { scripture: "1 Corinthians 15:58", date: "12 January", person: "Imisi" },
    { scripture: "Colossians 1:9-10", date: "13 January", person: "Mom" },
    { scripture: "Isaiah 41:13", date: "14 January", person: "Eniola" },
    { scripture: "2 Corinthians 4:7", date: "15 January", person: "Imisi" },
    { scripture: "Matthew 4:4", date: "16 January", person: "Mom" },
    { scripture: "Hebrews 11:5", date: "17 January", person: "Eniola" },
    { scripture: "Hebrews 13:16", date: "18 January", person: "Imisi" },
    { scripture: "Philippians 4:6-7", date: "19 January", person: "Mom" },
    { scripture: "Psalm 34:1", date: "20 January", person: "Eniola" },
    { scripture: "John 14:27", date: "21 January", person: "Imisi" },
    { scripture: "Ephesians 6:10-12", date: "22 January", person: "Mom" },
    { scripture: "Psalm 91:1-2", date: "23 January", person: "Eniola" },
    { scripture: "2 Corinthians 5:21", date: "24 January", person: "Mom" },
    { scripture: "Philippians 1:6", date: "25 January", person: "Imisi" },
    { scripture: "Micah 3:10", date: "26 January", person: "Eniola" },
    { scripture: "1 Corinthians 1:27", date: "27 January", person: "Imisi" },
    { scripture: "Philippians 4:13", date: "28 January", person: "Mom" },
    { scripture: "James 1:22-24", date: "29 January", person: "Eniola" },
    { scripture: "2 Corinthians 4:16", date: "30 January", person: "Imisi" },
    { scripture: "John 1:14", date: "31 January", person: "Mom" },
    { scripture: "Galatians 6:9", date: "1 February", person: "Eniola" },
    { scripture: "Luke 23:42-43", date: "2 February", person: "Imisi" },
    { scripture: "Proverbs 4:23", date: "3 February", person: "Mom" },
    { scripture: "Colossians 3:16", date: "4 February", person: "Eniola" },
    { scripture: "Hebrews 12:11", date: "5 February", person: "Imisi" },
    { scripture: "1 John 5:4-5", date: "6 February", person: "Mom" },
    { scripture: "James 3:17", date: "7 February", person: "Eniola" },
    { scripture: "James 1:17", date: "8 February", person: "Imisi" },
    { scripture: "Isaiah 54:17", date: "9 February", person: "Mom" },
    { scripture: "Isaiah 26:3", date: "10 February", person: "Eniola" },
    { scripture: "1 Corinthians 2:14", date: "11 February", person: "Imisi" },
  ];
  
  function checkScripture(scripture) {
    return scriptures.find((entry) => entry.scripture.toLowerCase() === scripture.toLowerCase());
  }
  
  
  document.getElementById("scriptureForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const scriptureInput = document.getElementById("scriptureInput").value.trim();
    if (scriptureInput) {
      displayResult(scriptureInput);
    }
  });

  function displayResult(scripture) {
    const resultDiv = document.getElementById("result");
    const entry = checkScripture(scripture);
  
    // Reset classes
    resultDiv.className = "";
  
    if (entry) {
      resultDiv.innerHTML = `
        <p><strong>${entry.scripture}</strong> was already covered on <strong>${entry.date}</strong> by <strong>${entry.person}</strong>.</p>
      `;
      resultDiv.classList.add("used"); // Add class for used scripture
    } else {
      resultDiv.innerHTML = `<p><strong>${scripture}</strong> is available!</p>`;
      resultDiv.classList.add("not-used"); // Add class for new scripture
    }
  }

  
