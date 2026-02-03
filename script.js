const data = [
    "JavaScript is a powerful language",
    "Frontend development uses HTML CSS and JS",
    "Backend developers work with databases",
    "Search algorithms improve performance",
    "Learning JavaScript deeply is important",
    "Clean code matters more than frameworks",
    "احمد عبدالجيد"
];

const input = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    resultsDiv.innerHTML = "";

    if (!query) return;

    const results = data
        .map(text => ({
            text,
            score: text.toLowerCase().includes(query)
                ? query.length / text.length
                : 0
        }))
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score);

    results.forEach(item => {
        const highlighted = item.text.replace(
            new RegExp(query, "gi"),
            match => `<mark>${match}</mark>`
        );

        const div = document.createElement("div");
        div.className = "result";
        div.innerHTML = highlighted;
        resultsDiv.appendChild(div);
    });
});
